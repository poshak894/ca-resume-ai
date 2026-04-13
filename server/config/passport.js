// Steps to get Google Client ID + Secret:
// 1. Go to console.cloud.google.com
// 2. Create new project: "CA Resume AI"
// 3. Go to APIs & Services → OAuth consent screen
// 4. Choose External → Fill app name + email
// 5. Go to APIs & Services → Credentials
// 6. Click Create Credentials → OAuth Client ID
// 7. Application type: Web Application
// 8. Authorized redirect URIs:
//    http://localhost:3001/api/auth/google/callback
// 9. Copy Client ID + Client Secret to .env

import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/User.js';

passport.use(new GoogleStrategy({
  clientID:     process.env.GOOGLE_CLIENT_ID || 'dummy',
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'dummy',
  callbackURL:  '/api/auth/google/callback',
},
async (accessToken, refreshToken, profile, done) => {
  try {
    // Check if user already exists
    let user = await User.findOne({ email: profile.emails[0].value });
    if (user) {
      if (!user.googleId) {
        user.googleId = profile.id;
        user.avatar = profile.photos?.[0]?.value || user.avatar;
        await user.save();
      }
      return done(null, user);
    }
    
    // New user — create account
    user = await User.create({
      name:       profile.displayName,
      email:      profile.emails[0].value,
      googleId:   profile.id,
      avatar:     profile.photos?.[0]?.value,
      plan:       'free',
    });
    return done(null, user);
  } catch (err) {
    return done(err, null);
  }
}));

passport.serializeUser((user, done) => done(null, user._id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

export default passport;
