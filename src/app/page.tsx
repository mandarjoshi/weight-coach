
import styles from './mystyles.module.css';

export default function Home() {
  return (
    <div className={styles.page_professional_page_layout}>
      <div className={styles.page_professional_page_header}>Welcome to Your GLP-1 Journey Hub</div>
      <div className={styles.page_professional_card}>
        <p className={styles.paragraph}>This is more than just a website—it&apos;s a supportive space built for individuals exploring or using <b>GLP-1</b> medications. Whether you&apos;re just getting started or already on your journey, you&apos;re not alone here.</p>
        <p className={styles.paragraph}>Connect with others who share your experiences. Our <b>Community</b> section is a place to ask questions, share answers, and offer support. You can browse real conversations, leave comments, and like posts that resonate with you. It&apos;s an open, respectful environment where members uplift and inform one another.</p>
        <p className={styles.paragraph}>Alongside community wisdom, we offer <b>trusted information</b> about GLP-1 drugs from medically reviewed, reliable sources. Stay up to date with the latest research, safety guidelines, and tips—all in one place.</p>
        <p className={styles.paragraph}>Need expert advice? We&apos;ve made it simple to connect with <b>healthcare professionals</b> who specialize in GLP-1 treatments. From virtual consultations to personalized guidance, help is just a few clicks away.</p>
        <p className={styles.paragraph}>You also have your own private space on the site to <b>manage your journey</b>. Track your goals, record progress, and log symptoms or side effects. Your dashboard is a personal health companion, helping you stay informed, organized, and motivated.</p>
        <p className={styles.paragraph}>Our platform combines <b>community connection, expert support, and personal tools</b> to empower you every step of the way. We believe in real talk, real support, and real results—without judgment.</p>
        <p className={styles.paragraph}>Join a community that&apos;s here to listen, support, and grow with you. <b>Your GLP-1 journey starts here.</b></p>
      </div>
    </div>
  );
}
