import { config } from 'dotenv';

config()

export const HOST = process.env.DB_HOST || 'localhost';
export const USER = process.env.DB_USER || 'root';
export const PASS = process.env.DB_PASS || 'geova2000';
export const PORT = process.env.DB_PORT || 3306;
export const DATABASE = process.env.DB_DATABASE || 'zapateria';