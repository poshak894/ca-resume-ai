import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './server/.env' });

console.log('Testing MongoDB connection...');
mongoose.connect(process.env.MONGODB_URI, {
    family: 4,
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => {
    console.log('SUCCESS: MongoDB connected');
    process.exit(0);
  })
  .catch(err => {
    console.error('FAILURE: MongoDB connection error:', err.message);
    process.exit(1);
  });
