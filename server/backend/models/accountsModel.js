import { Schema, model } from "mongoose"

const accountsSchema = new Schema({
    numero: {type: String, required: true},
    id_usuario: {type: String, required: true},
    tipo: {type: String, required: true},
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