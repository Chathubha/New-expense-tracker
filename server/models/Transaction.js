import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  amount: {
    type: Number,
    required: true
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

}, { timestamps: true });

export default mongoose.model("Transaction", transactionSchema);