import {Schema, model} from "mongoose";

const estacionamiento_esquema = new Schema({
    espacios_usados:{
        type:Number
    },
    espacios_libres:{
        type:Number
    } 
})
export const estacionamiento_model = new model("Espacios de estacionamiento", estacionamiento_esquema)