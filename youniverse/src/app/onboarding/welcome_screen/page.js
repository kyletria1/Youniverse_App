"use client";
import { useState } from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css"
import Button from "../../../../components/Button.js";
import SignUpModal from "../../../../components/SignUpModal";
import ConfirmationModal from "../../../../components/ConfirmationModal";

export default function Welcome() {
  const router = useRouter();
  //[from code tutor (line 11)] welcome page is mounted and router is grabbed again and now points to /onboarding/welcome_screen
  const [modal, setModal] = useState(null);

  return (
    <main>
      <section className={styles.welcome}>
        <Image
          src="/background_images/WelcomeScreenBackground.svg"
          alt="Welcome Screen Background"
          width={393}
          height={852}
          priority
          className={styles.welcome__image}
        />
        <div className={`${styles.authentication__buttons} ${styles['authentication__buttons--stacked']}`}>
          <Button variant="welcome" onClick={() => setModal("signup")}>Sign Up</Button>
          <Button variant="welcome">Log In</Button>
        </div>
        {modal === "signup" && (
          <div className={styles.modal__overlay}>
            <SignUpModal
              onClose={() => setModal(null)}
              onSuccess={() => setModal("confirmation")}
            />
          </div>
        )}

        {modal === "confirmation" && (
          <div className={styles.modal__overlay}>
            <ConfirmationModal onClose={() => setModal(null)} />
          </div>
        )}
      </section>
    </main>
  );
} 