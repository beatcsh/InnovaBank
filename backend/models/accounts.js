import mongoose from " mongoose"

const accountsSchema = new mpongoose.Schema({
    numero: String,
    id_usuario: String,
    tipo:String,
        informacion: {
            no_tarjeta: {type:int, required:true},
            cvv: {type:int, required:true},
            nip: {type:int, required: true},
            fecha_exp: {type:Date, required: true}
        }
})

export const accounts = new mongoose(
    "accounts", accountsSchema
)