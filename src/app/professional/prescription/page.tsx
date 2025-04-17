"use client";

import React, { useState } from 'react';

const NutritionistDirectory = () => {
  // Sample data - replace with real API data
  const nutritionists = [
    { name: 'Dr. Sarah Mitchell', location: 'Downtown Clinic', phone: '555-123-4567' },
    { name: 'Mark Alvarez, RD', location: 'Wellness Center West', phone: '555-987-6543' },
    { name: 'Jessica Lee, Nutritionist', location: 'Healthy Life Center', phone: '555-765-4321' },
    { name: 'Emily Chen, RD', location: 'Uptown Wellness', phone: '555-246-8102' },
    { name: 'Liam Patel, RD', location: 'Eastside Nutrition', phone: '555-135-7902' }
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredList = nutritionists.filter((n) =>
    n.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    n.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (

    <div>
    <div
      style={{
        maxWidth: '1000px',
        margin: '40px auto',
        padding: '30px',
        borderRadius: '12px',
        backgroundColor: '#f7fafd',
        fontFamily: 'Arial, sans-serif',
        boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
      }}
    >
      <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>
        <b>How to Find a Doctor for GLP-1 Medication</b>
      </h2>

      <p>
        Finding a knowledgeable and supportive doctor is key to safely and effectively using GLP-1 medications like Ozempic, Wegovy, or Mounjaro.
        Here's how to get started:
      </p>

      <h4 style={{ color: '#1f618d', marginTop: '20px' }}>1. Start with Your Primary Care Physician (PCP)</h4>
      <p>
        Ask your PCP if GLP-1 therapy is right for you. Many primary care doctors are now prescribing these medications and can monitor your progress.
      </p>

      <h4 style={{ color: '#1f618d', marginTop: '20px' }}>2. Look for a Specialist</h4>
      <ul>
        <li><strong>Endocrinologists</strong> – Experts in diabetes, hormones, and metabolism.</li>
        <li><strong>Obesity medicine physicians</strong> – Focus on safe, supervised weight loss using tools like GLP-1s.</li>
      </ul>

      <h4 style={{ color: '#1f618d', marginTop: '20px' }}>3. Use serach option below to find a Docotr near you</h4>

      <h4 style={{ color: '#1f618d', marginTop: '20px' }}>4. Check Modern Metabolic Health Clinics</h4>
      <p>
        Clinics like <strong>Calibrate</strong>, <strong>Found</strong>, <strong>Ro</strong>, or <strong>PlushCare</strong> offer online GLP-1 prescriptions with virtual coaching and lifestyle support.
      </p>

      <h4 style={{ color: '#1f618d', marginTop: '20px' }}>5. Ask the Right Questions</h4>
      <ul>
        <li>Do they have experience with GLP-1 prescriptions?</li>
        <li>Will they monitor labs and adjust dosage over time?</li>
        <li>Do they offer support with nutrition, exercise, or mental health?</li>
      </ul>

      <p style={{ marginTop: '20px', fontSize: '0.9em', color: '#555' }}>
        💡 Want help finding a local doctor? Consider asking your insurance provider for in-network specialists or using a location-based health platform.
      </p>
    </div>

    <div style={{ maxWidth: '800px', margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>
        Find a Doctor Near You
      </h1>
      <br></br>
      <input
        type="text"
        placeholder="Search by name or location..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '12px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          marginBottom: '20px',
          fontSize: '16px'
        }}
      />

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ backgroundColor: '#f1f9ff' }}>
          <tr>
            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Name</th>
            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Location</th>
            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.length > 0 ? (
            filteredList.map((n, index) => (
              <tr key={index}>
                <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{n.name}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{n.location}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{n.phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} style={{ padding: '15px', textAlign: 'center', color: '#888' }}>
                No results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default NutritionistDirectory;
