"use client";

import React from 'react';
import styles from '../../mystyles.module.css'

const OptaviaGLP1Plan = () => {
  return (
    <div className={styles.page_professional_page_layout}>
      <div className={styles.page_professional_page_header}>Meal Plans</div>
      <div className={styles.page_professional_card}>
        <h2 className={styles.page_professional_card_header}>Optavia GLP-1 Meal Plan</h2>
        <p className={styles.paragraph}>
          The Optavia GLP-1 meal plan is designed to support individuals using GLP-1 medications
          by providing portion-controlled, low-calorie meals that align with the drug&apos;s
          appetite-suppressing effects.
        </p>
        <p className={styles.paragraph}>
          It focuses on high-protein, low-glycemic meals to stabilize blood sugar and prevent
          energy crashes. The plan typically includes a mix of Optavia&apos;s pre-packaged “Fuelings”
          and one homemade &quot;Lean and Green&quot; meal per day.
        </p>
        <p className={styles.paragraph}>
          This structure helps users maintain consistent nutrition even with reduced hunger.
          When combined with GLP-1 therapy, the Optavia plan can enhance weight loss and support
          healthy, sustainable eating habits.
        </p>
        <div className={styles.button_div}>
          <button
            style={{
              backgroundColor: '#4caf50',
              color: '#fff',
              padding: '12px 24px',
              fontSize: '16px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className={styles.page_professional_card}>
        <h2 className={styles.page_professional_card_header}>Factor75 GLP-1 friendly Meal Plan</h2>
        <p className={styles.paragraph}>
          Factor75 offers a GLP-1-friendly meal plan designed to complement the effects of GLP-1 medications by providing portion-controlled, high-protein, and low-calorie meals. ​
        </p>
        <p className={styles.paragraph}>
          Their &quot;Calorie Smart&quot; meals are chef-prepared and dietitian-approved, typically containing around 550 calories per serving, making them suitable for weight management and appetite control. The plan includes a rotating weekly menu of over 40 meals, with options like keto, high-protein, and low-carb, allowing for customization to individual dietary preferences. ​
        </p>
        <p className={styles.paragraph}>
          Meals arrive fresh and ready to heat, requiring minimal preparation—just a few minutes in the microwave or oven. Factor75&apos;s service is available in 48 states, offering flexibility to skip weeks or adjust meal quantities as needed. ​
        </p>
        <div className={styles.button_div}>
          <button
            style={{
              backgroundColor: '#4caf50',
              color: '#fff',
              padding: '12px 24px',
              fontSize: '16px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default OptaviaGLP1Plan;
