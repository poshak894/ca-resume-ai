import React, { useState } from 'react';
import { FIRMS, CITIES } from '../../constants/stipend.js';
import { callGeminiWithRetry as callGemini } from '../../utils/api.js';

export default function StepArticleship({ data, setData, setStep, isPro, setShowPayM, showToast }) {
  const [dutyInput, setDutyInput] = useState('');
  const [loading, setLoading] = useState(false);

  const formatMonth = (m) => {
    if (!m) return '';
    const date = new Date(m);
    return date.toLocaleString('default', { month: 'short', year: 'numeric' });
  };

  const parseToMonthVal = (str) => {
    if (!str || str === 'Present') return '';
    const date = new Date(str);
    if (isNaN(date.getTime())) return '';
    const y = date.getFullYear();
    const m = (date.getMonth() + 1).toString().padStart(2, '0');
    return `${y}-${m}`;
  };

  const periodParts = (data.articleship.period || '').split(' – ');

  const handlePeriodChange = (field, val) => {
    let from = periodParts[0] || '';
    let to = periodParts[1] || 'Present';

    if (field === 'from') from = formatMonth(val) || from;
    if (field === 'to') to = val ? formatMonth(val) : 'Present';

    setData({
      ...data, 
      articleship: {
        ...data.articleship, 
        period: `${from} – ${to}`
      }
    });
  };

  const addDuty = () => {
    if (!dutyInput.trim()) return;
    setData({...data, articleship: {...data.articleship, duties: [...data.articleship.duties, dutyInput.trim()]}});
    setDutyInput('');
  };

  const removeDuty = (idx) => {
    const newD = [...data.articleship.duties];
    newD.splice(idx, 1);
    setData({...data, articleship: {...data.articleship, duties: newD}});
  };


  const genDuties = async () => {
    if (!isPro) {
      setShowPayM('pro');
      return;
    }
    if (!data.articleship.firm) {
      showToast('❌ Please specify Firm Name first');
      return;
    }
    setLoading(true);
    try {
      const prompt = `Generate 7 professional articleship duty bullet points for a CA student at ${data.articleship.firm} in ${data.articleship.city||'India'}. Use action verbs. Each under 15 words. Return as JSON array of strings.`;
      const sys = "Return only valid JSON array of strings.";
      const res = await callGemini(prompt, sys);
      const arr = JSON.parse(res.replace(/```json|```/g,"").trim());
      setData(prev => ({...prev, articleship: {...prev.articleship, duties: [...prev.articleship.duties, ...arr]}}));
      showToast('✨ AI Duties added!');
    } catch(e) {
      showToast('❌ Failed to generate duties');
    }
    setLoading(false);
  };


  const cities = Object.keys(CITIES);

  return (
    <div className="card">
      <h3 className="mb-4" style={{fontSize:24}}>Professional Experience</h3>
      
      <div className="grid grid-cols-2 gap-x-4 gap-y-4 mb-6">
        <div className="col-span-2">
          <label style={{fontSize:12, color:'#aaa', marginBottom:4, display:'block'}}>Firm Name (Articleship)</label>
          <input 
            list="firms"
            value={data.articleship.firm} 
            onChange={e=>setData({...data, articleship: {...data.articleship, firm: e.target.value}})} 
            placeholder="e.g. PwC" 
          />
          <datalist id="firms">
            {FIRMS.map(f => <option key={f} value={f}/>)}
          </datalist>
        </div>
        
        <div>
          <label style={{fontSize:12, color:'#aaa', marginBottom:4, display:'block'}}>From (Start Date)</label>
          <input 
            type="month"
            value={parseToMonthVal(periodParts[0])}
            onChange={e=>handlePeriodChange('from', e.target.value)} 
          />
        </div>
        <div>
          <label style={{fontSize:12, color:'#aaa', marginBottom:4, display:'block'}}>To (Present if empty)</label>
          <input 
            type="month"
            value={parseToMonthVal(periodParts[1])}
            onChange={e=>handlePeriodChange('to', e.target.value)} 
          />
        </div>

        <div>
          <label style={{fontSize:12, color:'#aaa', marginBottom:4, display:'block'}}>City</label>
          <input 
            list="cities"
            value={data.articleship.city} 
            onChange={e=>setData({...data, articleship: {...data.articleship, city: e.target.value}})} 
            placeholder="Mumbai" 
          />
          <datalist id="cities">
            {cities.map(c => <option key={c} value={c}/>)}
          </datalist>
        </div>
        <div>
          <label style={{fontSize:12, color:'#aaa', marginBottom:4, display:'block'}}>Supervisor / Principal Name</label>
          <input 
            value={data.articleship.supervisor} 
            onChange={e=>setData({...data, articleship: {...data.articleship, supervisor: e.target.value}})} 
            placeholder="Mr. Sharma (Partner)" 
          />
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-1">
          <label style={{fontSize:12, color:'#aaa'}}>Duties & Responsibilities</label>
          <button className="text-l text-sm" style={{fontWeight:600}} onClick={genDuties} disabled={loading}>
            {loading ? <span className="spinner">⟳</span> : "⚙️ AI Generate Duties (Pro)"}
          </button>
        </div>
        
        <div className="flex gap-2 mb-4">
          <input 
            value={dutyInput} 
            onChange={e=>setDutyInput(e.target.value)} 
            onKeyDown={e => e.key==='Enter' && addDuty()}
            placeholder="e.g. Conducted statutory audit for a listed manufacturing client..." 
          />
          <button className="btn-primary" onClick={addDuty}>Add</button>
        </div>

        <div className="flex-col gap-2">
          {data.articleship.duties.map((d, i) => (
            <div key={i} className="flex items-center gap-2" style={{background:'rgba(255,255,255,0.02)', padding:'8px 12px', borderRadius:6, border:'1px solid var(--t3)', fontSize:14}}>
              <span style={{color:'var(--t)', fontWeight:'bold'}}>•</span>
              <span style={{flex:1}}>{d}</span>
              <button className="text-red" onClick={()=>removeDuty(i)}>×</button>
            </div>
          ))}
          {data.articleship.duties.length === 0 && <div style={{fontSize:13, color:'#666', fontStyle:'italic'}}>No duties added. Type and click Add, or use AI.</div>}
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button className="btn-outline" onClick={() => setStep(1)}>← Back</button>
        <button className="btn-primary" onClick={() => {
          const a = data.articleship;
          if (!a.firm || !a.period || !a.city || !a.supervisor || a.duties.length === 0) {
            showToast('❌ Firm, Period, City, Supervisor and at least 1 Duty are mandatory');
          } else {
            setStep(3);
          }
        }}>Next Step →</button>
      </div>
    </div>
  );
}
