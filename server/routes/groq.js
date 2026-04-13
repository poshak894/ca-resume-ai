import express from 'express';
import { callGroq } from '../utils/groq.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { prompt, sys } = req.body;
    if (!prompt) return res.status(400).json({ error: 'prompt is required' });
    const text = await callGroq(prompt, sys);
    res.json({ text });
  } catch (err) {
    const msg = err.message || '';
    console.error('Groq route error:', msg.substring(0, 200));
    if (err.status === 429 || msg.includes('429') || msg.includes('rate')) {
      return res.status(429).json({ error: 'Groq rate limit reached. Please wait a moment.' });
    }
    res.status(500).json({ error: msg || 'Groq request failed' });
  }
});

export default router;
