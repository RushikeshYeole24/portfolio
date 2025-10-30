"use client";

import { useState, useEffect } from "react";

interface FlipWordsProps {
  words: string[];
  duration?: number;
}

export default function FlipWords({ words, duration = 3000 }: FlipWordsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, 300); // Half of the animation duration
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <span className="flip-words-container">
      <span
        className={`flip-words ${isAnimating ? "flip-out" : "flip-in"}`}
        key={currentIndex} // Force re-render for animation
      >
        {words[currentIndex]}
      </span>
      <span className="flip-words-cursor"></span>
    </span>
  );
}
