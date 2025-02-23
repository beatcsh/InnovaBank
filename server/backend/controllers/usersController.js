import { usuarios } from "../models/usuarios.js"
import {cuentas} from "../models/accounts.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export default {
    register: async (req, res) => {
        try {

            const { nombre, apePa, apeMa, curp, rfc, email, contrasena } = req.body
            if ( !nombre || !apePa || !apeMa || !curp || !rfc || !email || !contrasena ) return res.status(400).json({ "msg": "error en una de las entradas" })
            const { cp, calle, numero, colonia, estado, localidad } = req.body.direccion
            if ( !cp || !calle || !numero || !colonia || !estado || !localidad ) return res.status(400).json({ "msg": "error en una de las entradas" })

            const newUser = {
                nombre: nombre,
                apePa: apePa,
                apeMa: apeMa,
                curp: curp,
                rfc: rfc,
                email: email,
                contrasena: await bcrypt.hash(contrasena, 10),
                direccion: {
                    cp: cp,
                    calle: calle,
                    numero: numero,
                    colonia: colonia,
                    estado: estado,
                    localidad: localidad
                }
            }

            await usuarios.create(newUser)

            return res.status(200).json({ "msg": "usuario agregado" })
            
        } catch (err) {
            console.log(err)
            return res.status(500).json({ "msg": "error en el servidor" })
        }
    },

    getUserInfo: async (req, res) => {
        try{
            const id = req.query._id;
            const user = await usuarios.findById(id, "-contraseña")
            if(!user) return res.status(404).json({"msg": "Usuario no encontrado"});

            return res.status(200).json(user);

        }catch (err){
            console.error(err);
            return res.status(500).json({"msg": "Error en el servidor"});
        }
    },
    edit: async (req, res) => {
        try {

            const id = req.query._id
            const user = await usuarios.findById(id)
            if ( !user ) return res.status(400).json({ "msg": "no hay usuario que coincida" })

            user.nombre = req.body.nombre ? req.body.nombre : user.nombre
            user.apePa = req.bodyuser.apePa ? req.bodyuser.apePa : user.apePa
            user.apeMa = req.body.apeMa ? req.body.apeMa : user.apeMa
            user.curp = req.body.curp ? req.body.curp : user.curp
            user.rfc = req.body.rfc ? req.body.rfc : user.rfc
            user.contrasena = req.body.contrasena ? await bcrypt.hash(req.body.contrasena, 10) : user.contrasena
            user.direccion = req.body.direccion ? {
                    cp: user.cp = req.body.cp ? req.body.cp : user.cp,
                    calle: user.calle = req.body.calle ? req.body.calle : user.calle,
                    numero: user.numero = req.body.numero ? req.body.numero : user.numero,
                    colonia: user.colonia = req.body.colonia ? req.body.colonia : user.colonia,
                    estado: user.estado = req.body.estado ? req.body.estado : user.estado,
                    localidad: user.localidad = req.body.localidad ? req.body.localidad : user.localidad
            } : user.direccion

            await usuarios.findByIdAndUpdate(id, user)
            return res.status(200).json({ "msg": "actualizado con exito" })

        }  catch (err) {
            console.log(err)
            return res.status(500).json({ "msg": "error en el servidor" })
        }
    },
    delete: async (req, res) => {
        try {

            const user = await usuarios.findByIdAndDelete(req.query._id)
            if ( !user ) return res.status(400).json({ "msg": "no encontre nada" })
            
            return res.status(200).json({ "msg": "se elimino con exito" })

        }  catch (err) {
            console.log(err)
            return res.status(500).json({ "msg": "error en el servidor" })
        }
    },
    login: async (req, res) => {
        try {

            const { email, contrasena } = req.body
            if ( !email || !contrasena ) return res.status(400).json({ "msg": "credenciales invalidas" })
            
            const user = await usuarios.findOne({ email })
            if ( !user ) return res.status(400).json({ "msg": "credenciales invalidas" })
            if ( !bcrypt.compare(contrasena, user.contrasena) ) return res.status(400).json({ "msg": "contraseña incorrecta" })
            
            const load = { _id: user._id, email: user.email }
            const token = await jwt.sign(load, process.env.private_key)

            return res.status(200).json({ token })

        }  catch (err) {
            console.log(err)
            return res.status(500).json({ "msg": "error en el servidor" })
        }
    }
}