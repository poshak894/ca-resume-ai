import React from 'react';

export default function Features({ setPage }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, margin: '80px auto 0', maxWidth: 900 }}>
      <Feature 
        icon="🤖" title="AI Resume Writing" desc="Auto-generate objective & duties" 
        onClick={() => setPage('builder')}
      />
      <Feature 
        icon="📊" title="ATS Optimiser" desc="Score & keyword suggestions" 
        onClick={() => setPage('builder')}
      />
      <Feature 
        icon="🎙️" title="Interview Prep AI" desc="Practice questions by firm/topic" 
        onClick={() => setPage('tools')}
      />
      <Feature 
        icon="💰" title="Stipend Estimator" desc="Check firm-wise stipend" 
        onClick={() => setPage('stipend')}
      />
      <Feature 
        icon="⚡" title="Instant PDF" desc="1-click ATS friendly export" 
        onClick={() => setPage('builder')}
      />
    </div>
  );
}

function Feature({ icon, title, desc, onClick }) {
  return (
    <div 
      className="card text-left" 
      onClick={onClick}
      style={{ cursor: 'pointer', transition: 'transform 0.2s, border-color 0.2s' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--t)'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <div style={{fontSize:24, marginBottom:12}}>{icon}</div>
      <h3 style={{fontSize:16, marginBottom:8}}>{title}</h3>
      <p style={{color:'#aaa', fontSize:13}}>{desc}</p>
      <div style={{ marginTop: 12, fontSize: 11, color: 'var(--t)', fontWeight: 600 }}>Try Feature →</div>
    </div>
  );
}
