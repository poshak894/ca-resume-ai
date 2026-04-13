import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  email: String,
  plan: String,
  amount: Number,
  paymentId: { type: String, unique: true },
  orderId: String,
  status: { type: String, default: 'success' },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Payment', paymentSchema);
