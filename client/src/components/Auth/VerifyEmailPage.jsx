import React, { useState, useRef, useEffect } from 'react';
import { verifyEmail as verifyEmailAPI, resendOtp } from '../../utils/api.js';

export default function VerifyEmailPage({ setUser, setPage, showToast, verifyEmail: verifyEmailInfo }) {
  const email = verifyEmailInfo?.email || '';
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (countdown > 0 && !canResend) {
      const timer = setTimeout(() => setCountdown(c => c - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setCanResend(true);
    }
  }, [countdown, canResend]);

  const handleChange = (i, val) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp];
    next[i] = val;
    setOtp(next);
    if (val && i < 5) inputRefs.current[i + 1]?.focus();
  };

  const handleKeyDown = (i, e) => {
    if (e.key === 'Backspace' && !otp[i] && i > 0) {
      inputRefs.current[i - 1]?.focus();
    }
    if (e.key === 'ArrowLeft' && i > 0) inputRefs.current[i - 1]?.focus();
    if (e.key === 'ArrowRight' && i < 5) inputRefs.current[i + 1]?.focus();
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    const next = [...otp];
    pasted.split('').forEach((ch, i) => { next[i] = ch; });
    setOtp(next);
    inputRefs.current[Math.min(pasted.length, 5)]?.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = otp.join('');
    if (code.length < 6) return showToast('❌ Please enter all 6 digits');
    setLoading(true);
    try {
      const res = await verifyEmailAPI({ email, otp: code });
      setUser(res.user);
      setPage('home');
      showToast('✓ Email verified! Welcome aboard 🎉');
    } catch (err) {
      showToast('❌ ' + (err.error || 'Verification failed'));
      setOtp(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
    }
    setLoading(false);
  };

  const handleResend = async () => {
    if (!canResend || resending) return;
    setResending(true);
    try {
      await resendOtp(email);
      showToast('✓ New OTP sent to ' + email);
      setCountdown(60);
      setCanResend(false);
      setOtp(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
    } catch (err) {
      showToast('❌ ' + (err.error || 'Failed to resend OTP'));
    }
    setResending(false);
  };

  return (
    <div style={{ paddingTop: 120, paddingLeft: 24, paddingRight: 24, maxWidth: 420, margin: '0 auto', minHeight: '100vh', textAlign: 'center' }}>
      {/* Icon */}
      <div style={{
        width: 72, height: 72, borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.2))',
        border: '2px solid rgba(99,102,241,0.4)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 24px', fontSize: 28
      }}>
        ✉️
      </div>

      <h2 style={{ fontSize: 28, fontWeight: 700, color: '#e2e8f0', margin: '0 0 8px' }}>Verify Your Email</h2>
      <p style={{ color: '#94a3b8', marginBottom: 8, fontSize: 14 }}>
        We sent a 6-digit OTP to
      </p>
      <p style={{ color: '#a78bfa', fontWeight: 600, marginBottom: 32, fontSize: 14 }}>{email}</p>

      <form onSubmit={handleSubmit} className="card flex-col gap-4">
        {/* OTP Input Boxes */}
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 8 }} onPaste={handlePaste}>
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={el => inputRefs.current[i] = el}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={e => handleChange(i, e.target.value)}
              onKeyDown={e => handleKeyDown(i, e)}
              style={{
                width: 48, height: 56,
                textAlign: 'center',
                fontSize: 24,
                fontWeight: 700,
                borderRadius: 10,
                border: digit ? '2px solid rgba(99,102,241,0.7)' : '2px solid rgba(255,255,255,0.1)',
                background: digit ? 'rgba(99,102,241,0.1)' : 'rgba(255,255,255,0.04)',
                color: '#e2e8f0',
                outline: 'none',
                transition: 'all 0.15s',
                caretColor: '#a78bfa',
              }}
            />
          ))}
        </div>

        <button
          type="submit"
          className="btn-primary w-full"
          style={{ marginTop: 8 }}
          disabled={loading || otp.join('').length < 6}
        >
          {loading ? <span className="spinner">⟳</span> : 'Verify Email'}
        </button>
      </form>

      {/* Resend */}
      <div style={{ marginTop: 24, color: '#64748b', fontSize: 13 }}>
        Didn't receive the code?{' '}
        {canResend ? (
          <span
            onClick={handleResend}
            style={{ color: '#a78bfa', cursor: 'pointer', fontWeight: 600 }}
          >
            {resending ? 'Sending...' : 'Resend OTP'}
          </span>
        ) : (
          <span style={{ color: '#475569' }}>Resend in {countdown}s</span>
        )}
      </div>

      {/* Back to login */}
      <div style={{ marginTop: 16, fontSize: 13, color: '#475569' }}>
        <span
          onClick={() => setPage('login')}
          style={{ color: '#64748b', cursor: 'pointer' }}
        >
          ← Back to Login
        </span>
      </div>
    </div>
  );
}
