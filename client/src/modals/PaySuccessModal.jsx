import React from 'react';

export default function PaySuccessModal({ type, onClose, onNavigate }) {
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)' }}
      onClick={onClose}
    >
      <div 
        className="card max-w-sm w-full relative"
        style={{ textAlign: 'center', borderColor: 'var(--t2)' }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{fontSize:48, marginBottom:16}}>🎉</div>
        <h2 className="text-t mb-2">Payment Successful!</h2>
        <p style={{color:'#aaa', marginBottom:24}}>
          {type === 'pro' 
            ? 'Your account has been upgraded to Pro. Enjoy unlimited features!' 
            : 'Tools Pack unlocked! You can now access Interview Prep.'}
        </p>
        
        <button 
          className="btn-primary w-full"
          onClick={() => {
            onNavigate();
            onClose();
          }}
        >
          {type === 'pro' ? 'Go to Builder' : 'Go to Tools'}
        </button>
      </div>
    </div>
  );
}
