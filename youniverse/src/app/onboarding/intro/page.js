"use client";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";

export default function Intro() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/onboarding/welcome_screen"); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className={`${styles.intro} ${styles['intro--fullscreen']}`}>
      <Image src="youniverse\public\background_images\StarUpSpaceIntroBackground.svg" alt="StarUpSpace Company Wordmark" className={`${styles.intro__image} ${styles['intro__image--cover']}`}
></Image>
    </main>
  );
}