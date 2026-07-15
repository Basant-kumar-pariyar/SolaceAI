import express from "express";
import {
    validateRegister,
    validateLogin,
} from "../middleware/auth.middleware.js";
import {
    register,
    login,
} from "../controllers/auth.controller.js";
import { authenticateUser } from "../middleware/authJwt.middleware.js";

const router = express.Router();
router.post("/register",validateRegister,register);
router.post("/login", validateLogin, login);
router.get(
    "/me",
    authenticateUser,
    (req, res) => {

        res.json({

            success:true,

            user:req.user

        });

    }
);
export default router;