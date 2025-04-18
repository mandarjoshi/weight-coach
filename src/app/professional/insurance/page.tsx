"use client";

import React from 'react';
import styles from '../../mystyles.module.css'

const OptaviaGLP1Plan = () => {
  return (
    <div className={styles.page_professional_page_layout}>
      <div className={styles.page_professional_page_header}>Medical Insurance</div>
      <div className={styles.page_professional_card}>
        <h2 className={styles.page_professional_card_header}>Current Coverage</h2>
        <p className={styles.paragraph}>
          Medical insurance coverage for GLP-1 medications like Ozempic, Wegovy, Mounjaro, and Zepbound can vary widely depending on the patient’s diagnosis, insurance provider, and plan specifics. Most insurance companies are more likely to cover these medications if they’re prescribed for type 2 diabetes, as they have long-standing approval for glucose management. However, coverage for weight loss alone is more complex. While some employers and private insurers are beginning to include anti-obesity medications in their formularies, many still exclude them, considering weight loss to be a “lifestyle” issue rather than a medical necessity. In these cases, patients may need to pay out-of-pocket or seek assistance through manufacturer discount programs or telehealth platforms that offer bundled services.
        </p>
        <p className={styles.paragraph}>
          For those whose insurance does cover GLP-1s, prior authorization is often required. This means the prescribing doctor must submit medical records and documentation explaining why the medication is necessary. Even after approval, patients might face tiered pricing, co-pays, or coverage limits. Medicare Part D plans often don’t cover weight loss drugs at all, though advocacy efforts are underway to change that. Navigating the insurance process can be frustrating, but understanding your plan’s formulary, staying in communication with your provider, and being persistent with appeals can make a big difference in getting access to these life-changing medications.
        </p>
      </div>
      <div className={styles.page_professional_card}>
        <h2 className={styles.page_professional_card_header}>Aetna</h2>
        <p className={styles.paragraph}>
        Glucagon-like peptide-1 (GLP-1) agonists have been in the spotlight as demand has grown to support type 2 diabetes and weight loss. Have questions about coverage and costs? We’re here to support your benefit strategy and your employees’ health goals. ​
        </p>
        <div className={styles.button_div}>
          <button className={styles.button_get_started}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default OptaviaGLP1Plan;
