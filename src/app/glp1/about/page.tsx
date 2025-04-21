
import styles from '../../mystyles.module.css';

export default function Home() {
  return (
    <div className={styles.page_professional_page_layout}>
      <div className={styles.page_professional_page_header}>What to Know About GLP-1</div>
      <div className={styles.page_professional_card}>
        <h2 className={styles.page_professional_card_header}>What&apos;s new?</h2>
        <li>
          <a style={{  color: 'blue' }} href={'https://investor.lilly.com/news-releases/news-release-details/lillys-oral-glp-1-orforglipron-demonstrated-statistically'} target="_blank">Lilly&apos;s Oral GLP-1 Orforglipron Shows Strong Weight Loss Results...   read more</a>
        </li>
      </div>
      <div className={styles.page_professional_card}>
        <h2 className={styles.page_professional_card_header}>GLP-1</h2>
        <p className={styles.paragraph}>GLP-1 (Glucagon-Like Peptide-1) is a hormone produced in the gut that helps regulate blood sugar levels. It stimulates the pancreas to release insulin when glucose levels are high and reduces the release of glucagon, which prevents the liver from making too much sugar. GLP-1 also slows down how quickly food leaves the stomach, which helps maintain steady blood sugar levels after meals. In people with type 2 diabetes, the natural GLP-1 response is often reduced or delayed. Because of its important role in glucose control, GLP-1 has become a key focus in developing modern treatments for diabetes.</p>
      </div>
      <div className={styles.page_professional_card}>
        <h2 className={styles.page_professional_card_header}>GLP-1 and Diabetes</h2>
        <p className={styles.paragraph}>The connection between GLP-1 and diabetes began in the 1980s, when scientists discovered that GLP-1 plays a key role in regulating blood sugar. Researchers found that GLP-1 stimulates insulin secretion only when glucose levels are high, making it a safer option for diabetes treatment. In people with type 2 diabetes, GLP-1 activity is often impaired, leading to poor blood sugar control. This led to the development of GLP-1 receptor agonists, which mimic the natural hormone and became available in the early 2000s. Since then, these medications have transformed diabetes care, offering not just better glucose control but also weight loss benefits.</p>
      </div>
      <div className={styles.page_professional_card}>
        <h2 className={styles.page_professional_card_header}>GLP-1 for weight loss</h2>
        <p className={styles.paragraph}>GLP-1 (Glucagon-Like Peptide-1) is a hormone that helps regulate appetite and food intake by signaling fullness to the brain. It slows down digestion, so you feel full longer after eating. GLP-1 receptor agonists, originally developed for diabetes, have shown significant effects on reducing body weight. These medications help people eat less without feeling deprived, making them effective tools for long-term weight management. As a result, GLP-1-based treatments like Wegovy and Mounjaro are now widely used to support healthy and sustained weight loss.</p>
      </div>
      <div className={styles.page_professional_card}>
        <h2 className={styles.page_professional_card_header}>Future of GLP-1</h2>
        <p>
          As research continues to evolve, the future of GLP-1 receptor agonists looks
          incredibly promising — not only for managing diabetes and obesity but for
          a wide range of metabolic and chronic conditions.
        </p>

        <h4 style={{ color: '#1e6091', marginTop: '15px' }}>🔬 Microdosing Strategies</h4>
        <p>
          Researchers are exploring <strong>microdosing</strong> GLP-1 drugs to achieve
          therapeutic benefits with fewer side effects. This could improve tolerability
          for patients who struggle with nausea or gastrointestinal symptoms, and may
          open the door to preventive, low-dose therapies for metabolic health.
        </p>

        <h4 style={{ color: '#1e6091', marginTop: '15px' }}>💊 Oral and Long-Acting Formulations</h4>
        <p>
          While many GLP-1 drugs are injectable, companies are developing
          <strong> oral versions</strong> and <strong>once-monthly injections</strong> to improve
          convenience and adherence. Rybelsus is already an oral GLP-1 option, and
          more are on the horizon.
        </p>

        <h4 style={{ color: '#1e6091', marginTop: '15px' }}>🧬 Combination Therapies</h4>
        <p>
          Next-generation drugs will likely combine GLP-1 with other hormones like
          <strong> GIP</strong> and <strong>glucagon</strong> to enhance metabolic effects. Some of these,
          like tirzepatide (Mounjaro), are already approved and showing even greater
          weight loss potential.
        </p>

        <h4 style={{ color: '#1e6091', marginTop: '15px' }}>🧠 Beyond Diabetes & Obesity</h4>
        <p>
          There is growing interest in the use of GLP-1 drugs for treating conditions
          like <strong>fatty liver disease (NAFLD/NASH)</strong>, <strong>addiction</strong>, and even
          <strong>neurodegenerative diseases</strong> like Alzheimers. The impact of GLP-1 on inflammation,
          appetite regulation, and insulin signaling may have wide-reaching implications.
        </p>

        <p style={{ fontSize: '0.9em', color: '#555', marginTop: '20px' }}>
          🚀 GLP-1 therapies are rapidly transforming from glucose-lowering agents
          into powerful tools for full-body metabolic health — and we are just getting started.
        </p>

      </div>
    </div>
  );
}
