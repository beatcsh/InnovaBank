import { Router } from "express"
import usersController from "../controllers/usersController.js"

const router = Router()

// Rutas para los usuarios
router.post("/register", usersController.register) // Registrar un nuevo usuario
router.put("/edit", usersController.edit) // Editar los detalles de un usuario
router.delete("/delete", usersController.delete) // Eliminar un usuario
router.post("/login", usersController.login) // Iniciar sesión de usuario
router.get("/one", usersController.getUserInfo) // tomar info de un solo usuario
router.get("/solvency", usersController.solvencyRequest) // conexion a el analisis de solvencia

export default router
