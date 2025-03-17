import { cuentas } from "../models/accountsModel.js"
import { usuarios } from "../models/usuariosModel.js"
import mongoose from "mongoose";

export default {
    add: async (req, res) => {
        try {

            const id_usuario = req.query._id
            const usuario = await usuarios.findById(id_usuario)
            if (!usuario) return res.status(400).json({ "msg": "usuario no encontrado" })

            const { numero, tipo, informacion } = req.body
            if (!numero || !tipo || !informacion) return res.status(400).json({ "msg": "algo me falto" })

            const newAccount = {
                numero: numero,
                tipo: tipo,
                id_usuario: id_usuario,
                informacion: informacion
            }

            await cuentas.create(newAccount)

            return res.status(200).json({ "msg": "cuenta añadida" })

        } catch (err) {
            console.log(err)
            res.status(500).json({ "msg": "error en el servidor" })
        }
    },
    delete: async (req, res) => {
        try {

            const cuenta = await cuentas.findByIdAndDelete(req.query._id)
            if (!cuenta) return res.status(400).json({ "msg": "no encontre nada" })

            return res.status(200).json({ "msg": "se elimino con exito" })

        } catch (err) {
            console.log(err)
            return res.status(500).json({ "msg": "error en el servidor" })
        }
    },
    getAccountInfo: async (req, res) => {
        try {
            const { _id } = req.query;

            // Convierte el _id a ObjectId
            const objectId = new mongoose.Types.ObjectId(_id);

            const account = await cuentas.findOne({ id_usuario: objectId });
            if (!account) {
                return res.status(404).json({ "msg": "Cuenta no encontrada" });
            }

            return res.status(200).json(account);
        } catch (err) {
            console.error(err)
            return res.status(500).json({ "msg": "Error en el servidor" })
        }
    },
    addSolvency: async (req, res) => {
        try {
            const { _id } = req.query;

            // Convierte el _id a ObjectId
            const objectId = new mongoose.Types.ObjectId(_id);

            const account = await cuentas.findOneAndUpdate({ id_usuario: objectId });
            if (!account) {
                return res.status(404).json({ "msg": "Cuenta no encontrada" });
            }

            return res.status(200).json(account);
        } catch (err) {
            console.error(err)
            return res.status(500).json({ "msg": "Error en el servidor" })
        }
    },
    getaccounts: async (req, res) => {
        try {
            const { _id } = req.query;

            // Convierte el _id a ObjectId
            const objectId = new mongoose.Types.ObjectId(_id);

            const accounts = await cuentas.find({ id_usuario: objectId });
            if (!accounts) {
                return res.status(404).json({ "msg": "Cuentas no encontradas" });
            }

            return res.status(200).send(accounts);
        } catch (err) {
            console.error(err)
            return res.status(500).json({ "msg": "Error en el servidor" })
        }
    }
}