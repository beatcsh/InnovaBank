import { Router } from "express"
import historyController from "../controllers/historyController.js"

const router = Router()

// Rutas para las transacciones
router.get("/get-adds", historyController.getAdditions)

export default router