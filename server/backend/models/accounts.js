import mongoose from " mongoose"

const accountsSchema = new mpongoose.Schema({
    numero: String,
    id_usuario: String,
    tipo: String,
    informacion: {
        balance: { type: int, required: true },
        no_tarjeta: {type:int},
        cvv: {type:int},
        nip: {type:int},
        fecha_exp: {type:Date}
    }
})

export const accounts = new mongoose(
    "accounts", accountsSchema
)