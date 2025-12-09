import "reflect-metadata";
import { AppDataSource } from "../src/config/dataSource";
import app from "../src/server";

let isInitialized = false;
let initPromise: Promise<void> | null = null;

const initialize = async () => {
  // Si ya hay una inicialización en progreso, esperarla
  if (initPromise) {
    return initPromise;
  }

  if (!isInitialized) {
    initPromise = (async () => {
      try {
        console.log("Initializing database...");
        const startTime = Date.now();
        
        await AppDataSource.initialize();
        
        const endTime = Date.now();
        console.log(`Database initialized in ${endTime - startTime}ms`);
        
        isInitialized = true;
      } catch (error) {
        console.error("Error initializing database:", error);
        initPromise = null; // Reset para reintentar
        throw error;
      }
    })();

    return initPromise;
  }
};

// Handler para Vercel
export default async (req: any, res: any) => {
  try {
    // Timeout de 8 segundos (antes del límite de Vercel)
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Database initialization timeout')), 8000);
    });

    await Promise.race([initialize(), timeoutPromise]);
    
    return app(req, res);
  } catch (error) {
    console.error("Error in serverless function:", error);
    
    // Si falla, intenta responder igualmente
    if (error instanceof Error && error.message.includes('timeout')) {
      return res.status(503).json({ 
        error: "Service Temporarily Unavailable",
        message: "Database connection timeout. Please try again.",
        details: error.message
      });
    }
    
    return res.status(500).json({ 
      error: "Internal Server Error",
      message: error instanceof Error ? error.message : "Unknown error"
    });
  }
};
