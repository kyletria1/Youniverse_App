"use client";
import { useState } from "react";
import styles from "../page.module.css";
import NavigationBar from "../../../../components/NavigationBar";
import SquareButton from "../../../../components/SquareButton";
import Button from "../../../../components/Button";
import RewardModal from "../../../../components/RewardModal"; 
import { useRouter } from "next/navigation";

export default function SmartGoalsArticle() {
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
        Achieve More with SMART Goals
        </h1>
        <h2 className={styles.learn__intro}>
        Vague ambitions often fade. SMART Goals—Specific, Measurable, Achievable, Relevant, and Time-bound—turn intentions into action.
        </h2>

        <h3 className={styles.learn__topic}>What Are SMART Goals?</h3>
        <p className={styles.learn__paragraph}>
        SMART is a framework for setting goals that are clear and trackable. Instead of “get healthier,” you define “exercise three times a week for 30 minutes.”
        </p>

        <h3 className={styles.learn__topic}>Why It Works</h3>
        <p className={styles.learn__paragraph}>
        SMART goals eliminate ambiguity. They give you a roadmap, milestones to celebrate, and deadlines to keep you accountable.
        </p>

        <h3 className={styles.learn__topic}>How to Start</h3>
        <ul className={styles.learn__paragraph}>
        <li><strong>Specific:</strong> Define exactly what you want to achieve.</li>
        <li><strong>Measurable:</strong> Decide how you’ll track progress.</li>
        <li><strong>Achievable:</strong> Ensure the goal is realistic.</li>
        <li><strong>Relevant:</strong> Align it with your bigger priorities.</li>
        <li><strong>Time-bound:</strong> Set a clear deadline.</li>
        </ul>

        <p className={styles.learn__paragraph}>
        SMART goals transform wishful thinking into concrete progress you can measure and celebrate.
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
          <RewardModal iconSrc="/furniture_items/article/TeddyBear.svg" alt="Teddy Bear"/>
        </div>
      )}
    </section>
  );
}