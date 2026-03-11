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
 category: {
  type: String,
  enum: ["Food", "Transport", "Bills", "Shopping", "Other"],
  required: true
},

  date: {
    type: Date,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

}, { timestamps: true });

export default mongoose.model("Transaction", transactionSchema);