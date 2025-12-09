require("reflect-metadata");

const { AppDataSource } = require("../src/config/dataSource");
const app = require("../src/server").default;

let isInitialized = false;
let initPromise = null;

const initialize = async () => {
  console.log("=== VERCEL SERVERLESS START ===");
  console.log("DATABASE_URL exists:", !!process.env.DATABASE_URL);
  console.log("NODE_ENV:", process.env.NODE_ENV);
  
  if (initPromise) {
    console.log("Reusing existing init promise");
    return initPromise;
  }

  if (!isInitialized) {
    initPromise = (async () => {
      try {
        console.log("Starting database initialization...");
        const startTime = Date.now();
        
        if (!AppDataSource.isInitialized) {
          await AppDataSource.initialize();
        }
        
        const endTime = Date.now();
        console.log(`✅ Database initialized successfully in ${endTime - startTime}ms`);
        
        isInitialized = true;
      } catch (error) {
        console.error("❌ Error initializing database:", error);
        console.error("Error details:", {
          name: error.name || 'Unknown',
          message: error.message || 'Unknown error',
          stack: error.stack || 'No stack trace'
        });
        initPromise = null;
        throw error;
      }
    })();

    return initPromise;
  } else {
    console.log("Database already initialized");
  }
};

module.exports = async (req, res) => {
  const requestStart = Date.now();
  console.log(`\n📨 Request: ${req.method} ${req.url}`);
  
  try {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Database initialization timeout after 8s')), 8000);
    });

    await Promise.race([initialize(), timeoutPromise]);
    
    console.log(`⏱️ Total initialization time: ${Date.now() - requestStart}ms`);
    
    return app(req, res);
  } catch (error) {
    console.error("❌ Error in serverless function:", error);
    
    const errorResponse = {
      error: true,
      timestamp: new Date().toISOString(),
      requestDuration: Date.now() - requestStart,
      message: error.message || "Unknown error",
      details: {
        name: error.name || 'Unknown',
        hasDbUrl: !!process.env.DATABASE_URL,
        nodeEnv: process.env.NODE_ENV
      }
    };
    
    console.log("Error response:", JSON.stringify(errorResponse, null, 2));
    
    if (error.message && error.message.includes('timeout')) {
      return res.status(503).json({ 
        ...errorResponse,
        error: "Service Temporarily Unavailable",
        message: "Database connection timeout. Please try again."
      });
    }
    
    return res.status(500).json(errorResponse);
  }
};
