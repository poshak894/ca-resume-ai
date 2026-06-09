import React from 'react';

export default function Features({ setPage }) {
  return (
    <div className="feature-grid">
      <Feature 
        icon="🤖" title="AI Resume Writing" desc="Auto-generate objective & duties" 
        accent="#2D6A4F"
        borderAccent="#95D5B2"
        dark
        onClick={() => setPage('builder')}
      />
      <Feature 
        icon="📊" title="ATS Optimiser" desc="Score & keyword suggestions" 
        accent="#74C69D"
        onClick={() => setPage('builder')}
      />
      <Feature 
        icon="🎙️" title="Interview Prep AI" desc="Practice questions by firm/topic" 
        accent="#2D6A4F"
        borderAccent="#95D5B2"
        dark
        onClick={() => setPage('tools')}
      />
      <Feature 
        icon="💰" title="Stipend Estimator" desc="Check firm-wise stipend" 
        accent="#74C69D"
        onClick={() => setPage('stipend')}
      />
      <Feature 
        icon="⚡" title="Instant PDF" desc="1-click ATS friendly export" 
        accent="#2D6A4F"
        borderAccent="#95D5B2"
        dark
        onClick={() => setPage('builder')}
      />
    </div>
  );
}

function Feature({ icon, title, desc, accent, borderAccent, dark, onClick }) {
  return (
    <div 
      className={`feature-card${dark ? ' feature-card-dark' : ''}`}
      onClick={onClick}
      style={{ '--feature-accent': accent, '--feature-border': borderAccent || accent }}
    >
      <div className="feature-content">
        <div className="feature-back">
          <div className="feature-back-content">
            <div className="feature-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        </div>

        <div className="feature-front">
          <div className="feature-front-content">
            <div className="feature-badge">CA Resume AI</div>
            <div className="feature-orb feature-orb-main" />
            <div className="feature-orb feature-orb-bottom" />
            <div className="feature-orb feature-orb-right" />
            <div className="feature-description">
              <div className="feature-title">
                <p>{title}</p>
                <strong>{icon}</strong>
              </div>
              <div className="feature-footer">Try Feature →</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
