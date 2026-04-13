import React from 'react';

export default function ResumeView({ data, isPreview = false }) {
  const secTitle = {
    color: 'var(--t)', 
    textTransform: 'uppercase', 
    fontWeight: 'bold', 
    fontSize: 14, 
    borderBottom: '2px solid var(--t)', 
    paddingBottom: 4, 
    marginBottom: 12,
    marginTop: 20
  };

  const tdStyle = { padding: '4px 8px', border: '1px solid #ccc', fontSize: 11, color: '#333' };
  const thStyle = { ...tdStyle, fontWeight: 'bold', background: '#f5f5f5' };

  return (
    <div style={{
      color: '#000', 
      fontFamily: 'Arial, sans-serif', 
      padding: isPreview ? '15px 20px' : '40px 50px', 
      background: '#fff', 
      minHeight: isPreview ? 'unset' : '1122px',
      boxSizing: 'border-box'
    }}>
      
      <div style={{textAlign:'center', marginBottom:12}}>
        <h1 style={{fontSize:28, marginBottom:4, fontFamily:'Times New Roman', textTransform:'uppercase', color:'#111'}}>{data.name || 'YOUR NAME'}</h1>
        <div style={{fontSize:11, color:'#444', display:'flex', justifyContent:'center', gap:12, flexWrap:'wrap'}}>
          {data.city && <span>📍 {data.city} - {data.pincode}</span>}
          {data.phone && <span>📞 {data.phone}</span>}
          {data.email && <span>✉️ {data.email}</span>}
          {data.linkedin && <span>🔗 {data.linkedin}</span>}
        </div>
      </div>

      <hr style={{border:0, borderTop:'1px solid #ccc', margin:'0 0 16px 0'}}/>

      {data.objective && (
        <>
          <div style={secTitle}>Career Objective</div>
          <div style={{fontSize:12, color:'#333', lineHeight:1.5}}>{data.objective}</div>
        </>
      )}

      {/* Education */}
      <div style={secTitle}>Educational Qualification</div>
      <table style={{width:'100%', borderCollapse:'collapse', marginBottom:16}}>
        <thead>
          <tr>
            <th style={thStyle}>Examination</th>
            <th style={thStyle}>Board / University</th>
            <th style={thStyle}>Year</th>
            <th style={thStyle}>% / Grade</th>
            <th style={thStyle}>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {data.education.filter(e => e.university).map((e,i) => (
            <tr key={i}>
              <td style={tdStyle}>{e.degree}</td>
              <td style={tdStyle}>{e.university}</td>
              <td style={tdStyle}>{e.year}</td>
              <td style={tdStyle}>{e.pct}</td>
              <td style={tdStyle}>{e.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Experience */}
      {(data.articleship.firm || data.articleship.duties.length > 0) && (
        <>
          <div style={secTitle}>Professional Experience</div>
          <div style={{marginBottom:4, display:'flex', justifyContent:'space-between', fontSize:13, fontWeight:'bold'}}>
            <div>{data.articleship.firm}</div>
            <div>{data.articleship.period}</div>
          </div>
          <div style={{fontSize:11, fontStyle:'italic', color:'#555', marginBottom:8}}>
            {data.articleship.city} | Supervisor: {data.articleship.supervisor}
          </div>
          <ul style={{paddingLeft:20, fontSize:12, color:'#333', lineHeight:1.5}}>
            {data.articleship.duties.map((d,i) => <li key={i}>{d}</li>)}
          </ul>
        </>
      )}

      {/* Certifications (Optional) */}
      {data.certificateAndTraining.length > 0 && (
        <>
          <div style={secTitle}>Certificate & Training</div>
          <ul style={{paddingLeft:20, fontSize:12, color:'#333', lineHeight:1.5}}>
            {data.certificateAndTraining.map((c,i) => (
              <li key={i}><strong>{c.name}</strong> from {c.issuer} {c.desc ? `- ${c.desc}` : ''}</li>
            ))}
          </ul>
        </>
      )}

      {/* Skills */}
      {(data.technicalSkills.length>0 || data.itSkills.length>0) && (
        <>
          <div style={secTitle}>Technical & IT Skills</div>
          <div style={{display:'flex', flexWrap:'wrap', gap:6}}>
            {[...data.technicalSkills, ...data.itSkills].map((s,i) => (
              <span key={i} style={{background:'#eee', padding:'2px 6px', borderRadius:4, fontSize:11, color:'#333'}}>{s}</span>
            ))}
          </div>
        </>
      )}

      {/* Soft Skills */}
      {data.softSkills.length > 0 && (
        <>
          <div style={secTitle}>Soft Skills</div>
          <div style={{fontSize:12, color:'#333'}}>{data.softSkills.join(', ')}</div>
        </>
      )}

      {/* Acheivements & Courses */}
      {(data.achievements.length>0 || data.courses.length>0) && (
        <>
          <div style={secTitle}>Achievements & ITT/Orientation</div>
          <ul style={{paddingLeft:20, fontSize:12, color:'#333', lineHeight:1.5}}>
            {data.achievements.map((a,i) => <li key={`a${i}`}>{a}</li>)}
            {data.courses.map((c,i) => <li key={`c${i}`}>{c}</li>)}
          </ul>
        </>
      )}



      {/* Declaration (Standard on Indian resumes) */}
      <div style={{marginTop:40, fontSize:11, color:'#555'}}>
        I hereby declare that the information furnished above is true to the best of my knowledge and belief.<br/><br/><br/>
        <strong>Place:</strong> {data.city || '_________________'}<br/>
        <strong>Date:</strong> _________________
        <div style={{textAlign:'right', marginTop:'-16px'}}><strong>({data.name || 'YOUR NAME'})</strong></div>
      </div>
    </div>
  );
}

