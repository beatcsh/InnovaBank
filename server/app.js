import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()
mongoose.connect(process.env.url)
    .then(() => console.log("conexion establecida"))
    .catch((err) => console.log("error de conexion", err))

const app = express()
app.use(express.json())
app.use(cors())

app.listen(4000, () => console.log("servidor funcionando"))