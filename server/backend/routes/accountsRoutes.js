import { Router } from "express";
import { add, deleteTransaction, getAccountInfo } from "../controllers/transactionsController.js";

const router = Router();

// Rutas para las transacciones
router.post("/add", add); // Agregar ingreso o gasto
router.delete("/delete", deleteTransaction); // Eliminar transacción
router.get("/one", getAccountInfo)

export default router;
