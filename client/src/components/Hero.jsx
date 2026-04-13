import React from 'react';
import Features from './Features.jsx';
import Pricing from './Pricing.jsx';

export default function Hero({ setPage }) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 120,
      background: 'radial-gradient(circle at top, rgba(0, 119, 182, 0.2), transparent 40%), url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'2\' cy=\'2\' r=\'1\' fill=\'rgba(255,255,255,0.05)\'/%3E%3C/svg%3E")',
      textAlign: 'center',
    }}>
      <div style={{
        background: 'rgba(0, 119, 182, 0.12)', border: '1px solid rgba(0, 119, 182, 0.3)',
        color: 'var(--l2)', padding: '6px 16px', borderRadius: 24, fontSize: 13, fontWeight: 500, marginBottom: 24
      }}>
        ✦ AI-Powered · CA-Specific · ATS-Optimised
      </div>
      
      <h1 style={{ fontSize: 64, marginBottom: 16, maxWidth: 800 }}>
        Build Your CA Resume with <em className="text-t" style={{fontStyle:'italic'}}>AI</em>
      </h1>
      
      <p style={{ color: '#aaa', fontSize: 18, marginBottom: 40, maxWidth: 600 }}>
        Join 12,400+ CA students. Get your personalized, Big 4 ready resume in minutes.
      </p>
      
      <button 
        className="btn-primary" 
        style={{ fontSize: 18, padding: '16px 48px', width: 'fit-content', marginBottom: 60 }} 
        onClick={() => setPage('builder')}
      >
        Build My Resume →
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, color: '#aaa', fontSize: 14, marginBottom: 100 }}>
        <div><strong style={{color:'#fff', fontSize:24, display:'block'}}>12,400+</strong> Resumes Built</div>
        <div><strong style={{color:'#fff', fontSize:24, display:'block'}}>94%</strong> Avg ATS Score</div>
        <div><strong style={{color:'#fff', fontSize:24, display:'block'}}>Big 4</strong> Ready</div>
      </div>

      <Features setPage={setPage} />

      <div style={{ marginTop: 150, width: '100%' }}>
         <Pricing setPage={setPage} startPay={() => setPage('pricing')} />
      </div>

      <footer style={{ marginTop: 100, padding: 60, borderTop: '1px solid rgba(255,255,255,0.05)', width: '100%', color: '#666' }}>
        <p>© 2025 CA Resume AI. Designed for Big 4 Articleship Aspirants.</p>
      </footer>
    </div>
  );
}
