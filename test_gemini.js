import './server/config/env.js';
import { callGemini } from './server/utils/gemini.js';

async function test() {
  try {
    console.log('Testing Gemini with model: gemini-1.5-flash');
    const res = await callGemini('Say hello', 'You are a help assistant.');
    console.log('Gemini success:', res);
  } catch (e) {
    console.error('Gemini error FULL:', e);
  }
}

test();
