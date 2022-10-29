import { Router } from "express";
import {
  obtnerDato,
  crearDato,
  ActualizaDato,
  EliminaDato,
} from "../controller/zapateria.controller.js";


const rutas = Router();

rutas.get("/zapato", obtnerDato);

rutas.post("/zapato", crearDato);

rutas.patch("/zapato/:id", ActualizaDato);

rutas.delete("/zapato/:id", EliminaDato);

export default rutas;
