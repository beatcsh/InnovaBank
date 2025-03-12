import { Schema, model } from "mongoose"

const historySchema = new Schema({
    id_cuenta: {type: String, required: true},
        ingresos:[],
        egresos:[]
})

export const history = new model(
    "history", historySchema
)