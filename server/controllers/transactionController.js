import {
  createTransaction,
  getTransactionsByUser,
  deleteTransaction
} from "../repositories/transactionRepository.js";

export const addTransaction = async (req, res) => {
  try {

    const transaction = await createTransaction({
      title: req.body.title,
      amount: req.body.amount,
      user: req.user.id   // ✅ FIXED
    });

    res.json(transaction);

  } catch (error) {

    console.error(error);
    res.status(500).json({ message: "Server Error" });

  }
};

export const getTransactions = async (req, res) => {
  try {

    const transactions = await getTransactionsByUser(req.user.id);

    res.json(transactions);

  } catch (error) {

    console.error(error);
    res.status(500).json({ message: "Server Error" });

  }
};

export const removeTransaction = async (req, res) => {
  try {

    await deleteTransaction(req.params.id);

    res.json({ message: "Deleted" });

  } catch (error) {

    console.error(error);
    res.status(500).json({ message: "Server Error" });

  }
};