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
    <div style={{ maxWidth: '1000px', margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <div>Mental health is a crucial component of successful GLP-1 therapy, as emotional well-being directly influences eating behaviors and lifestyle habits. Some individuals may experience changes in mood or body image during weight loss, making psychological support essential. Stress, anxiety, or depression can interfere with medication adherence and long-term success. Mental health professionals help patients build resilience, cope with emotional eating, and navigate the psychological aspects of body transformation. Supporting mental health ensures a more balanced, sustainable journey with GLP-1 medications.</div>
      <br></br>
      <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>
        Find a Nutritionist Near You
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
  );
};

export default NutritionistDirectory;
