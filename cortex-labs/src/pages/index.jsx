import Head from 'next/head';
import styles from '../styles/Home.module.css';
import HeroSection from '../components/ui/HeroSection';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cortex Labs</title>
        <meta name="description" content="Cortex Labs Team Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
      </main>
    </div>
  );
}
