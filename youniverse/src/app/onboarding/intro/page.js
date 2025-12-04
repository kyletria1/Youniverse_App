"use client";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";

export default function Intro() {
  const router = useRouter();
  //[from code tutor] gives access to the router object

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/onboarding/welcome_screen"); 
    }, 5000);
    //[from code tutor] schedules function to route to the welcome screen after a 5 second delay

    return () => clearTimeout(timer);
  }, [router]);
  //[from code tutor] function to prevent errors if component unmounts (gets removed from DOM tree) before 5 seconds are up

  return (
    <main className={`${styles.intro} ${styles['intro--fullscreen']}`}>
      <Image 
      src="youniverse\public\background_images\StarUpSpaceIntroBackground.svg" 
      alt="StarUpSpace Company Wordmark" 
      width={393}
      height={852}
      className={`${styles.intro__image} ${styles['intro__image--cover']}`}>
      </Image>
    </main>
  );
}