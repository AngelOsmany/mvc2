import { empleado_modelo } from "../models/empleado.model.js";

export const test_empleado = ()=>{
    console.log("Controlador de empleado funciona")
}
empleado_modelo.create({
    nombre:"Josue",
    edad:21
})
