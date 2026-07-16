import express from "express";
import { authenticateUser } from "../middleware/authJwt.middleware.js";
import { createMood } from "../controllers/mood.controller.js";

const router = express.Router();

router.post("/", authenticateUser, createMood);

export default router;