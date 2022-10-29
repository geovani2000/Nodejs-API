import {createPool} from 'mysql2/promise'
import {  HOST,USER,PASS,PORT,DATABASE} from './config.js';

export const conex = createPool({
    host: HOST,
    user: USER,
    password: PASS,
    port: PORT,
    database: DATABASE
});