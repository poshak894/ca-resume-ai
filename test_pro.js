import './server/config/env.js';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function test() {
  try {
    console.log('Testing gemini-pro...');
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent("Say hello");
    console.log('Success gemini-pro:', await result.response.text());
  } catch (e) {
    console.error('Error gemini-pro:', e.statusText || e.message);
  }
}

test();
