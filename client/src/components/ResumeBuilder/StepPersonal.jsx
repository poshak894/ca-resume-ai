import React, { useState } from 'react';
import { CITIES } from '../../constants/stipend.js';
import { callGeminiWithRetry as callGemini } from '../../utils/api.js';

export default function StepPersonal({ data, setData, setStep, isPro, setShowPayM, showToast }) {
  const [loading, setLoading] = useState(false);
  const [freeObjCount, setFreeObjCount] = useState(0);

  const genObj = async () => {
    if (!data.name || !data.city) {
      showToast('❌ Please fill Name and City first');
      return;
    }
    if (!isPro && freeObjCount >= 3) {
      setShowPayM('pro');
      return;
    }

    setLoading(true);
    try {
      const prompt = `Write a unique 2-sentence CA articleship career objective for ${data.name} in ${data.city} for Big 4 roles. Professional, ATS-friendly. Variation: ${Math.random()}`;
      const res = await callGemini(prompt);
      setData(prev => ({...prev, objective: res.replace(/^"|"$/g, '').trim()}));

      if (!isPro) setFreeObjCount(c => c+1);
      showToast('✨ Unique objective generated!');
    } catch (e) {
      console.error('Claude error:', e);
      showToast('❌ ' + (e.error || 'Failed to generate objective'));
    }
    setLoading(false);
  };

  const handleNext = () => {
    if (!data.name || !data.email || !data.phone || !data.linkedin || !data.city || !data.pincode) {
      showToast('❌ All fields are mandatory to proceed');
      return;
    }
    if (data.phone.length < 10) {
      showToast('❌ Please enter a valid 10-digit phone number');
      return;
    }
    setStep(1);
  };

  const cArr = Object.keys(CITIES).concat(["Other"]);

  return (
    <div className="card">
      <h3 className="mb-4" style={{fontSize:24}}>Personal Details</h3>
      <p style={{fontSize:11, color:'#777', marginBottom:16, marginTop:-12}}>All fields below are mandatory *</p>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label style={{fontSize:12, color:'#aaa', marginBottom:4, display:'block'}}>Full Name</label>
          <input value={data.name} onChange={e=>setData({...data, name: e.target.value})} placeholder="Rahul Sharma" />
        </div>
        <div>
          <label style={{fontSize:12, color:'#aaa', marginBottom:4, display:'block'}}>Email</label>
          <input type="email" value={data.email} onChange={e=>setData({...data, email: e.target.value})} placeholder="rahul@ca.com" />
        </div>
        <div>
          <label style={{fontSize:12, color:'#aaa', marginBottom:4, display:'block'}}>Phone</label>
          <input 
            type="tel"
            value={data.phone} 
            onChange={e => {
              const val = e.target.value.replace(/\D/g, '').slice(0, 10);
              setData({...data, phone: val});
            }} 
            placeholder="9876543210" 
            maxLength={10}
          />
        </div>
        <div>
          <label style={{fontSize:12, color:'#aaa', marginBottom:4, display:'block'}}>LinkedIn URL</label>
          <input value={data.linkedin} onChange={e=>setData({...data, linkedin: e.target.value})} placeholder="linkedin.com/in/rahul" />
        </div>
        <div>
          <label style={{fontSize:12, color:'#aaa', marginBottom:4, display:'block'}}>City</label>
          <select value={data.city} onChange={e=>setData({...data, city: e.target.value})}>
            <option value="" disabled>Select City</option>
            {cArr.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label style={{fontSize:12, color:'#aaa', marginBottom:4, display:'block'}}>Pincode</label>
          <input value={data.pincode} onChange={e=>setData({...data, pincode: e.target.value})} placeholder="400001" maxLength={6} />
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-1">
          <label style={{fontSize:12, color:'#aaa'}}>Career Objective</label>
          <button className="text-l text-sm" style={{fontWeight:600}} onClick={genObj} disabled={loading}>
            {loading ? <span className="spinner">⟳</span> : `✨ AI Generate ${!isPro ? `(${3-freeObjCount} left)` : ''}`}
          </button>
        </div>
        <textarea 
          value={data.objective} 
          onChange={e=>setData({...data, objective: e.target.value})} 
          rows={3} 
          placeholder="To secure an articleship at a reputed Big 4 firm..."
        />
      </div>

      <div className="flex justify-between">
        <div/>
        <button className="btn-primary" onClick={handleNext}>Next Step →</button>
      </div>
    </div>
  );
}
