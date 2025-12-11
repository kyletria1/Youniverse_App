"use client";
import styles from "./page.module.css";
import NavigationBar from "../../../components/NavigationBar";
import Button from "../../../components/Button";
import { useRouter } from "next/navigation";

export default function AboutUs() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    router.push("/onboarding/welcome_screen");
  };

  return (
    <section className={`screen ${styles.aboutUs__background}`}>
      <h1 className={styles.aboutUs__heading}>About Youniverse</h1>
      <p className={styles.aboutUs__paragraph}>
        Youniverse started from a place of failure. A place where a lack of
        structure met ambitious dreams. There was only one goal when making
        Youniverse: make an app that you would use that would give you the
        structure to achieve your dreams. This is how Youniverse was created,
        originally just a productivity and task tracking app it became something
        more. This project became a world where I could design whatever I wanted
        and not be limited by client restrictions. In a way this simply just
        became something to help me heal from failure and learn to be resilient.
        One step, one task, one dream at a time.
      </p>

      <div className={styles.button__logOut}>
        <Button variant="interface" onClick={handleLogout}>
          Log Out
        </Button>
      </div>

      <div className={styles.aboutUs__navigation}>
        <NavigationBar variant="AboutUsSelected" />
      </div>
    </section>
  );
}