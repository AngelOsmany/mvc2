import { Schema, model } from "mongoose";

export const empleado_esquema = new Schema({
    nombre:{
        type:String
    },
    edad:{
        type:Number 
    }
})

export const empleado_modelo = new model("Empleado", empleado_esquema)