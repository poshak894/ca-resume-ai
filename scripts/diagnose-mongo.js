import '../server/config/env.js';
import mongoose from 'mongoose';

const testURIs = [
  process.env.MONGODB_URI,
  process.env.MONGODB_URI.replace('cabuzz2026', 'cabuzz2025'),
  'mongodb+srv://caresume:cabuzz2026@ca-resume-ai.tdpz8gj.mongodb.net/ca-resume-ai?retryWrites=true&w=majority',
  'mongodb+srv://caresume:cabuzz2025@ca-resume-ai.tdpz8gj.mongodb.net/ca-resume-ai?retryWrites=true&w=majority'
];

async function test() {
  for (const uri of testURIs) {
    console.log('Testing URI:', uri.replace(/:([^@]+)@/, ':****@'));
    try {
      await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
      console.log('SUCCESS: Connected to MongoDB with this URI');
      await mongoose.disconnect();
      return;
    } catch (err) {
      console.log('FAILURE:', err.name, '-', err.message);
    }
  }
}

test();
