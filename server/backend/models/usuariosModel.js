import { Schema, model } from "mongoose";

const usuariosSchema = new Schema({
    nombre: { type: String, required: true },
    apePa: { type: String, required: true },
    apeMa: { type: String, required: true },
    curp: { type: String, required: true },
    rfc: { type: String, required: true },
    email: { type: String, required: true },
    contraseña: { type: String, required: true },
    telefono: {type: String, required: true},
    direccion: {
        cp: { type: Number, required: true },
        calle: { type: String, required: true },
        numero: { type: Number, required: true },
        colonia: { type: String, required: true },
        estado: { type: String, required: true },
        localidad: { type: String, required: true }
    }
});

export const usuarios = new model(
    "users", usuariosSchema
)