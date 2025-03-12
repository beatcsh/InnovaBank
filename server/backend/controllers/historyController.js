import { history } from "../models/historyModel.js"

export default {
    getHistorial: async (req, res) => {
        try {

            const historiales = await history.find()
            return res.status(200).send(historiales)

        } catch (err) {
            console.log(err)
            return res.status(500).json({ "msg": "error en el servidor" })
        }
    },
    getHistorial: async (req, res) => {
        try {

            const id_cuenta = req.query.id_cuenta
            const history = await history.findOne({ id_cuenta })
            if ( !history ) return res.status(400).json({ "msg": "no existe un historial" })

            return res.status(200).send(history)

        } catch (err) {
            console.log(err)
            return res.status(500).json({ "msg": "error en el servidor" })
        }
    }
}