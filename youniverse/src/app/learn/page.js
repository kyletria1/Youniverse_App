"use client"
import styles from "./page.module.css"
import NavigationBar from "../../../components/NavigationBar";
import ArticleCard from "../../../components/ArticleCard";
import {useRouter} from "next/navigation";

export default function Learn() {
  const router = useRouter();
  return (
    <section className={`screen ${styles.learn__background}`}>
        <h1 className={styles.learn__title}>Article Library</h1>
        <div className={styles.learn__card}>
          <ArticleCard route="/learn/smart_goals">Achieve More with SMART Goals</ArticleCard>
        </div>
        <div className={styles.learn__card}>
          <ArticleCard route="/learn/habit_stacking">Build Momentum with Habit Stackingg</ArticleCard>
        </div>
        <div className={styles.learn__card}>
          <ArticleCard route="/learn/task_stacking">Stop Multitasking Chaos: Try Task Stacking</ArticleCard>
        </div>
        <div className={styles.learn__card}>
          <ArticleCard route="/learn/productivity_guilt">Break Free from Productivity Guilt</ArticleCard>
        </div>
      <div className={styles.learn__navigation}>
        <NavigationBar variant="LearnSelected"/>
      </div>
    </section>
  );
}