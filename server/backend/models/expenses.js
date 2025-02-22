import mongoose from "mongoose"

const expensesSchema = new mongoose.Schema({
    id_cuenta: String,
    descripcion: String,
    monto: int,
    categoria: String,
        destinatario:{
           nombre: {type:String, required: true},
           banco: {type:String, required:true},
           cuenta:{type:int, required:true}
        }

})

export const expenses = new mongoose(
    "expenses", expensesSchema
)