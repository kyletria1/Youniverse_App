"use client";
import { useState, useEffect } from "react";
import styles from "./SpeechBubble.module.css";

export default function SpeechBubble() {
  const [message, setMessage] = useState("");

  useEffect(() => {
  fetch("/motivationalmessages.json")
    .then((response) => response.json())
    
    .then((data) => {
      const randomIndex = Math.floor(Math.random() * data.length);
      setMessage(data[randomIndex].quote);
    })

    .catch(() => {
      setMessage("Even if an error comes up, keep going as your dreams are worth it!");
    });
    }, 
    []);

  return (
    <figure className={styles.speechBubble}>
        <blockquote className={styles.motivationalmessage}>{message}</blockquote>
    </figure>
  );
}