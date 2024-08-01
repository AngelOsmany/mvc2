import { estacionamiento_model } from "../models/estacionamiento.model.js";

export const test_estacionamiento = ()=>{
    console.log("Controlador de estacionamiento funciona")
}
estacionamiento_model.create({
    espacios_usados:54,
    espacios_libres:46
})