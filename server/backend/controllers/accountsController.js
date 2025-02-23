import { cuentas } from "../models/cuentas.js"
import { usuarios } from "../models/usuariosModel.js"

export default {
    add: async (req, res) => {
        try {

            const id_usuario = req.query._id
            const usuario = await usuarios.findById(id_usuario)
            if ( !usuario ) return res.status(400).json({ "msg": "usuario no encontrado" })
            
            const { numero, tipo, informacion } = req.body
            if ( !numero || !tipo || !informacion ) return res.status(400).json({ "msg": "algo me falto" })

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
            if ( !cuenta ) return res.status(400).json({ "msg": "no encontre nada" })
            
            return res.status(200).json({ "msg": "se elimino con exito" })

        }  catch (err) {
            console.log(err)
            return res.status(500).json({ "msg": "error en el servidor" })
        }
    },
    getAccountInfo: async (req, res) => {
        try {
            const id = req.query._id;
            const account = await cuentas.findOne({ _id_usuario: id });
            if (!account) return res.status(404).json({ "msg": "Cuenta no encontrada" });

            return res.status(200).json(account);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ "msg": "Error en el servidor" });
        }
    }
}