import { config } from 'dotenv';

config()

export const PORT = process.env.PORT || 3000;

export const HOST = process.env.DB_HOST || 'localhost';
export const USER = process.env.DB_USER || 'root';
export const PASS = process.env.DB_PASS || 'geova2000';
export const PORTDB = process.env.DB_PORTDB || 3306;
export const DATABASE = process.env.DB_DATABASE || 'zapateria';