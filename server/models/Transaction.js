import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
{
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  type: {
    type: String,
    enum: ["income", "expense"]
  },
  amount: Number,
  category: String,
  description: String,
  date: {
    type: Date,
    default: Date.now
  }
},
{ timestamps: true }
);

export default mongoose.model("Transaction", transactionSchema);