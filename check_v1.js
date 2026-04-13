import './server/config/env.js';
import fetch from 'node-fetch';

async function checkModel(name) {
  try {
    const url = `https://generativelanguage.googleapis.com/v1/models/${name}?key=${process.env.GEMINI_API_KEY}`;
    const res = await fetch(url);
    if (res.ok) {
        console.log(`Model ${name} EXISTS (v1)`);
    } else {
        console.log(`Model ${name} NOT FOUND (v1): ${res.status}`);
    }
  } catch (e) {
    console.error(e);
  }
}

checkModel('gemini-1.5-flash');
