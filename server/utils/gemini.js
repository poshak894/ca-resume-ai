import { GoogleGenerativeAI } from '@google/generative-ai';
import { enqueue } from './rateLimitQueue.js';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function callGemini(prompt, sys) {
  return enqueue(async () => {
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash-latest',
      systemInstruction: sys || 'You are an expert CA interview coach for Big 4 India. Return only requested content, no preamble.',
    });
    const result = await model.generateContent(prompt);
    return result.response.text();
  });
}
