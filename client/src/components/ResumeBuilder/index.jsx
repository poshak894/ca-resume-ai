import React from 'react';
import StepPersonal from './StepPersonal.jsx';
import StepEducation from './StepEducation.jsx';
import StepArticleship from './StepArticleship.jsx';
import StepSkills from './StepSkills.jsx';
import StepPreview from './StepPreview.jsx';
import ResumeView from './ResumeView.jsx';

import { saveResume } from '../../utils/api.js';

export default function ResumeBuilder({ data, setData, step, setStep, isPro, setShowPayM, ats, setAts, showToast }) {
  const steps = ["Personal", "Education", "Experience", "Skills", "Preview"];

  React.useEffect(() => {
    // Auto-save when moving across steps
    if (step > 0) {
      saveResume(data, ats).catch(() => {});
    }
  }, [step]);

  return (
    <div style={{ paddingTop: 40, paddingLeft: 20, paddingRight: 20, paddingBottom: 60, maxWidth: '100%', margin: '0 auto', minHeight: '100vh' }}>
      
      {/* Wizard Progress Bar */}
      <div className="flex items-center justify-between mb-8" style={{maxWidth:600, margin:'0 auto 32px'}}>
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <div 
              onClick={() => setStep(i)}
              className="flex-col items-center gap-2" 
              style={{cursor:'pointer', opacity: step >= i ? 1 : 0.5}}
            >
              <div style={{
                width:28, height:28, borderRadius:'50%', 
                background: step >= i ? 'var(--t)' : 'transparent',
                border: `2px solid ${step >= i ? 'var(--t)' : 'var(--t3)'}`,
                display:'flex', alignItems:'center', justifyContent:'center',
                fontWeight:'bold', color: step >= i ? '#fff' : 'var(--t3)',
                transition: 'all 0.3s',
                fontSize: 12
              }}>
                {i + 1}
              </div>
              <span style={{fontSize:10, color: step >= i ? 'var(--l)' : '#aaa', fontWeight:600}}>{s}</span>
            </div>
            {i < steps.length - 1 && (
              <div style={{flex:1, height:2, background: step > i ? 'var(--t)' : 'var(--t3)', margin:'-12px 10px 0', borderRadius:2, transition: 'all 0.3s'}}/>
            )}
          </React.Fragment>
        ))}
      </div>

      <div style={{
        display: 'flex', 
        gap: 30, 
        justifyContent: 'center',
        padding: '0 20px',
        width: '100%',
        maxWidth: 1600,
        margin: '0 auto',
        flexDirection: 'row',
        alignItems: 'flex-start',
        overflowX: 'hidden'
      }}>
        {/* Left Side: Forms (50% approx) */}
        <div style={{
          flex: '1 1 50%', 
          maxWidth: step === 4 ? 1200 : 800,
          transition: 'all 0.3s'
        }}>
          {step === 0 && <StepPersonal data={data} setData={setData} setStep={setStep} isPro={isPro} showToast={showToast} setShowPayM={setShowPayM} />}
          {step === 1 && <StepEducation data={data} setData={setData} setStep={setStep} />}
          {step === 2 && <StepArticleship data={data} setData={setData} setStep={setStep} isPro={isPro} showToast={showToast} setShowPayM={setShowPayM} />}
          {step === 3 && <StepSkills data={data} setData={setData} setStep={setStep} />}
          {step === 4 && <StepPreview data={data} setData={setData} setStep={setStep} isPro={isPro} showToast={showToast} setShowPayM={setShowPayM} ats={ats} setAts={setAts} />}
        </div>

        {/* Right Side: High-Def Live Preview (50% approx) */}
        {step < 4 && (
          <div style={{
            flex: '1 1 50%', 
            position: 'sticky', 
            top: 100, 
            height: 'fit-content',
            display: window.innerWidth > 1024 ? 'block' : 'none',
            overflow: 'hidden'
          }}>
            <div className="flex justify-between items-center mb-3">
               <h4 style={{fontSize: 12, color: '#aaa', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5}}>Live Preview</h4>
               <span style={{fontSize: 10, color: 'var(--t)', background: 'rgba(0,191,166,0.1)', padding: '2px 10px', borderRadius: 4, fontWeight: 500}}>Syncing</span>
            </div>
            <div style={{
              width: '100%', 
              overflow: 'hidden', 
              borderRadius: 16, 
              border: '1px solid var(--t3)',
              boxShadow: '0 30px 40px rgba(0,0,0,0.4)',
              background: '#fff',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <div style={{
                transform: 'scale(0.65)', 
                transformOrigin: 'top center',
                width: '794px', 
                flexShrink: 0
              }}>
                <ResumeView data={data} isPreview={true} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
