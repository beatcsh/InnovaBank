import { history } from "../models/historyModel.js";
import { transacciones } from "../models/transactionsModel.js";
import mongoose from "mongoose";

export default {
    getAdditions: async (req, res) => {
        try {

            const { _id } = req.query;
            // Convierte el _id a ObjectId
            const objectId = new mongoose.Types.ObjectId(_id);

            const transacciones_f = await transacciones.find({ id_cuenta: objectId });
            if (!transacciones_f) return res.status(404).json({ "msg": "No se encontraron registros" });

            const adds = transacciones_f.reduce((acumulador, { tipo, monto }) => {
                if (tipo === "ingreso") {
                    acumulador.ingresos += monto
                }
                else if (tipo === "gasto") {
                    acumulador.egresos += monto
                }
                return acumulador
            }, { ingresos: 0, egresos: 0 });

            return res.status(200).send(adds);

        } catch (err) {
            console.log(err)
            return res.status(500).json({ "msg": "error en el servidor" })
        }
    },
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
            if (!history) return res.status(400).json({ "msg": "no existe un historial" })

            return res.status(200).send(history)

        } catch (err) {
            console.log(err)
            return res.status(500).json({ "msg": "error en el servidor" })
        }
    }
}