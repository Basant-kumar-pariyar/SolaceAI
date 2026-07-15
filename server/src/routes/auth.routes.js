import express from "express";
import {
    validateRegister,
    validateLogin,
} from "../middleware/auth.middleware.js";
import {
    register,
    login,
} from "../controllers/auth.controller.js";

const router = express.Router();
router.post("/register",validateRegister,register);
router.post("/login", validateLogin, login);
export default router;