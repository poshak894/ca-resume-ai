import './config/env.js';
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import cors from 'cors';
import fs from 'fs';
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
mongoose.set('bufferCommands', false);
let mongoStatus = {
  connected: false,
  message: 'MongoDB has not connected yet',
};

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
app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    mongo: mongoStatus,
  });
});

const clientDist = path.join(__dirname, '../client/dist');

// Serve the built web app when it exists. This supports production hosts and
// local "build then start" runs, even if NODE_ENV is not injected correctly.
if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist));
  app.get('*', (req, res) => res.sendFile(path.join(clientDist, 'index.html')));
}

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;

function maskMongoUri(uri = '') {
  return uri.replace(/:\/\/([^:]+):([^@]+)@/, '://$1:****@');
}

function explainMongoError(err) {
  const message = err?.message || String(err);
  const serverMessages = err?.reason?.servers
    ? [...err.reason.servers.values()]
        .map((server) => server?.error?.message)
        .filter(Boolean)
    : [];
  const combinedMessage = [message, ...serverMessages].join('\n');

  console.error('MongoDB connection error:', message);

  if (combinedMessage.includes('querySrv')) {
    console.error('MongoDB SRV DNS lookup failed for your mongodb+srv:// URI.');
    console.error('Try switching DNS to 8.8.8.8 / 1.1.1.1, or use the standard mongodb:// seedlist URI from Atlas.');
    return;
  }

  if (combinedMessage.includes('Authentication failed')) {
    console.error('MongoDB rejected the username/password in MONGODB_URI.');
    console.error('Check Database Access in Atlas and update server/.env with a fresh connection string.');
    return;
  }

  if (
    err?.name === 'MongooseServerSelectionError' ||
    combinedMessage.includes('Could not connect to any servers') ||
    combinedMessage.includes('ReplicaSetNoPrimary')
  ) {
    console.error('MongoDB Atlas was found, but this machine is not allowed to connect or the cluster is paused.');
    console.error('In Atlas, open Security > Network Access > Add IP Address and add your current public IP.');
    console.error('Also confirm the cluster is running and the database user in MONGODB_URI still exists.');
  }
}

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n❌ Port ${PORT} is already in use.`);
    console.error(`   Run this PowerShell command to find the process: netstat -ano | findstr :${PORT}`);
    console.error('   Then stop it with: taskkill /F /PID <PID>');
    console.error(`   Or change PORT in server/.env to another port (e.g. PORT=3002)\n`);
    process.exit(1);
  } else {
    throw err;
  }
});

async function connectToMongo() {
  if (!MONGODB_URI) {
    mongoStatus = {
      connected: false,
      message: 'MONGODB_URI is missing',
    };
    console.error('MONGODB_URI is missing. Database features will be unavailable until it is configured.');
    return;
  }

  console.log(`Connecting to MongoDB: ${maskMongoUri(MONGODB_URI)}`);

  try {
    await mongoose.connect(MONGODB_URI, {
      family: 4,
      serverSelectionTimeoutMS: 8000,
    });
    mongoStatus = {
      connected: true,
      message: 'MongoDB connected successfully',
    };
    console.log('MongoDB connected successfully');
  } catch (err) {
    mongoStatus = {
      connected: false,
      message: err?.message || String(err),
    };
    explainMongoError(err);
    console.error('Server will keep running so the web app can load. Database-backed API routes will fail until MongoDB is reachable.');
  }
}

connectToMongo();

