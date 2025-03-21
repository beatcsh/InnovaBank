import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import userRoutes from "./backend/routes/usersRoutes.js" 
import transactionRoutes from "./backend/routes/transactionsRoutes.js"
import accountRoutes from "./backend/routes/accountsRoutes.js"
import historyRoutes from "./backend/routes/historyRoutes.js"

dotenv.config()

mongoose.connect(process.env.url)
    .then(() => console.log("conexion establecida"))
    .catch((err) => console.log("error de conexion", err))

// se queda puerto 4000

const app = express()
app.use(express.json())
app.use(cors())

app.use("/accounts", accountRoutes) 
app.use("/users", userRoutes) 
app.use("/transactions", transactionRoutes)
app.use("/history", historyRoutes)

app.listen(4000, () => console.log("servidor funcionando"))