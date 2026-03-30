"use client";

import { useState, useEffect } from "react";

export default function TypeWriter({ words }: { words: string[] }) {
  const [currentWord, setCurrentWord] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const pause = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 1800);
      return () => clearTimeout(pause);
    }

    const word = words[currentWord];
    const speed = isDeleting ? 50 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === word) {
        setIsPaused(true);
        return;
      }
      if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWord((prev) => (prev + 1) % words.length);
        return;
      }
      setCurrentText((prev) =>
        isDeleting ? prev.slice(0, -1) : word.slice(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, isPaused, currentWord, words]);

  return (
    <span>
      {currentText}
      <span className="cursor-blink">|</span>
    </span>
  );
}
