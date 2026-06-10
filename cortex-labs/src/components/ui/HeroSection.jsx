import styles from '../../styles/HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          Innovating the Future at <span className={styles.highlight}>Cortex Labs</span>
        </h1>
        <p className={styles.subtitle}>
          We are a dynamic team crafting beautiful Web Apps, Mobile Apps, and Software Solutions. 
          Building the foundation for tomorrow's leading software company.
        </p>
        <div className={styles.ctaGroup}>
          <a href="#projects" className={styles.primaryBtn}>Explore Projects</a>
          <a href="#team" className={styles.secondaryBtn}>Meet the Team</a>
        </div>
      </div>
      <div className={styles.heroVisual}>
        {/* We can place an abstract graphic or a glowing orb here */}
        <div className={styles.glowOrb}></div>
      </div>
    </section>
  );
}
