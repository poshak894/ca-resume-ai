import '../server/config/env.js';
import mongoose from 'mongoose';

const testURIs = [
  process.env.MONGODB_URI,
  'mongodb+srv://ca-resume:cabuzz2026@caresume.tdpz8gj.mongodb.net/ca_resume_ai?retryWrites=true&w=majority',
  'mongodb+srv://caresume:cabuzz2026@caresume.tdpz8gj.mongodb.net/ca_resume_ai?retryWrites=true&w=majority'
];

async function test() {
  for (const uri of testURIs) {
    if (!uri) continue;
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
