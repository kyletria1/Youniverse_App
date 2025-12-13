"use client"
import styles from "../page.module.css"
import NavigationBar from "../../../components/NavigationBar";

export default function Learn() {
  return (
    <section className={`screen ${styles.learn__background}`}>
      <h1 className={styles.learn__heading}>Stop Multitasking Chaos: Try Task Stacking</h1>
      <h2 className={styles.learn__intro}>
        Jumping between emails, reports, and calls drains focus. Task Stacking—also called Task Batching—helps you reclaim deep work.
      </h2>

      <h3 className={styles.learn__topic}>What Is Task Stacking?</h3>
      <p className={styles.learn__paragraph}>
        It’s the practice of grouping similar tasks and tackling them in one block of time. Instead of switching gears constantly, you stay in one “mode” until the work is done.
      </p>

      <h3 className={styles.learn__topic}>Why It Works</h3>
      <p className={styles.learn__paragraph}>
        Every time you switch tasks, your brain has to shut down one mental program and boot up another. That lag adds up. Stacking lets you keep one program open, finish everything in that category, then move on.
      </p>

      <h3 className={styles.learn__topic}>How to Start</h3>
      <ul className={styles.learn__paragraph}>
        <li><strong>Identify categories:</strong> Communication, Creation, Admin, etc.</li>
        <li><strong>Block time:</strong> Schedule stacks like “Communication Hour” instead of individual emails.</li>
        <li><strong>Stay disciplined:</strong> During a stack, only do that type of work. Capture other ideas for later.</li>
      </ul>

      <p className={styles.learn__paragraph}>
        Task stacking doesn’t add more work—it makes your existing work smoother, faster, and less stressful.
      </p>
      <div className={styles.learn__navigation}>
        <NavigationBar variant="LearnSelected"/>
      </div>
    </section>
  );
}