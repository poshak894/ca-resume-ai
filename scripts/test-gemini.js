import '../server/config/env.js';
import fetch from 'node-fetch';

async function test() {
  const apiKey = process.env.GEMINI_API_KEY;
  const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: "Say hello!" }] }]
      })
    });
    const d = await res.json();
    if (res.ok) {
        process.stdout.write('SUCCESS: Gemini response: ' + (d.candidates?.[0]?.content?.parts?.[0]?.text || ''));
    } else {
        process.stdout.write('FAILURE: Gemini error: ' + (d.error?.message || 'Unknown error'));
    }
  } catch (e) {
    process.stdout.write('FAILURE: Error: ' + e.message);
  }
}

test();
