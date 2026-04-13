import React, { useState, useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';

import Pricing from './components/Pricing.jsx';

import AdminDashboard from './components/AdminDashboard.jsx';
import StipendEstimator from './components/StipendEstimator.jsx';
import InterviewPrep from './components/InterviewPrep.jsx';
import ResumeBuilder from './components/ResumeBuilder/index.jsx';
import PaymentModal from './modals/PaymentModal.jsx';
import PaySuccessModal from './modals/PaySuccessModal.jsx';
import LoginPage from './components/Auth/LoginPage.jsx';
import RegisterPage from './components/Auth/RegisterPage.jsx';
import VerifyEmailPage from './components/Auth/VerifyEmailPage.jsx';
import ForgotPasswordPage from './components/Auth/ForgotPasswordPage.jsx';
import ResetPasswordPage from './components/Auth/ResetPasswordPage.jsx';
import { useToast } from './hooks/useToast.js';
import { usePayment } from './hooks/usePayment.js';
import { useAuth } from './hooks/useAuth.js';
import { loadResume, verifyEmail } from './utils/api.js';
import { initData } from './constants/initData.js';

function App() {
  const [page, setPage] = useState('home');
  const [data, setData] = useState(initData());
  const [ats, setAts] = useState(0);
  const [step, setStep] = useState(0);
  const [payM, setPayM] = useState(null);
  const [payOk, setPayOk] = useState(null);
  const [toast, showToast] = useToast();
  const [pendingVerify, setPendingVerify] = useState(null); // { email }
  const [resetEmail, setResetEmail] = useState('');
  
  const { user, setUser, loading, logout } = useAuth();
  
  useEffect(() => {
    const handleContext = (e) => e.preventDefault();
    document.addEventListener('contextmenu', handleContext);
    return () => document.removeEventListener('contextmenu', handleContext);
  }, []);

  useEffect(() => {
    if (window.location.search.includes('login=success')) {
      window.history.replaceState({}, document.title, window.location.pathname);
      showToast('✓ Successfully logged in with Google');
    }

    if (user) {
      loadResume().then(res => {
        if (res.resumeData && Object.keys(res.resumeData).length > 0) {
          setData(res.resumeData);
        } else {
          setData(prev => ({ ...prev, name: user.name || "", email: user.email || "", phone: user.phone || "" }));
        }
        if (res.atsScore) setAts(res.atsScore);
      }).catch(console.error);
    }
  }, [user]);

  const isPro = user?.plan === 'pro';
  const hasTool = user?.plan === 'tools' || user?.plan === 'pro';

  const setIsPro = (val) => { if (val && user) setUser({...user, plan: 'pro'}); };
  const setHasTool = (val) => { if (val && user && user.plan !== 'pro') setUser({...user, plan: 'tools'}); };

  const startPayOrig = usePayment({ isPro, setIsPro, hasTool, setHasTool, data, setPayM, setPayOk, showToast });

  const startPay = (type) => {
    if (!user) {
      showToast('⚠️ Please create an account to upgrade');
      setPage('login');
    } else {
      startPayOrig(type);
    }
  };

  // Navigation helper that can carry extra data
  const navigateTo = (dest, extra) => {
    if (dest === 'reset-password' && extra) setResetEmail(extra);
    setPage(dest);
  };

  // Called when login/register detects unverified email
  const handleVerifyNeeded = (info) => {
    setPendingVerify(info);
    setPage('verify-email');
  };

  if (loading) return (
    <div style={{ 
      height: '100vh', width: '100vw', 
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: 'var(--d)'
    }}>
      <div className="spinner" style={{ fontSize: 48, color: 'var(--t)', marginBottom: 20 }}>⟳</div>
      <div style={{ color: '#666', fontSize: 12, textTransform: 'uppercase', letterSpacing: 2, fontWeight: 600 }}>CA Resume AI Assistant</div>
    </div>
  );

  const renderPage = () => {
    const isProtected = ['builder', 'tools', 'admin'].includes(page);
    if (isProtected && !user) return <LoginPage setUser={setUser} setPage={navigateTo} showToast={showToast} onVerifyNeeded={handleVerifyNeeded} />;

    switch (page) {
      case 'home': return <Hero setPage={setPage} />;
      case 'pricing': return <Pricing setPage={setPage} isPro={isPro} hasTool={hasTool} startPay={startPay} />;
      case 'tools': return <InterviewPrep hasTool={hasTool} isPro={isPro} setShowPayM={setPayM} user={user} showToast={showToast} />;
      case 'stipend': return <StipendEstimator />;
      case 'admin': return <AdminDashboard />;
      case 'templates': return <Templates setPage={setPage} isPro={isPro} setShowPayM={setPayM} />;
      case 'builder': return <ResumeBuilder data={data} setData={setData} step={step} setStep={setStep} isPro={isPro} setShowPayM={setPayM} ats={ats} setAts={setAts} showToast={showToast} />;
      case 'login': return <LoginPage setUser={setUser} setPage={navigateTo} showToast={showToast} onVerifyNeeded={handleVerifyNeeded} />;
      case 'register': return <RegisterPage setUser={setUser} setPage={navigateTo} showToast={showToast} onVerifyNeeded={handleVerifyNeeded} />;
      case 'verify-email': return <VerifyEmailPage setUser={setUser} setPage={navigateTo} showToast={showToast} verifyEmail={pendingVerify} />;
      case 'forgot-password': return <ForgotPasswordPage setPage={navigateTo} showToast={showToast} />;
      case 'reset-password': return <ResetPasswordPage setPage={navigateTo} showToast={showToast} resetEmail={resetEmail} />;
      default: return <Hero setPage={setPage} />;
    }
  };

  return (
    <div>
      <Nav page={page} setPage={setPage} isPro={isPro} user={user} logout={logout} />
      {renderPage()}
      {payM && <PaymentModal type={payM} onClose={() => setPayM(null)} startPay={startPay} />}
      {payOk && <PaySuccessModal type={payOk} onClose={() => setPayOk(null)} onNavigate={() => setPage(payOk === 'pro' ? 'builder' : 'tools')} />}
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

export default App;
