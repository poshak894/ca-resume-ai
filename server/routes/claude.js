import express from 'express';
import { callGemini } from '../utils/gemini.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { prompt, sys } = req.body;
    if (!prompt) return res.status(400).json({ error: 'prompt is required' });
    const text = await callGemini(prompt, sys);
    res.json({ text });
  } catch (err) {
    const msg = err.message || '';
    console.error('Gemini route error:', msg.substring(0, 200));
    if (err.status === 429 || msg.includes('429') || msg.includes('quota') || msg.includes('rate')) {
      return res.status(429).json({ error: 'Rate limit reached. Please wait a moment and try again.' });
    }
    res.status(500).json({ error: msg || 'AI request failed' });
  }
});

export default router;