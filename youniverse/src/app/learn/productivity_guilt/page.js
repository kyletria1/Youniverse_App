"use client";
import { useState } from "react";
import styles from "../page.module.css";
import NavigationBar from "../../../../components/NavigationBar";
import SquareButton from "../../../../components/SquareButton";
import Button from "../../../../components/Button";
import RewardModal from "../../../../components/RewardModal";  
import { useRouter } from "next/navigation";

export default function ProductivityGuiltArticle() {
  const router = useRouter();
  const [showReward, setShowReward] = useState(false); 

  return (
    <section className={`screen ${styles.learn__background}`}>
      <div className={styles.learn__back}>
        <SquareButton
          variant="active"
          iconSrc="/icons/button_icons/BackIcon.svg"
          alt="Back Button"
          onClick={() => router.push("/learn")}
        />
      </div>

            <h1 className={styles.learn__heading}>
        Break Free from Productivity Guilt
        </h1>
        <h2 className={styles.learn__intro}>
        Feeling guilty for not “doing enough” drains energy. Understanding productivity guilt helps you reclaim balance and self-compassion.
        </h2>

        <h3 className={styles.learn__topic}>What Is Productivity Guilt?</h3>
        <p className={styles.learn__paragraph}>
        It’s the nagging sense that you should always be working, even when you’ve earned rest. This mindset undermines both focus and well-being.
        </p>

        <h3 className={styles.learn__topic}>Why It Hurts</h3>
        <p className={styles.learn__paragraph}>
        Guilt doesn’t make you more productive—it creates stress and burnout. True progress comes from sustainable effort, not constant pressure.
        </p>

        <h3 className={styles.learn__topic}>How to Start Letting Go</h3>
        <ul className={styles.learn__paragraph}>
        <li><strong>Redefine success:</strong> Value rest and recovery as part of achievement.</li>
        <li><strong>Set boundaries:</strong> Separate work time from personal time.</li>
        <li><strong>Practice reflection:</strong> Celebrate what you did accomplish instead of fixating on what you didn’t.</li>
        </ul>

        <p className={styles.learn__paragraph}>
        Escaping productivity guilt allows you to work smarter, rest fully, and live with more balance.
        </p>

      <div className={styles.learn__done}>
        <Button variant="interface" onClick={() => setShowReward(true)}>
          Done
        </Button>
      </div>

      <div className={styles.learn__navigation}>
        <NavigationBar variant="LearnSelected" />
      </div>

      {showReward && (
        <div className={styles.learn__modal}>
          <RewardModal iconSrc="/furniture_items/article/Telescope.svg" alt="Telescope"/>
        </div>
      )}
    </section>
  );
}