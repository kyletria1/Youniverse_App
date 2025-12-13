"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css"
import Button from "../../../components/Button.js";
import SignUpModal from "../../../components/SignUpModal";
import LoginModal from "../../../components/LoginModal";
import ConfirmationModal from "../../../components/ConfirmationModal";

export default function Welcome() {
  const router = useRouter();
  //[from code tutor (line 11)] welcome page is mounted and router is grabbed again and now points to /onboarding/welcome_screen
  const [modal, setModal] = useState(null);

  const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  age: "",
  email: "",
  password: "",
  confirmPassword: "",
  });

  return (
      <section className="screen">
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
          <Button variant="welcome" onClick={() => setModal("login")}>Log In</Button>
        </div>
        {modal === "signup" && (
          <section className={styles.modal__overlay}>
            <div>
              <SignUpModal
              onClose={() => setModal(null)}
              onSuccess={() => setModal("confirmation")}
              />
            </div>
          </section>
        )}

        {modal === "login" && (
          <section className={styles.modal__overlay}>
            <div>
              <LoginModal
              onClose={() => setModal(null)}
              onSuccess={() => router.push("/planet")}
              />
            </div>
          </section>
        )}

        {modal === "confirmation" && (
          <section className={styles.modal__overlay}>
            <ConfirmationModal 
            onClose={() => setModal(null)} 
            onNo={() => setModal("signup")}
            onYes={() => router.push("/planet")}
            />
          </section>
        )}
      </section>
  );
} 