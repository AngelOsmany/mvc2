import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { test_accionistas } from "./backend/controllers/accionistas.controller.js";
import { test_empleado } from "./backend/controllers/empleado.controller.js";
import { test_estacionamiento } from "./backend/controllers/estacionamiento.controller.js";
import { test_seguridad } from "./backend/controllers/seguridad.controller.js";
import { test_supervisor } from "./backend/controllers/supervisor.controller.js";

dotenv.config()
mongoose.connect(process.env.url)
.then(()=>{
    console.log("Funciono la conexion con la base de datos")
})
.catch((error)=>{
    console.log("Huvo un error en la conexion a la base de datos", error)
})

const app = express()
app.use(cors())

app.listen(4000, ()=>{
    console.log("Funciona el servidor local")
})

test_accionistas()
test_empleado()
test_estacionamiento()
test_seguridad()
test_supervisor()