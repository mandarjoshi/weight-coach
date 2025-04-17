import React from 'react';

const GLP1Info = () => {
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
      <h2 style={{ color: '#2c3e50', textAlign: 'center' }}>
        Understanding GLP-1 Drugs
      </h2>

      <img
        src="https://via.placeholder.com/750x300?text=GLP-1+Mechanism+Illustration"
        alt="GLP-1 Drugs Mechanism"
        style={{ width: '100%', borderRadius: '8px', margin: '20px 0' }}
      />

      <p>
        <strong>GLP-1 receptor agonists</strong> are a powerful and increasingly
        popular class of medications originally developed to manage{' '}
        <strong>type 2 diabetes</strong>. More recently, they have been used for
        weight management, particularly in people with obesity or metabolic
        syndrome.
      </p>

      <h3 style={{ color: '#2980b9' }}>How Do GLP-1 Drugs Work?</h3>
      <p>
        GLP-1 drugs mimic the natural hormone <em>glucagon-like peptide-1</em>,
        which is released in the gut after eating. They help:
      </p>
      <ul>
        <li>Stimulate insulin release when blood sugar is high</li>
        <li>Suppress glucagon (a hormone that raises blood sugar)</li>
        <li>Slow gastric emptying (slows how quickly food leaves the stomach)</li>
        <li>Reduce appetite and promote a feeling of fullness</li>
      </ul>

      <h3 style={{ color: '#2980b9' }}>Common GLP-1 Medications</h3>
      <ul>
        <li><strong>Semaglutide</strong> – Ozempic, Wegovy, Rybelsus</li>
        <li><strong>Liraglutide</strong> – Victoza, Saxenda</li>
        <li><strong>Dulaglutide</strong> – Trulicity</li>
        <li><strong>Exenatide</strong> – Byetta, Bydureon</li>
      </ul>

      <h3 style={{ color: '#2980b9' }}>Benefits of GLP-1 Drugs</h3>
      <ul>
        <li>Lower blood sugar levels in people with type 2 diabetes</li>
        <li>Significant weight loss, especially with semaglutide (Wegovy)</li>
        <li>May reduce risk of cardiovascular events</li>
      </ul>

      <h3 style={{ color: '#2980b9' }}>Potential Side Effects</h3>
      <ul>
        <li>Nausea, vomiting, or diarrhea (especially at the beginning)</li>
        <li>Loss of appetite</li>
        <li>Possible risk of pancreatitis (rare)</li>
        <li>Injection-site reactions (for injectable forms)</li>
      </ul>

      <p style={{ marginTop: '20px' }}>
        These medications can be life-changing for many people. However, they
        should always be used under the guidance of a licensed healthcare
        provider. Dosage and monitoring are key to maximizing benefits and
        minimizing side effects.
      </p>

      <p style={{ fontSize: '0.9em', color: '#666', textAlign: 'center', marginTop: '30px' }}>
        🚨 Always consult a healthcare provider before starting any new medication. GLP-1 drugs are prescription-only.
      </p>
    </div>
  );
};

export default GLP1Info;
