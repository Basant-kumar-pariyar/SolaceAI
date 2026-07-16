import express from "express";
import { authenticateUser } from "../middleware/authJwt.middleware.js";
import {
    createMood,
    getMoodHistory,
    updateMood,
    deleteMood,
} from "../controllers/mood.controller.js";
const router = express.Router();

router.post("/", authenticateUser, createMood);
router.get(
  "/",
  authenticateUser,
  getMoodHistory
);
router.put(
    "/:id",
    authenticateUser,
    updateMood
);

router.delete(
    "/:id",
    authenticateUser,
    deleteMood
);

export default router;