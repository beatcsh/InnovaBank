import { Router } from "express"
import accountsController from "../controllers/accountsController.js"

const router = Router()

// Rutas para las transacciones
router.post("/add", accountsController.add) // Agregar ingreso o gasto
router.delete("/delete", accountsController.delete) // Eliminar transacción
router.get("/one", accountsController.getAccountInfo)
router.get("/all", accountsController.getaccounts)

export default router
