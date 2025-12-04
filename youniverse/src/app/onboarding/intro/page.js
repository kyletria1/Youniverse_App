'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function IntroPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/onboarding/welcome_screen'); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className={styles.container}>
      <image src="./public/background_images/StarUpSpace Intro Background.svg"></image>
    </div>
  );
}