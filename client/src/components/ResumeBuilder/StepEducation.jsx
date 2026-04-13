import React from 'react';

export default function StepEducation({ data, setData, setStep }) {
  const updateEdu = (index, field, val) => {
    const newEdu = [...data.education];
    newEdu[index][field] = val;
    setData({...data, education: newEdu});
  };

  const addCert = () => {
    setData({...data, certificateAndTraining: [...data.certificateAndTraining, {name:"", issuer:"", desc:""}]});
  };
  const removeCert = (idx) => {
    const newC = [...data.certificateAndTraining];
    newC.splice(idx, 1);
    setData({...data, certificateAndTraining: newC});
  };
  const updateCert = (idx, field, val) => {
    const newC = [...data.certificateAndTraining];
    newC[idx][field] = val;
    setData({...data, certificateAndTraining: newC});
  };

  const thStyle = {color:'#aaa', fontSize:12, paddingBottom:8, textAlign:'left'};

  return (
    <div className="card">
      <h3 className="mb-4" style={{fontSize:24}}>Educational Qualification</h3>
      
      <div style={{overflowX:'auto', marginBottom:32}}>
        <table style={{width:'100%', borderCollapse:'collapse', minWidth:600}}>
          <thead>
            <tr>
              <th style={thStyle}>Examination / Degree</th>
              <th style={thStyle}>Board / University</th>
              <th style={thStyle}>Year</th>
              <th style={thStyle}>% / Grade</th>
              <th style={thStyle}>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {data.education.map((e, i) => (
              <tr key={i}>
                <td style={{padding:'4px 8px 4px 0', fontSize:13}}><input value={e.degree} readOnly style={{background:'rgba(255,255,255,0.02)', color:'#ddd', border:'none'}}/></td>
                <td style={{padding:4}}><input value={e.university} onChange={ev=>updateEdu(i, 'university', ev.target.value)} placeholder="University"/></td>
                <td style={{padding:4, width:80}}><input value={e.year} onChange={ev=>updateEdu(i, 'year', ev.target.value)} placeholder="2023"/></td>
                <td style={{padding:4, width:80}}><input value={e.pct} onChange={ev=>updateEdu(i, 'pct', ev.target.value)} placeholder="85%"/></td>
                <td style={{padding:4}}><input value={e.remarks} onChange={ev=>updateEdu(i, 'remarks', ev.target.value)} placeholder="1st Attempt"/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h3 style={{fontSize:20}}>Certificates & Training (Optional)</h3>
        <button className="btn-outline" style={{padding:'6px 16px', fontSize:12}} onClick={addCert}>+ Add Row</button>
      </div>

      {data.certificateAndTraining.map((c, i) => (
        <div key={i} className="flex gap-4 mb-4 items-start" style={{background:'rgba(255,255,255,0.02)', padding:16, borderRadius:8, border:'1px solid var(--d3)'}}>
          <div style={{flex:1}} className="flex-col gap-2">
            <input value={c.name} onChange={e=>updateCert(i, 'name', e.target.value)} placeholder="Certificate Name (e.g. Advanced Excel)"/>
            <input value={c.issuer} onChange={e=>updateCert(i, 'issuer', e.target.value)} placeholder="Issuer (e.g. Udemy)"/>
            <input value={c.desc} onChange={e=>updateCert(i, 'desc', e.target.value)} placeholder="Brief description..."/>
          </div>
          <button className="text-red" style={{fontSize:20}} onClick={()=>removeCert(i)}>×</button>
        </div>
      ))}

      <div className="flex justify-between mt-8">
        <button className="btn-outline" onClick={() => setStep(0)}>← Back</button>
        <button className="btn-primary" onClick={() => {
          const valid = data.education.some(e => e.university && e.year && e.pct);
          if (!valid) {
            alert('Please complete at least one education entry (University, Year, and % are mandatory)');
          } else {
            setStep(2);
          }
        }}>Next Step →</button>
      </div>
    </div>
  );
}
