import React from 'react';

export default function Nav({ page, setPage, isPro, user, logout }) {
  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'builder', label: 'Resume Builder' },
    { id: 'tools', label: 'Interview Prep' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'stipend', label: 'Stipend Estimator' },
  ];

  return (
    <nav className="flex justify-between items-center px-8 py-4 fixed w-full top-0 z-50 glass" style={{ borderBottom: '1px solid var(--t3)' }}>
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('home')}>
        <div style={{ background: 'var(--t)', color: 'var(--l)', width: 36, height: 36, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 18 }}>
          CA
        </div>
        <div>
          <h1 style={{ fontSize: 16, m: 0 }}>Resume AI</h1>
          <p style={{ fontSize: 10, color: '#aaa', m: 0 }}>India's #1 CA Builder</p>
        </div>
      </div>
      
      <div className="flex gap-6 hidden md:flex">
        {tabs.map(tab => (
          <button 
            key={tab.id}
            onClick={() => setPage(tab.id)}
            style={{ 
              color: page === tab.id ? 'var(--t)' : '#ccc',
              fontWeight: page === tab.id ? 600 : 400,
              fontSize: 14,
              borderBottom: page === tab.id ? '2px solid var(--t)' : '2px solid transparent',
              paddingBottom: 4
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex gap-4 items-center">
        {isPro && (
          <div style={{ background: 'rgba(0,109,91,0.2)', color: 'var(--t)', padding: '4px 12px', borderRadius: 16, fontSize: 12, fontWeight: 600 }}>
            ⭐ Pro Active
          </div>
        )}
        
        {user ? (
          <div className="flex items-center gap-4">
            <span style={{fontSize: 13, color:'#ddd'}}>{user.name}</span>
            <button 
              className="btn-outline" 
              style={{ padding: '6px 12px', fontSize: 12, border:'1px solid var(--red)', color:'var(--red)' }}
              onClick={() => {
                logout();
                setPage('home');
              }}
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <button className="btn-outline" style={{ padding: '6px 16px', fontSize: 12 }} onClick={() => setPage('login')}>Log In</button>
            <button className="btn-primary" style={{ padding: '6px 16px', fontSize: 12 }} onClick={() => setPage('register')}>Sign Up</button>
          </div>
        )}
      </div>
    </nav>
  );
}
