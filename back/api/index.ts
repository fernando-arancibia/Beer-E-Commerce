import "reflect-metadata";
import { AppDataSource } from "../src/config/dataSource";
import app from "../src/server";
import { preLoadCategories } from "../src/helpers/preLoadCategories";
import { preLoadProducts } from "../src/helpers/preLoadProducts";

let isInitialized = false;

const initialize = async () => {
  if (!isInitialized) {
    try {
      console.log("Initializing database...");
      await AppDataSource.initialize();
      console.log("Database initialized successfully");
      
      // Solo precarga en la primera inicialización
      await preLoadCategories();
      await preLoadProducts();
      
      isInitialized = true;
    } catch (error) {
      console.error("Error initializing database:", error);
      throw error;
    }
  }
};

// Handler para Vercel
export default async (req: any, res: any) => {
  try {
    await initialize();
    return app(req, res);
  } catch (error) {
    console.error("Error in serverless function:", error);
    return res.status(500).json({ 
      error: "Internal Server Error",
      message: error instanceof Error ? error.message : "Unknown error"
    });
  }
};
