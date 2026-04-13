import './config/env.js';
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import claudeRoutes from './routes/claude.js';
import groqRoutes from './routes/groq.js';
import aiRoutes from './routes/ai.js';
import paymentRoutes from './routes/payment.js';
import adminRoutes from './routes/admin.js';
import authRoutes from './routes/auth.js';
import resumeRoutes from './routes/resume.js';
import { errorHandler } from './middleware/errorHandler.js';
import passport from './config/passport.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173';
const isProduction = process.env.NODE_ENV === 'production';

app.use(session({
  secret: process.env.SESSION_SECRET || 'caresume_session_secret_2025',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    sameSite: isProduction ? 'none' : 'lax',
    secure: isProduction,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  } // 7 days
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(cookieParser());
app.use(cors({ origin: clientUrl, credentials: true }));
app.use(express.json());

app.use('/api/ai', aiRoutes);
app.use('/api/claude', claudeRoutes);
app.use('/api/groq', groqRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/resume', resumeRoutes);

// In production, serve client building files
if (process.env.NODE_ENV === 'production') {
  const clientDist = path.join(__dirname, '../client/dist');
  app.use(express.static(clientDist));
  app.get('*', (req, res) => res.sendFile(path.join(clientDist, 'index.html')));
}

app.use(errorHandler);

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n❌ Port ${PORT} is already in use.`);
    console.error(`   Run this command to fix it: taskkill /F /PID $(netstat -ano | findstr :${PORT})`);
    console.error(`   Or change PORT in server/.env to another port (e.g. PORT=3002)\n`);
    process.exit(1);
  } else {
    throw err;
  }
});

console.log('Connecting to MongoDB...');
// Disable buffering to fail fast if connection is down (avoids 10s timeouts)
// mongoose.set('bufferCommands', false); 

mongoose.connect(process.env.MONGODB_URI, {
    family: 4, // Force IPv4 to avoid potential TLS issues common on some networks
    serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
  })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    if (err.message.includes('MongooseServerSelectionError')) {
      console.log('---------------------------------------------------------');
      console.log('CRITICAL: YOUR IP ADDRESS IS LIKELY NOT WHITELISTED');
      console.log('Please log in to MongoDB Atlas and whitelist your current IP.');
      console.log('URL: https://www.mongodb.com/docs/atlas/security-whitelist/');
      console.log('---------------------------------------------------------');
    }
  });

