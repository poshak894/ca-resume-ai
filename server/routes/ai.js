import express from 'express';
import { callGroq } from '../utils/groq.js';
import { callGemini } from '../utils/gemini.js';

const router = express.Router();

/**
 * Unified AI Route
 * Tries Groq first (fast, high rate limit), falls back to Gemini (backup)
 */
router.post('/', async (req, res) => {
  const { prompt, sys } = req.body;
  if (!prompt) return res.status(400).json({ error: 'prompt is required' });

  try {
    // 1. Try Groq
    console.log('[AI] Attempting Groq...');
    const text = await callGroq(prompt, sys);
    return res.json({ text, source: 'groq' });
  } catch (groqErr) {
    console.warn('[AI] Groq failed, trying Gemini...', groqErr.message);
    
    try {
      // 2. Fallback to Gemini
      const text = await callGemini(prompt, sys);
      return res.json({ text, source: 'gemini' });
    } catch (geminiErr) {
      console.error('[AI] All AI providers failed:', geminiErr.message);
      
      const isRateLimit = (groqErr.status === 429 || geminiErr.status === 429);
      return res.status(isRateLimit ? 429 : 500).json({ 
        error: isRateLimit ? 'AI service is temporarily busy. Please wait a moment.' : 'AI request failed.' 
      });
    }
  }
});

export default router;
