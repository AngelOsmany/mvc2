import {model} from "mongoose";
import { empleado_esquema } from "./empleado.model.js";

export const accionistas_model = new model("Accionistas", empleado_esquema)