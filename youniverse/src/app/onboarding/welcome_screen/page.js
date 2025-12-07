"use client";
import { useState } from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css"
import Button from "../../../../components/Button.js";
import SignUpModal from "../../../../components/SignUpModal";

export default function Welcome() {
  const router = useRouter();
  //[from code tutor] welcome page is mounted and router is grabbed again and now points to /onboarding/welcome_screen
  const [showModal, setShowModal] = useState(false);

  return (
    <main className={styles.welcome}>
      <div className={styles['welcome__frame']}>
        <Image
          src="/background_images/WelcomeScreenBackground.svg"
          alt="Welcome Background"
          width={393}
          height={852}
          priority
          className={styles.welcome__image}
        />
        <div className={`${styles.authentication__buttons} ${styles['authentication__buttons--stacked']}`}>
          <Button variant="welcome" onClick={() => setShowModal(true)}>Sign Up</Button>
          <Button variant="welcome">Log In</Button>
        </div>
          {showModal && (
            <div className={styles.modal__overlay}>
              <SignUpModal onClose={() => setShowModal(false)} />
            </div>
          )}
      </div>
    </main>
  );
}