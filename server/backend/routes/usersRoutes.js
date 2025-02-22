import { Router } from "express";
import { register, edit, deleteUser, login } from "../controllers/userController.js";

const router = Router();

// Rutas para los usuarios
router.post("/register", register); // Registrar un nuevo usuario
router.put("/edit", edit); // Editar los detalles de un usuario
router.delete("/delete", deleteUser); // Eliminar un usuario
router.post("/login", login); // Iniciar sesión de usuario

export default router;
