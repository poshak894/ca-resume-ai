import React, { useState } from 'react';
import { forgotPassword } from '../../utils/api.js';

export default function ForgotPasswordPage({ setPage, showToast }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await forgotPassword(email);
      setSent(true);
      showToast('✓ OTP sent! Check your inbox');
    } catch (err) {
      showToast('❌ ' + (err.error || 'Failed to send OTP'));
    }
    setLoading(false);
  };

  if (sent) {
    return (
      <div style={{ paddingTop: 120, paddingLeft: 24, paddingRight: 24, maxWidth: 420, margin: '0 auto', minHeight: '100vh', textAlign: 'center' }}>
        <div style={{
          width: 72, height: 72, borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(245,158,11,0.2), rgba(139,92,246,0.1))',
          border: '2px solid rgba(245,158,11,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 24px', fontSize: 28
        }}>📬</div>

        <h2 style={{ fontSize: 28, fontWeight: 700, color: '#e2e8f0', margin: '0 0 8px' }}>Check Your Inbox</h2>
        <p style={{ color: '#94a3b8', marginBottom: 8, fontSize: 14 }}>
          We've sent a password reset OTP to
        </p>
        <p style={{ color: '#fbbf24', fontWeight: 600, marginBottom: 32, fontSize: 14 }}>{email}</p>

        <div className="card" style={{ marginBottom: 24 }}>
          <p style={{ color: '#94a3b8', fontSize: 13, margin: 0, lineHeight: 1.8 }}>
            Open the email from <span style={{ color: '#a78bfa' }}>CA Resume AI</span> and use the OTP to reset your password on the next page.
          </p>
        </div>

        <button
          className="btn-primary w-full"
          onClick={() => setPage('reset-password', email)}
        >
          Enter Reset OTP →
        </button>

        <div style={{ marginTop: 16, fontSize: 13 }}>
          <span
            onClick={() => setSent(false)}
            style={{ color: '#64748b', cursor: 'pointer' }}
          >
            ← Try a different email
          </span>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: 120, paddingLeft: 24, paddingRight: 24, maxWidth: 420, margin: '0 auto', minHeight: '100vh', textAlign: 'center' }}>
      <div style={{
        width: 72, height: 72, borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(239,68,68,0.15))',
        border: '2px solid rgba(245,158,11,0.3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 24px', fontSize: 28
      }}>🔐</div>

      <h2 style={{ fontSize: 28, fontWeight: 700, color: '#e2e8f0', margin: '0 0 8px' }}>Forgot Password?</h2>
      <p style={{ color: '#94a3b8', marginBottom: 32, fontSize: 14 }}>Enter your email and we'll send you a reset OTP.</p>

      <form onSubmit={handleSubmit} className="card flex-col gap-4 text-left">
        <div>
          <label style={{ fontSize: 12, color: '#94a3b8', marginBottom: 6, display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="rahul@example.com"
            required
          />
        </div>

        <button className="btn-primary w-full" style={{ marginTop: 8 }} disabled={loading}>
          {loading ? <span className="spinner">⟳</span> : 'Send Reset OTP'}
        </button>
      </form>

      <div style={{ marginTop: 24, fontSize: 13, color: '#475569' }}>
        Remember your password?{' '}
        <span
          onClick={() => setPage('login')}
          style={{ color: '#a78bfa', cursor: 'pointer', fontWeight: 600 }}
        >
          Log In
        </span>
      </div>
    </div>
  );
}
