import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  addTransaction,
  getTransactions,
  removeTransaction
} from "../controllers/transactionController.js";

const router = express.Router();

router.post("/", authMiddleware, addTransaction);
router.get("/", authMiddleware, getTransactions);
router.delete("/:id", authMiddleware, removeTransaction);

export default router;