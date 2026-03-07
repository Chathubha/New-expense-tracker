import Transaction from "../models/Transaction.js";

export const createTransaction = async (data) => {
  return await Transaction.create(data);
};

export const getTransactionsByUser = async (userId) => {
  return await Transaction.find({ userId }).sort({ date: -1 });
};

export const deleteTransaction = async (id) => {
  return await Transaction.findByIdAndDelete(id);
};