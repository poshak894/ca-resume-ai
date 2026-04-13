import './server/config/env.js';
import fetch from 'node-fetch';

async function checkModel(name) {
  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${name}?key=${process.env.GEMINI_API_KEY}`;
    const res = await fetch(url);
    if (res.ok) {
        console.log(`Model ${name} EXISTS`);
    } else {
        console.log(`Model ${name} NOT FOUND: ${res.status}`);
    }
  } catch (e) {
    console.error(e);
  }
}

async function test() {
    await checkModel('gemini-1.5-flash');
    await checkModel('gemini-1.5-flash-latest');
    await checkModel('gemini-2.0-flash');
    await checkModel('gemini-pro');
}
test();
