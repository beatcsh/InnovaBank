import { Schema, model } from "mongoose"

const historySchema = new Schema({
    id_cuenta: String,
        ingresos:[],
        egresos:[]

        
})

export const history = new model(
    "history", historySchema
)