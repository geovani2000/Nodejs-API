import { Router } from "express";
import { ping } from "../controller/index.controller.js";

const rutas = Router()

rutas.get('/ping',ping );

export default rutas