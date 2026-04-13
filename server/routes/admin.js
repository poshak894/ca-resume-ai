import express from 'express';
import { adminAuth } from '../middleware/auth.js';
import User from '../models/User.js';
import Payment from '../models/Payment.js';

const router = express.Router();

router.use(adminAuth);

router.get('/users', async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    const mapped = users.map(u => ({
      id: u._id,
      name: u.name,
      email: u.email,
      plan: u.plan === 'free' ? 'Free' : u.plan === 'tools' ? 'Tools' : 'Pro',
      joined: new Date(u.createdAt).toLocaleDateString(),
      payment: u.razorpayPaymentId ? 'Paid' : '—',
      txn: u.razorpayPaymentId || '—',
      status: u.plan !== 'free' ? 'Paid' : 'Free'
    }));
    res.json(mapped);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get('/revenue', async (req, res) => {
  try {
    const revenue = await Payment.aggregate([
      { $group: {
        _id: { $dateToString: { format: "%b %Y", date: "$createdAt" } },
        amt: { $sum: "$amount" },
        orders: { $sum: 1 }
      }},
      { $sort: { "_id": 1 } }
    ]);
    const mapped = revenue.map(r => ({
      month: r._id,
      amt: r.amt,
      orders: r.orders
    }));
    res.json(mapped);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

export default router;
