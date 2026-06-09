import React from 'react';
import { Briefcase, Star, Users } from 'lucide-react';
import Features from './Features.jsx';
import Pricing from './Pricing.jsx';

export default function Hero({ setPage }) {
  return (
    <div className="home-hero">
      <div className="hero-kicker">
        AI-Powered · CA-Specific · ATS Optimizer
      </div>

      <h1 className="hero-title">
        <span>Build Your Own</span>
        <strong>Resume</strong>
        <em>with AI</em>
      </h1>

      <p className="hero-subtitle">
        Join 12,400+ CA students. Get your personalized, Big 4 ready resume in minutes.
      </p>

      <button className="hero-resume-button" onClick={() => setPage('builder')}>
        Build My Resume →
      </button>

      <div className="hero-stats">
        <div>
          <span><Users size={21} /></span>
          <strong>12,400+</strong>
          <p>Resumes Built</p>
        </div>
        <div>
          <span><Star size={21} /></span>
          <strong>94%</strong>
          <p>Avg ATS Score</p>
        </div>
        <div>
          <span><Briefcase size={21} /></span>
          <strong>Big 4</strong>
          <p>Ready</p>
        </div>
      </div>

      <Features setPage={setPage} />

      <div className="home-pricing-section">
        <Pricing setPage={setPage} startPay={() => setPage('pricing')} />
      </div>

      <footer className="home-footer">
        <p>© 2025 CA Resume AI. Designed for Big 4 Articleship Aspirants.</p>
      </footer>
    </div>
  );
}
