"use client";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";

export default function Intro() {
  const router = useRouter();
  //[from code tutor (lines 7 and 8)]: gives access to the router object

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/onboarding/welcome_screen"); 
    }, 5000);
    //[from code tutor (lines 11 to 14)]: schedules function to route to the welcome screen after a 5 second delay

    return () => clearTimeout(timer);
  }, [router]);
  //[from code tutor (lines 17 and 18)]: function to prevent errors if component unmounts (gets removed from DOM tree) before 5 seconds are up

  return (
    <main>
      <Image 
      src="/background_images/StarUpSpaceIntroBackground.svg" 
      alt="StarUpSpace Company Wordmark Introduction Screen" 
      width={393}
      height={852}
      priority
      className={`${styles.intro__image}`}>
      </Image>
    </main>
  );
}