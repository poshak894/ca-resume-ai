import '../server/config/env.js';
import mongoose from 'mongoose';
import fs from 'fs';

const testURIs = [
  process.env.MONGODB_URI,
  'mongodb://127.0.0.1:27017/ca-resume-ai',
  'mongodb://localhost:27017/ca-resume-ai',
  'mongodb+srv://ca-resume:cabuzz2026@ca-resume-ai.mongodb.net/ca_resume_ai?retryWrites=true&w=majority',
  'mongodb+srv://ca-resume-ai:cabuzz2026@ca-resume-ai.mongodb.net/ca_resume_ai?retryWrites=true&w=majority'
];

async function test() {
  for (const uri of testURIs) {
    if (!uri) continue;
    try {
      await mongoose.connect(uri, { serverSelectionTimeoutMS: 2000 });
      fs.writeFileSync('scripts/success.txt', uri);
      console.log('SUCCESS: wrote to scripts/success.txt');
      await mongoose.disconnect();
      process.exit(0);
    } catch (err) {}
  }
}

test();
