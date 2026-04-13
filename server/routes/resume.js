import express from 'express';
import Resume from '../models/Resume.js';
import User from '../models/User.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authenticateToken);

router.post('/save', async (req, res, next) => {
  try {
    const { resumeData, atsScore } = req.body;
    await Resume.findOneAndUpdate(
      { userId: req.user.userId },
      { resumeData, atsScore, updatedAt: new Date() },
      { upsert: true }
    );
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
});

router.post('/download', async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    if (user.plan === 'free' && (user.downloadCount || 0) >= 1) {
      return res.status(403).json({ error: 'FREE_LIMIT_REACHED' });
    }

    user.downloadCount = (user.downloadCount || 0) + 1;
    await user.save();
    res.json({ success: true, count: user.downloadCount });
  } catch (error) {
    next(error);
  }
});

router.get('/load', async (req, res, next) => {
  try {
    const resume = await Resume.findOne({ userId: req.user.userId });
    res.json(resume || {});
  } catch (error) {
    next(error);
  }
});

export default router;
