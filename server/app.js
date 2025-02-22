import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import userRoutes from "./routes/userRoutes.js"; // Importar las rutas de usuarios
import financeRoutes from "./routes/financeRoutes.js"; // Importar las rutas de finanzas (ingresos/gastos)
import transactionRoutes from "./routes/transactionsRoutes.js";


dotenv.config()
mongoose.connect(process.env.url)
    .then(() => console.log("conexion establecida"))
    .catch((err) => console.log("error de conexion", err))

const app = express()
app.use(express.json())
app.use(cors())

app.use("/accounts", accountRoutes); // Ruta para manejar transacciones (ingresos/gastos)
app.use("/users", userRoutes); // Rutas para usuarios
app.use("/transactions", transactionRoutes);

app.listen(4000, () => console.log("servidor funcionando"))