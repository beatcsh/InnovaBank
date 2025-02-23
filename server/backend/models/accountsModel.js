import { Schema, model } from "mongoose"

const accountsSchema = new Schema({
    numero: String,
    id_usuario: String,
    tipo: String,
    informacion: {
        balance: { type: Number, required: true },
        no_tarjeta: {type:Number},
        cvv: {type:Number},
        nip: {type:Number},
        fecha_exp: {type:Date}
    }
})

export const cuentas = new model(
    "accounts", accountsSchema
)