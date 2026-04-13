import Razorpay from 'razorpay';
import dotenv from 'dotenv';
dotenv.config({ path: './server/.env' });

console.log('Testing with Key ID:', process.env.RAZORPAY_KEY_ID);
console.log('Testing with Secret:', process.env.RAZORPAY_KEY_SECRET?.slice(0, 3) + '...');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const options = {
  amount: 100,
  currency: 'INR',
};

razorpay.orders.create(options)
  .then(order => {
    console.log('Order created successfully:', order.id);
  })
  .catch(err => {
    console.error('Order creation failed:', err.description || err.message);
  });
