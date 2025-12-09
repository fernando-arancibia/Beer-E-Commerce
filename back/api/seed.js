require("reflect-metadata");
const { AppDataSource } = require("../src/config/dataSource");
const { preLoadCategories } = require("../src/helpers/preLoadCategories");
const { preLoadProducts } = require("../src/helpers/preLoadProducts");

let isInitialized = false;

module.exports = async (req, res) => {
  try {
    console.log("Initializing seed data...");
    
    if (!isInitialized && !AppDataSource.isInitialized) {
      await AppDataSource.initialize();
      isInitialized = true;
    }
    
    // Ejecutar precargas
    await preLoadCategories();
    await preLoadProducts();
    
    return res.status(200).json({
      success: true,
      message: "Database seeded successfully",
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error("Error seeding database:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
      error: error.toString()
    });
  }
};
