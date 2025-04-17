import React from 'react';

const GLP1SideEffects = () => {
  return (
    <div
      style={{
        backgroundColor: '#fff7f7',
        padding: '20px',
        borderRadius: '10px',
        border: '1px solid #f5c6cb',
        fontFamily: 'Arial, sans-serif',
        marginTop: '30px'
      }}
    >
      <h3 style={{ color: '#c0392b', marginBottom: '15px' }}>Side Effects of GLP-1 Drugs</h3>

      <p>
        Like any medication, GLP-1 receptor agonists can cause side effects. While
        many are mild and manageable, some may require medical attention.
      </p>

      <h4 style={{ color: '#a93226', marginTop: '15px' }}>Common Side Effects</h4>
      <ul>
        <li>Nausea</li>
        <li>Vomiting</li>
        <li>Diarrhea or constipation</li>
        <li>Loss of appetite</li>
        <li>Feeling full quickly</li>
        <li>Fatigue</li>
      </ul>

      <h4 style={{ color: '#a93226', marginTop: '15px' }}>Less Common / Rare Side Effects</h4>
      <ul>
        <li>Pancreatitis (inflammation of the pancreas)</li>
        <li>Gallbladder issues (e.g., gallstones)</li>
        <li>Kidney problems due to dehydration</li>
        <li>Allergic reactions</li>
        <li>Injection site reactions (redness, swelling, or itching)</li>
      </ul>

      <p style={{ fontSize: '0.9em', color: '#555', marginTop: '15px' }}>
        ⚠️ If you experience severe abdominal pain, signs of an allergic reaction,
        or persistent vomiting, contact your healthcare provider immediately.
      </p>
    </div>

  );
};

export default GLP1SideEffects;
