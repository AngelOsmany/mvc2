import { supervisor_modelo } from "../models/supervisor.model.js";

export const test_supervisor = ()=>{
    console.log("Controlador de supervisor funciona")
}
supervisor_modelo.create({
    nombre:"Israel",
    edad:40
})