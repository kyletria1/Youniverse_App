'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function IntroPage() {
  const router = useRouter();

  useEffect(() => {
    // Wait 3 seconds, then go to the Welcome Screen
    const timer = setTimeout(() => {
      router.push('/onboarding/welcome_screen'); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className={styles.container}>
      {/* Visuals based on image_92e281.png */}
      <div className={styles.logoArea}>
        <span className={styles.planetIcon}>🪐
</span> 
        <h1 className={styles.title}>StarUpSpace<br/>Presents</h1>
      </div>

      <div className={styles.decorations}>
        <span className={styles.moon}>🌙
</span>
        <span className={styles.heart}>♡</span>
      </div>
    </div>
  );
}