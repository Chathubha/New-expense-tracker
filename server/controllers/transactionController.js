import {
  createTransaction,
  getTransactionsByUser,
  deleteTransaction
} from "../repositories/transactionRepository.js";

export const addTransaction = async (req, res) => {
  try {
    const transaction = await createTransaction({
      ...req.body,
      userId: req.user.id
    });

    res.json(transaction);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getTransactions = async (req, res) => {
  try {
    const transactions = await getTransactionsByUser(req.user.id);
    res.json(transactions);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const removeTransaction = async (req, res) => {
  try {
    await deleteTransaction(req.params.id);
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};