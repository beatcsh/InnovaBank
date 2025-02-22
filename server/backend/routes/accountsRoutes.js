import { Router } from "express";
import { add, deleteTransaction, getAllByUser, getByType } from "../controllers/financeController.js";

const router = Router();

// Rutas para las transacciones
router.post("/add", add); // Agregar ingreso o gasto
router.delete("/delete", deleteTransaction); // Eliminar transacción

export default router;
