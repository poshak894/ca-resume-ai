import '../server/config/env.js';
import mongoose from 'mongoose';

console.log('Testing MongoDB connection with URI:', process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('SUCCESS: Connected to MongoDB');
    process.exit(0);
  })
  .catch(err => {
    console.error('FAILURE: Could not connect to MongoDB');
    console.error('Error name:', err.name);
    console.error('Error message:', err.message);
    if (err.reason) {
      console.error('Error reason:', JSON.stringify(err.reason, null, 2));
    }
    process.exit(1);
  });
