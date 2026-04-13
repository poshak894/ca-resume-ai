import React, { useState, useEffect } from 'react';
import ResumeView from './ResumeView.jsx';
import { callGeminiWithRetry as callGemini, saveResume, trackDownload } from '../../utils/api.js';

export default function StepPreview({ data, setData, setStep, isPro, setShowPayM, showToast, ats, setAts }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    saveResume(data, ats).catch(console.error);
  }, [data, ats]);

  const [result, setResult] = useState(null);
  const [atsData, setAtsData] = useState({ score: ats || 0, suggestions: [] });

  const handleProAction = async (type) => {
    if (!isPro) {
      setShowPayM('pro');
      return;
    }
    setLoading(type);
    try {
      if (type === 'linkedin') {
        const prompt = `Write a professional 3-sentence LinkedIn summary for a CA student named ${data.name}. Skills: ${data.technicalSkills.join(', ')}. Articleship: ${data.articleship.firm}. Focus on Big 4 articleship goals.`;
        const sys = "Provide only the summary text, professional tone.";
        const res = await callGemini(prompt, sys);
        setResult({ title: '🔗 LinkedIn Summary', content: res });
      } else if (type === 'cover') {
        const prompt = `Write a professional CA articleship cover letter for ${data.name} applying to ${data.articleship.firm}. Highlight: ${data.technicalSkills.join(', ')} and duties: ${data.articleship.duties.join(', ')}.`;
        const sys = "Provide only the cover letter text, formal tone.";
        const res = await callGemini(prompt, sys);
        setResult({ title: '📝 Cover Letter', content: res });
      } else if (type === 'ats') {
        const prompt = `Analyse this CA resume. Name: ${data.name}, Skills: ${data.technicalSkills.join(', ')}, Firm: ${data.articleship.firm}. Return JSON: {"score": 0-100, "suggestions": ["Short tip 1", "Short tip 2"]}`;
        const sys = "Return only valid JSON.";
        const res = await callGemini(prompt, sys);
        const ans = JSON.parse(res.replace(/```json|```/g,"").trim());
        setAts(ans.score || 75);
        setAtsData(ans);
        showToast(`📊 ATS Scan Complete! Score: ${ans.score || 75}/100`);
      }
    } catch (e) {
      console.error(e);
      showToast('❌ AI Feature unavailable');
    }
    setLoading(false);
  };

  
  const handleDownload = async () => {
    setLoading(true);
    try {
      await trackDownload();
    } catch (e) {
      if (e.error === 'FREE_LIMIT_REACHED') {
        showToast('⚠️ Free limit reached. Upgrade to Pro for unlimited downloads!');
        setShowPayM('pro');
      } else {
        showToast('❌ ' + (e.error || 'Failed to verify download limit'));
      }
      setLoading(false);
      return;
    }

    const element = document.getElementById('resume-preview-container');
    const opt = {
      margin: 0,
      filename: `${data.name || 'Resume'}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, letterRendering: true, scrollY: 0 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    window.html2pdf().from(element).set(opt).save().then(() => {
      setLoading(false);
      showToast('🎉 PDF Downloaded successfully!');
    }).catch(err => {
      console.error('PDF Download error:', err);
      setLoading(false);
      showToast('❌ Failed to extract PDF');
    });
  };

  const atsColor = ats >= 90 ? 'var(--l2)' : ats >= 75 ? 'var(--gold)' : 'var(--red)';

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 300px) 1fr', gap: 32, alignItems: 'start' }}>
      
      {/* Left Sidebar */}
      <div className="card" style={{position:'sticky', top: 80}}>
        <div style={{textAlign:'center', marginBottom:24}}>
          <div style={{
            width:100, height:100, borderRadius:'50%', 
            border: `6px solid ${atsColor}`, 
            display:'flex', alignItems:'center', justifyContent:'center', 
            margin:'0 auto 12px',
            boxShadow: `0 0 15px ${atsColor}44`
          }}>
            <span style={{fontSize:32, color: atsColor, fontWeight:'bold'}}>{ats}</span>
          </div>
          <div style={{color:'#aaa', fontSize:12, textTransform:'uppercase', letterSpacing:1}}>ATS Score</div>
        </div>

        <button className="btn-primary w-full shadow mb-6" onClick={() => handleProAction('ats')} disabled={loading==='ats'}>
          {loading==='ats' ? <span className="spinner">⟳ Analyzing...</span> : '🤖 Run AI ATS Scan'}
        </button>

        {atsData.suggestions?.length > 0 && (
          <div className="mb-6" style={{background:'rgba(255,255,255,0.03)', padding:12, borderRadius:8, fontSize:12, border:'1px solid var(--t3)'}}>
             <div style={{color:'var(--t)', fontWeight:'bold', marginBottom:6, fontSize:10, textTransform:'uppercase'}}>AI Suggestions:</div>
             {atsData.suggestions.slice(0, 3).map((s,i) => (
               <div key={i} className="mb-2" style={{color:'#bbb'}}>• {s}</div>
             ))}
          </div>
        )}

        <div className="flex-col gap-2 mb-6">
          <button className="btn-outline w-full text-left" onClick={() => handleProAction('linkedin')} disabled={loading==='linkedin'}>
            {loading==='linkedin' ? <span className="spinner">⟳</span> : '🔗 LinkedIn Summary (Pro)'}
          </button>
          <button className="btn-outline w-full text-left" onClick={() => handleProAction('cover')} disabled={loading==='cover'}>
            {loading==='cover' ? <span className="spinner">⟳</span> : '📝 Cover Letter (Pro)'}
          </button>
          <button className="btn-outline w-full text-left" onClick={handleDownload} disabled={loading===true} style={{ transition: 'none' }}>
            {loading === true ? <span className="spinner">⟳</span> : '⬇️ Download PDF'}
          </button>
        </div>
      </div>

      {result && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{background:'rgba(0,0,0,0.85)', backdropFilter:'blur(4px)'}} onClick={() => setResult(null)}>
          <div className="card max-w-lg w-full" onClick={e => e.stopPropagation()} style={{border:'1px solid var(--t)'}}>
             <div className="flex justify-between items-center mb-4">
                <h3 style={{color:'var(--t)'}}>{result.title}</h3>
                <button onClick={() => setResult(null)} style={{fontSize:24}}>&times;</button>
             </div>
             <div style={{maxHeight:400, overflowY:'auto', background:'rgba(255,255,255,0.05)', padding:16, borderRadius:8, marginBottom:20, whiteSpace:'pre-wrap', lineHeight:1.6, fontSize:14, color:'#ddd'}}>
                {result.content}
             </div>
             <button className="btn-primary w-full" onClick={() => {
                navigator.clipboard.writeText(result.content);
                showToast('📋 Copied to clipboard!');
             }}>Copy to Clipboard</button>
          </div>
        </div>
      )}
      
      {/* Right Side A4 Preview */}
      <div className="shadow-2xl" id="resume-preview-container" style={{ position: 'relative' }}>
        <ResumeView data={data} theme="default" />
      </div>
    </div>
  );
}
