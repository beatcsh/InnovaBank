import mongoose from "mongoose"

const incomesSchema = new mongoose.Schema({
    id_cuenta: String,
    categoria: String,
    monto: int,
    fecha: Date,
    frecuencia: String,
        fuente: {
            concepto: {type: String, required: true},
            remitente: {type: String, required: true},
            banco: {type: String, required: true},
            cuenta: {type: int, required: true}
        }

})

export const incomes = new mongoose(
    "incomes", incomesSchema
)