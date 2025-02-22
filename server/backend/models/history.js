import mongoose from "mongoose"

const historySchema = new mongoose.Schema({
    id_cuenta: String,
        ingresos:[

        ],
        egresos:[

        ]

        
})

export const history = new mongoose(
    "history", historySchema
)