import React, { useState, useRef } from 'react';
import { resetPassword } from '../../utils/api.js';

export default function ResetPasswordPage({ setPage, showToast, resetEmail }) {
  const [email, setEmail] = useState(resetEmail || '');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const inputRefs = useRef([]);

  const handleOtpChange = (i, val) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp];
    next[i] = val;
    setOtp(next);
    if (val && i < 5) inputRefs.current[i + 1]?.focus();
  };

  const handleKeyDown = (i, e) => {
    if (e.key === 'Backspace' && !otp[i] && i > 0) inputRefs.current[i - 1]?.focus();
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    const next = [...otp];
    pasted.split('').forEach((ch, i) => { next[i] = ch; });
    setOtp(next);
    inputRefs.current[Math.min(pasted.length, 5)]?.focus();
  };

  const pwStrength = () => {
    if (!newPassword) return null;
    let score = 0;
    if (newPassword.length >= 8) score++;
    if (/[A-Z]/.test(newPassword)) score++;
    if (/[0-9]/.test(newPassword)) score++;
    if (/[^A-Za-z0-9]/.test(newPassword)) score++;
    return score;
  };

  const strengthInfo = [
    null,
    { label: 'Weak', color: '#ef4444' },
    { label: 'Fair', color: '#f97316' },
    { label: 'Good', color: '#eab308' },
    { label: 'Strong', color: '#22c55e' },
  ];

  const strength = pwStrength();
  const sInfo = strengthInfo[strength];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.join('').length < 6) return showToast('❌ Please enter the 6-digit OTP');
    if (newPassword.length < 8) return showToast('❌ Password must be at least 8 characters');
    if (newPassword !== confirmPassword) return showToast('❌ Passwords do not match');

    setLoading(true);
    try {
      await resetPassword({ email, otp: otp.join(''), newPassword });
      setDone(true);
      showToast('✓ Password reset successfully!');
    } catch (err) {
      showToast('❌ ' + (err.error || 'Reset failed'));
    }
    setLoading(false);
  };

  if (done) {
    return (
      <div style={{ paddingTop: 120, paddingLeft: 24, paddingRight: 24, maxWidth: 420, margin: '0 auto', minHeight: '100vh', textAlign: 'center' }}>
        <div style={{
          width: 72, height: 72, borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(34,197,94,0.2), rgba(99,102,241,0.1))',
          border: '2px solid rgba(34,197,94,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 24px', fontSize: 32
        }}>✅</div>

        <h2 style={{ fontSize: 28, fontWeight: 700, color: '#e2e8f0', margin: '0 0 12px' }}>Password Reset!</h2>
        <p style={{ color: '#94a3b8', marginBottom: 32, fontSize: 14 }}>
          Your password has been updated successfully. Log in with your new password.
        </p>
        <button className="btn-primary" onClick={() => setPage('login')}>
          Go to Login →
        </button>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: 100, paddingLeft: 24, paddingRight: 24, maxWidth: 420, margin: '0 auto', minHeight: '100vh', textAlign: 'center' }}>
      <div style={{
        width: 72, height: 72, borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(239,68,68,0.15))',
        border: '2px solid rgba(245,158,11,0.3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 24px', fontSize: 28
      }}>🔑</div>

      <h2 style={{ fontSize: 28, fontWeight: 700, color: '#e2e8f0', margin: '0 0 8px' }}>Reset Password</h2>
      <p style={{ color: '#94a3b8', marginBottom: 32, fontSize: 14 }}>Enter the OTP from your email and set a new password.</p>

      <form onSubmit={handleSubmit} className="card flex-col gap-4 text-left">
        {/* Email (editable if not prefilled) */}
        <div>
          <label style={{ fontSize: 12, color: '#94a3b8', marginBottom: 6, display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="rahul@example.com"
            required
          />
        </div>

        {/* OTP */}
        <div>
          <label style={{ fontSize: 12, color: '#94a3b8', marginBottom: 10, display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Reset OTP</label>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }} onPaste={handlePaste}>
            {otp.map((digit, i) => (
              <input
                key={i}
                ref={el => inputRefs.current[i] = el}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={e => handleOtpChange(i, e.target.value)}
                onKeyDown={e => handleKeyDown(i, e)}
                style={{
                  width: 44, height: 50,
                  textAlign: 'center',
                  fontSize: 20, fontWeight: 700,
                  borderRadius: 8,
                  border: digit ? '2px solid rgba(245,158,11,0.6)' : '2px solid rgba(255,255,255,0.1)',
                  background: digit ? 'rgba(245,158,11,0.08)' : 'rgba(255,255,255,0.04)',
                  color: '#fbbf24',
                  outline: 'none',
                  transition: 'all 0.15s',
                }}
              />
            ))}
          </div>
        </div>

        {/* New password */}
        <div>
          <label style={{ fontSize: 12, color: '#94a3b8', marginBottom: 6, display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px' }}>New Password</label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPw ? 'text' : 'password'}
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              placeholder="Min. 8 characters"
              required
              style={{ paddingRight: 44 }}
            />
            <button
              type="button"
              onClick={() => setShowPw(!showPw)}
              style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: 14 }}
            >
              {showPw ? '🙈' : '👁️'}
            </button>
          </div>
          {strength > 0 && sInfo && (
            <div style={{ display: 'flex', gap: 4, marginTop: 8, alignItems: 'center' }}>
              {[1, 2, 3, 4].map(n => (
                <div key={n} style={{ height: 3, flex: 1, borderRadius: 2, background: n <= strength ? sInfo.color : 'rgba(255,255,255,0.1)', transition: 'background 0.2s' }} />
              ))}
              <span style={{ fontSize: 11, color: sInfo.color, marginLeft: 4, fontWeight: 600 }}>{sInfo.label}</span>
            </div>
          )}
        </div>

        {/* Confirm */}
        <div>
          <label style={{ fontSize: 12, color: '#94a3b8', marginBottom: 6, display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            placeholder="Re-enter new password"
            required
            style={{ borderColor: confirmPassword && newPassword !== confirmPassword ? 'rgba(239,68,68,0.5)' : undefined }}
          />
          {confirmPassword && newPassword !== confirmPassword && (
            <p style={{ fontSize: 11, color: '#ef4444', margin: '4px 0 0' }}>Passwords don't match</p>
          )}
        </div>

        <button className="btn-primary w-full" style={{ marginTop: 8 }} disabled={loading}>
          {loading ? <span className="spinner">⟳</span> : 'Reset Password'}
        </button>
      </form>

      <div style={{ marginTop: 16, fontSize: 13 }}>
        <span onClick={() => setPage('forgot-password')} style={{ color: '#64748b', cursor: 'pointer' }}>
          ← Request new OTP
        </span>
        <span style={{ color: '#374151', margin: '0 8px' }}>|</span>
        <span onClick={() => setPage('login')} style={{ color: '#64748b', cursor: 'pointer' }}>
          Back to Login
        </span>
      </div>
    </div>
  );
}
