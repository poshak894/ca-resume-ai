import React from 'react';

export default function Pricing({ startPay, setPage }) {
  return (
    <div style={{ paddingTop: 80, paddingLeft: 24, paddingRight: 24, maxWidth: 1200, margin: '0 auto', minHeight: '100vh', textAlign:'center' }}>
      <h2 style={{ fontSize: 32, marginBottom: 8 }}>Simple, Transparent Pricing</h2>
      <p style={{ color: '#aaa', marginBottom: 40 }}>One-time payment for lifetime articleship success</p>

      <div className="flex gap-6 justify-center flex-wrap">
        <div className="card text-left" style={{flex:1, minWidth:280, maxWidth:340, display:'flex', flexDirection:'column'}}>
          <div style={{fontSize:20, fontWeight:'bold', marginBottom:8}}>Free</div>
          <div style={{fontSize:36, fontWeight:'bold', marginBottom:16}}>₹0</div>
          <p style={{color:'#aaa', fontSize:14, marginBottom:24, minHeight:40}}>Perfect for starting your CA resume.</p>
          <ul style={{flex:1, listStyle:'none', color:'#ddd', fontSize:14, marginBottom:24, display:'flex', flexDirection:'column', gap:12}}>
            <li>✓ 1 Resume</li>
            <li>✓ Standard ATS Template</li>
            <li>✓ AI Objective (3 uses)</li>
            <li>✓ PDF Download</li>
            <li>✓ Basic ATS Score</li>
            <li>✓ Stipend Estimator</li>
          </ul>
          <button className="btn-outline w-full" onClick={() => setPage('builder')}>Get Started Free</button>
        </div>

        <div className="card text-left" style={{flex:1, minWidth:280, maxWidth:340, borderColor:'var(--gold)', position:'relative', display:'flex', flexDirection:'column'}}>
          <div style={{fontSize:20, fontWeight:'bold', marginBottom:8, color:'var(--gold)'}}>Tools Pack</div>
          <div style={{fontSize:36, fontWeight:'bold', marginBottom:16}}>₹50</div>
          <p style={{color:'#aaa', fontSize:14, marginBottom:24, minHeight:40}}>Perfect for your Big 4 interviews.</p>
          <ul style={{flex:1, listStyle:'none', color:'#ddd', fontSize:14, marginBottom:24, display:'flex', flexDirection:'column', gap:12}}>
            <li>✓ Interview Q&A Prep (AI)</li>
            <li>✓ 8 firms × 8 topics</li>
            <li>✓ AI model answers</li>
            <li>✓ Key points + expert tips</li>
            <li>✓ Difficulty badges</li>
            <li>✓ Stipend Estimator</li>
          </ul>
          <button className="btn-primary w-full" style={{background: 'linear-gradient(135deg, var(--gold), #f39c12)'}} onClick={() => startPay('tools')}>
            🎙️ Unlock Tools — ₹50
          </button>
        </div>

        <div className="card text-left" style={{flex:1, minWidth:280, maxWidth:340, borderColor:'var(--t)', position:'relative', backgroundColor:'var(--d3)', display:'flex', flexDirection:'column'}}>
          <div style={{position:'absolute', top:-12, left:'50%', transform:'translateX(-50%)', background:'var(--t)', padding:'4px 16px', borderRadius:20, fontSize:12, fontWeight:'bold'}}>
            ⭐ Popular
          </div>
          <div style={{fontSize:20, fontWeight:'bold', marginBottom:8, color:'var(--l)'}}>Pro</div>
          <div style={{fontSize:36, fontWeight:'bold', marginBottom:16}}>₹199</div>
          <p style={{color:'#aaa', fontSize:14, marginBottom:24, minHeight:40}}>Everything you need to secure a Big 4 articleship.</p>
          <ul style={{flex:1, listStyle:'none', color:'#ddd', fontSize:14, marginBottom:24, display:'flex', flexDirection:'column', gap:12}}>
            <li><strong style={{color:'var(--l2)'}}>✓ Everything in Tools Pack</strong></li>
            <li>✓ Unlimited Resumes & Edits</li>
            <li>✓ All 6 Big 4 Templates</li>
            <li>✓ Unlimited AI Writing</li>
            <li>✓ Full ATS Analysis</li>
            <li>✓ AI Articleship Duties</li>
            <li>✓ LinkedIn + Cover Letter AI</li>
          </ul>
          <button className="btn-primary w-full" onClick={() => startPay('pro')}>
            💳 Upgrade to Pro — ₹199
          </button>
        </div>
      </div>

      <div style={{marginTop:80, color:'#666', fontSize:14}}>
        Payment verified by Razorpay • UPI / Card / NetBanking • For support: <a href="mailto:cabuzz54@gmail.com" className="text-t2">cabuzz54@gmail.com</a>
      </div>
    </div>
  );
}
