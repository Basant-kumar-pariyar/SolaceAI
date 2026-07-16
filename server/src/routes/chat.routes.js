import express from "express";
import {
    sendMessage,
    getChatHistory,
} from "../controllers/chat.controller.js";

import { authenticateUser } from "../middleware/authJwt.middleware.js";

const router = express.Router();

router.post("/", authenticateUser, sendMessage);

router.get(
    "/history",
    authenticateUser,
    getChatHistory
);

export default router;