"use client";
import { useState, useEffect } from "react";
import styles from "./ChangingWord.module.css"; // Import CSS module

const words = [
  "Menswear",
  "Womenswear",
  "Nightwear",
  "Activewear",
  "Casualwear",
];

export default function ChangingWord() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 40;
  const deleteSpeed = 40;
  const pauseTime = 100;

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting && displayedText.length < currentWord.length) {
      setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText.length > 0) {
      setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length - 1));
      }, deleteSpeed);
    } else if (!isDeleting && displayedText.length === currentWord.length) {
      setTimeout(() => setIsDeleting(true), pauseTime);
    } else {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }
  }, [displayedText, isDeleting, wordIndex]);

  return (
    <div className={styles.container}>
      Shop <span className={styles.changingText}>{displayedText}</span>
      <span className={styles.cursor}>|</span> now!
    </div>
  );
}
