import { DataSource } from "typeorm";
import { DATABASE_URL, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./envs";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { Order } from "../entities/Order";
import { Category } from "../entities/Category";
import { Product } from "../entities/Product";

export const AppDataSource = new DataSource(
  DATABASE_URL
    ? {
        // Configuración para producción (Neon)
        type: "postgres",
        url: DATABASE_URL,
        ssl: {
          rejectUnauthorized: false,
        },
        synchronize: false, // ⚠️ Importante: false en producción
        logging: false,
        entities: [User, Credential, Order, Product, Category],
        subscribers: [],
        migrations: [],
      }
    : {
      // Configuración para desarrollo local
  type: "postgres",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true,
  dropSchema: false,
  logging: false,
  entities: [User, Credential, Order, Product, Category],
  subscribers: [],
  migrations: [],
});
