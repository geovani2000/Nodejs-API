import {conex} from '../conexion.js';

export const ping = async (req,res)=> {
    const [result] = await conex.query('SELECT "Si funciona" AS resultado');
    res.json(result[0]);
}