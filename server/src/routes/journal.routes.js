import express from "express";
import { authenticateUser } from "../middleware/authJwt.middleware.js";

import {
  createJournal,
  getJournals,
  updateJournal,
  deleteJournal,
} from "../controllers/journal.controller.js";

const router = express.Router();

router.post("/", authenticateUser, createJournal);

router.get("/", authenticateUser, getJournals);

router.put("/:id", authenticateUser, updateJournal);

router.delete("/:id", authenticateUser, deleteJournal);

export default router;