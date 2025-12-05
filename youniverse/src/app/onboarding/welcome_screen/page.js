"use client";
import {useRouter} from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css"
import Button from "../../../../components/Button";

export default function Welcome() {
  const router = useRouter();
  //[from code tutor] welcome page is mounted and router is grabbed again and now points to /onboarding/welcome_screen

  return (
    <main className={`${styles.welcome} ${styles['welcome--fullscreen']}`}>
        <Image 
        src="/background_images/WelcomeScreenBackground.svg" 
        alt="Youniverse Welcome Screen Background Image" 
        width={393}
        height={852}
        priority
        className={`${styles.welcome__image} ${styles['welcome__image--cover']}`}>
        </Image>
        <div className={`${styles['authentication__buttons']} ${styles['authentication__buttons--stacked']}`}>
          <Button variant="welcome">Sign Up</Button>
          <Button variant="welcome">Log In</Button>
        </div>
    </main>
  );
}