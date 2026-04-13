import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  passwordHash: { 
    type: String, 
    required: function() { return !this.googleId; } 
  },
  googleId: { type: String },
  avatar: { type: String },
  plan: { type: String, default: 'free' },
  downloadCount: { type: Number, default: 0 },
  razorpayPaymentId: { type: String },
  createdAt: { type: Date, default: Date.now },

  // Email verification
  isEmailVerified: { type: Boolean, default: false },
  emailOtp: { type: String },
  emailOtpExpiry: { type: Date },

  // Password reset
  resetOtp: { type: String },
  resetOtpExpiry: { type: Date },
});

userSchema.pre('save', async function() {
  if (this.isModified('passwordHash') && this.passwordHash) {
    this.passwordHash = await bcrypt.hash(this.passwordHash, 10);
  }
});

userSchema.methods.comparePassword = function(plain) {
  return bcrypt.compare(plain, this.passwordHash);
};

export default mongoose.model('User', userSchema);
