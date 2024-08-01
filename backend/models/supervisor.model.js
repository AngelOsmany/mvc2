import {model} from "mongoose";
import { empleado_esquema } from "./empleado.model.js"

export const supervisor_modelo = new model("Supervisores", empleado_esquema)