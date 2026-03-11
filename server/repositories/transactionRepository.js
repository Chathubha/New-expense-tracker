import Transaction from "../models/Transaction.js";

export const createTransaction = async (data) => {
  const transaction = new Transaction(data);
  return await transaction.save();
};

export const getTransactionsByUser = async (userId) => {
  return await Transaction.find({ user: userId }); // ✅ FIX
};

export const deleteTransaction = async (id) => {
  return await Transaction.findByIdAndDelete(id);
};