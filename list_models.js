import './server/config/env.js';
import fetch from 'node-fetch';

async function listModels() {
  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.models) {
        console.log(JSON.stringify(data.models.map(m => m.name)));
    } else {
        console.log(JSON.stringify(data));
    }
  } catch (e) {
    console.error(e);
  }
}

listModels();
