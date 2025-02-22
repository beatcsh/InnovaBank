import {Schema, model} from "mongoose"

const usuariosSchema = new mongoose.Schema({
    nombre: String,
    apePa: String,
    apeMa: String,
    curp: String,
    rfc: String,
    email: String,
    contraseña: String,
        direccion: {
            cp: {type: int,required:true},
            calle: {type: String, required:true},
            numero: {type: int,required: true},
            colonia: {type: String, required: true},
            estado: {type: String, required: true},
            localidad: {type: String, required: true}
        }
});

export const usuarios = new model(
    "users", usuariosSchema
)