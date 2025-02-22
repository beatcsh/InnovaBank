import { transacciones } from "../models/transactions.js"
import { accounts } from "../models/accounts.js"
import { history } from "../models/history.js" // pendiente

export default {
    create: async (req, res) => {
        try {

            const { id_cuenta } = req.body
            const cuenta = await accounts.findById(id_cuenta)
            if ( !cuenta ) return res.status(400).json({ "msg": "no existe la cuenta" })

            const { tipo, descripcion, monto, fecha, informacion } = req.body
            if ( !id_cuenta || !tipo || !descripcion || !fecha || !informacion ) return res.status(400).json({ "msg": "error con uno de los datos" })
            
            // inc
            const op = tipo === 'ingreso' ? monto : -monto // por comprobar (creo si funciona)
            await accounts.findByIdAndUpdate(id_cuenta, {
                $inc: { 'informacion.balance': op }
            })

            const newTransaction = await transacciones.create({
                id_cuenta: id_cuenta,
                tipo: tipo,
                description: descripcion,
                monto: monto,
                fecha: fecha,
                informacion: informacion
            })

            // aver
            if (tipo === 'ingreso') {
                await history.findOneAndUpdate({ id_cuenta },{
                    $push: {
                        "ingresos": newTransaction._id
                    }
                })
            } else {
                await history.findOneAndUpdate({ id_cuenta },{
                    $push: {
                        "gasto": newTransaction._id
                    }
                })
            }

            return res.status(200).json({ "msg": "todo bien con tu transaccion" })

        } catch (err) {
            console.log(err)
            return res.status(500).json({ "msg": "error en el servidor" })
        }
    },
    getAll: async (req, res) => {
        try {

            const transacciones = await transacciones.find()
            return res.status(200).json(transacciones)

        } catch (err) {
            console.log(err)
            return res.status(500).json({ "msg": "error en el servidor" })
        }
    }
}