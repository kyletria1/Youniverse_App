import styles from "./SpeechBubble.module.css";

export default function SpeechBubble() {

  return (
    <figure className={styles.speechBubble}>
      <blockquote>
        <p className={styles.motivationalmessage}>Motivational Message</p>
      </blockquote>
      <figcaption>Lumen</figcaption>
    </figure>
  );
}