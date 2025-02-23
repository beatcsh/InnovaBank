import { Router } from "express"
import transactionsController from "../controllers/transactionsController.js"

const router = Router()

router.post("/create", transactionsController.create) // Crear una transacción
router.get("/all", transactionsController.getAll) // Obtener todas las transacciones
router.get("/one", transactionsController.getOne)

export default router
