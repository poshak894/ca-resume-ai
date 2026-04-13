import './server/config/env.js';
import { callGemini } from './server/utils/gemini.js';

async function test() {
  try {
    console.log('Testing gemini-2.0-flash...');
    const res = await callGemini('Say hello', 'Helpful assistant.');
    console.log('Success gemini-2.0-flash:', res);
  } catch (e) {
    console.error('Error gemini-2.0-flash:', e.message);
  }
}

test();
