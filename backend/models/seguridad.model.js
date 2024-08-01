import {model} from "mongoose";
import { empleado_esquema } from "./empleado.model.js"

export const seguridad_modelo = new model("Elementos de seguridad", empleado_esquema)