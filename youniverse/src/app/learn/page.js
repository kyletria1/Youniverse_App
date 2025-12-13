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
          <ArticleCard route="/learn/smart_goals">Smart Goals</ArticleCard>
        </div>
        <div className={styles.learn__card}>
          <ArticleCard route="/learn/habit_stacking">Habit Stacking</ArticleCard>
        </div>
        <div className={styles.learn__card}>
          <ArticleCard route="/learn/task_stacking">Task Stacking</ArticleCard>
        </div>
        <div className={styles.learn__card}>
          <ArticleCard route="/learn/productivity_guilt">Productivity Guilt</ArticleCard>
        </div>
      <div className={styles.learn__navigation}>
        <NavigationBar variant="LearnSelected"/>
      </div>
    </section>
  );
}