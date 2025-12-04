"use client";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
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
    <main>
      <image src="youniverse\public\background_images\StarUpSpaceIntroBackground.svg" alt="StarUpSpace Company Wordmark" className="screen__image--company"></image>
    </main>
  );
}