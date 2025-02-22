import mongoose from "mongoose"

const historySchema = new mongoose.Schema({
    id_cuenta: String,
        ingresos:[{type: mongoose.Schema.Types.ObjectId}],
        egresos:[{type: mongoose.Schema.Types.ObjectId}]

        
})

export const history = new mongoose(
    "history", historySchema
)