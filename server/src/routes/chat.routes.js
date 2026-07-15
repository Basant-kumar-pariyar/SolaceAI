import express from "express";
import { sendMessage } from "../controllers/chat.controller.js";
import { authenticateUser } from "../middleware/authJwt.middleware.js";

const router = express.Router();

router.post("/", authenticateUser, sendMessage);

export default router;