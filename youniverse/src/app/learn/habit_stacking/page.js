"use client";
import { useState } from "react";
import styles from "../page.module.css";
import NavigationBar from "../../../../components/NavigationBar";
import SquareButton from "../../../../components/SquareButton";
import Button from "../../../../components/Button";
import RewardModal from "../../../../components/RewardModal"; 
import { useRouter } from "next/navigation";

export default function HabitStackingArticle() {
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
        Build Momentum with Habit Stacking
      </h1>
      <h2 className={styles.learn__intro}>
        Big changes feel overwhelming. Habit Stacking makes growth easy by attaching new habits to ones you already do.
      </h2>

      <h3 className={styles.learn__topic}>What Is Habit Stacking?</h3>
      <p className={styles.learn__paragraph}>
        It’s the practice of linking a new behavior to an existing routine. For example, “After I brush my teeth, I’ll meditate for two minutes.”
      </p>

      <h3 className={styles.learn__topic}>Why It Works</h3>
      <p className={styles.learn__paragraph}>
        Your brain loves patterns. By piggybacking on habits you already have, new actions become automatic faster.
      </p>

      <h3 className={styles.learn__topic}>How to Start</h3>
      <ul className={styles.learn__paragraph}>
        <li><strong>Identify anchor habits:</strong> Daily routines like coffee, commuting, or bedtime.</li>
        <li><strong>Attach small actions:</strong> Add one simple step after the anchor.</li>
        <li><strong>Repeat consistently:</strong> Let the pairing strengthen until it feels natural.</li>
      </ul>

      <p className={styles.learn__paragraph}>
        Habit stacking helps you grow steadily without relying on willpower alone.
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
          <RewardModal iconSrc="/furniture_items/article/Lamp.svg" alt="Lamp"/>
        </div>
      )}
    </section>
  );
}