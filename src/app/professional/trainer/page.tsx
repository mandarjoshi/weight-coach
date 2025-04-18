"use client";

import React, { useState } from 'react';
import styles from '../../mystyles.module.css';

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
    <div className={styles.page_professional_page_layout}>
      <div className={styles.page_professional_page_header}>Strength Training</div>
      <div className={styles.page_professional_card}>
        <h2 className={styles.page_professional_card_header}>Why exercise is important?</h2>
        <p>Exercise is important for individuals on GLP-1 drugs because regular physical activity enhances the medication’s effects on weight loss and metabolic health. Trainers create personalized workout plans that build strength, improve cardiovascular health, and support fat loss without risking muscle loss. They help maintain motivation and consistency, especially as energy levels and appetite change with GLP-1 use. Exercise also helps manage blood sugar levels, improves insulin sensitivity, and supports overall well-being. With expert guidance, a trainer ensures workouts are safe, effective, and aligned with the individual’s goals and physical condition.</p>
      </div>
      <div >
        <h1 className={styles.page_professional_card_header_center}>
          Find a Trainer / Gym Near You
        </h1>      
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
