import './server/config/env.js';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function test() {
  try {
    console.log('Testing with API version v1...');
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }, {apiVersion: 'v1'});
    const result = await model.generateContent("Say hello");
    console.log('Success v1:', await result.response.text());
  } catch (e) {
    console.error('Error v1:', e.statusText || e.message);
    try {
        console.log('Testing with API version v1beta...');
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }, {apiVersion: 'v1beta'});
        const result = await model.generateContent("Say hello");
        console.log('Success v1beta:', await result.response.text());
    } catch (e2) {
        console.error('Error v1beta:', e2.statusText || e2.message);
    }
  }
}

test();
