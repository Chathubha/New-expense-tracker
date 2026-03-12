import {
  createTransaction,
  getTransactionsByUser,
  deleteTransaction,
  updateTransaction
} from "../repositories/transactionRepository.js";

export const addTransaction = async (req, res) => {
  try {

    const transaction = await createTransaction({
      title: req.body.title,
      amount: req.body.amount,
      category: req.body.category,
      date: req.body.date,
      user: req.user.id
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

export const editTransaction = async (req, res) => {

  try {

    const updated = await updateTransaction(
      req.params.id,
      {
        title: req.body.title,
        amount: req.body.amount,
        category: req.body.category,
        date: req.body.date
      }
    );

    res.json(updated);

  } catch (error) {

    console.error(error);
    res.status(500).json({ message: "Server Error" });

  }

};