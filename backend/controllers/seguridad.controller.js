import { seguridad_modelo } from "../models/seguridad.model.js";

export const test_seguridad = ()=>{
    console.log("Controlador de seguridad funciona")
}
seguridad_modelo.create({
    nombre:"Dominic",
    edad:"22"
})