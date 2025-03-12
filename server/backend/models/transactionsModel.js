import { Schema, model } from "mongoose"

const TransaccionSchema = new Schema({
    id_cuenta: {type: String, required: true},
    tipo: { type: String, enum: ["ingreso", "gasto"], required: true },
    descripcion: { type: String, required: true },
    monto: { type: Number, required: true },
    fecha: { type: Date, default: Date.now },
    informacion: {}
  });
  
export const transacciones = new model("transactions", TransaccionSchema);