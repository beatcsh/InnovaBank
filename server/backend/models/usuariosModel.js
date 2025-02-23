import { Schema, model } from "mongoose";

const usuariosSchema = new Schema({
    nombre: String,
    apePa: String,
    apeMa: String,
    curp: String,
    rfc: String,
    email: String,
    contraseña: String,
        direccion: {
            cp: {type: Number,required:true},
            calle: {type: String, required:true},
            numero: {type: Number,required: true},
            colonia: {type: String, required: true},
            estado: {type: String, required: true},
            localidad: {type: String, required: true}
        }
});

export const usuarios = new model(
    "users", usuariosSchema
)