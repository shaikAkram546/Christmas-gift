import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

const TypewriterText = ({
  text,
  delay = 0,
  speed = 50,
  className = "",
  onComplete,
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsTyping(true);
      let index = 0;

      const typeInterval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
          if (onComplete) {
            setTimeout(onComplete, 500);
          }
        }
      }, speed);

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, delay, speed, onComplete]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {displayText}
      {isTyping && (
        <span
          className={`inline-block w-0.5 h-[1em] ml-1 bg-christmas-gold align-middle transition-opacity duration-100 ${
            showCursor ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </span>
  );
};

export default TypewriterText;
