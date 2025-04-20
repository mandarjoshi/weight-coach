
import styles from '../mystyles.module.css';

export default function Home() {
  return (
    <div className={styles.page_professional_page_layout}>
      <div className={styles.page_professional_page_header}>One-Click Bliss</div>
      <div className={styles.page_professional_card}>
        <h2 className={styles.page_professional_card_header}>Effortless Shopping, Every Time</h2>
        <p className={styles.paragraph}>We make shopping easy by curating only the best and most trusted brands on our Amazon store, so you don’t have to waste time searching. Each product is carefully selected for quality, performance, and customer satisfaction. Our collections are organized to help you quickly find exactly what you need. We regularly update our store with trending and top-rated items to keep your choices fresh and reliable. With fast shipping, easy returns, and products you can trust, we make your shopping experience smooth and stress-free.</p>
        <div className={styles.button_div}>
          <button className={styles.button_get_started}>
            Get Started
          </button>
        </div>        
      </div>
    </div>
  );
}
