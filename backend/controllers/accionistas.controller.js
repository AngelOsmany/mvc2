import { accionistas_model } from "../models/accionistas.model.js";

export const test_accionistas = ()=>{
    console.log("Controlador de accionistas funciona")
}
accionistas_model.create({
    nombre:"Osmany",
    edad:22
})