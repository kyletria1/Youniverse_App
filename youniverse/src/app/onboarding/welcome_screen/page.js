"use client";
import {useRouter} from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css"
import Button from "button.js";

export default function Welcome() {
  const router = useRouter();
  //welcome page is mounted and router is grabbed again and now points to /onboarding/welcome_screen

  return (
    <main className={`${styles.welcome} ${styles['welcome--fullscreen']}`}>
        <Image src="youniverse\public\background_images\WelcomeScreenBackground.svg" alt="Youniverse Welcome Screen Background Image" className={`${styles.welcome__image} ${styles['welcome__image--cover']}`}></Image>
        <Button/>
        <Button/>
    </main>
  );
}