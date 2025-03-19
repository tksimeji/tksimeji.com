import { useState, useEffect } from 'react';

const TypingEffect = ({ text, prefixText = '', period = 100, onComplete }: TypingEffectProps) => {
  const fullText = prefixText + text;
  const [displayText, setDisplayText] = useState<string>(prefixText);

  useEffect(() => {
    let currentIndex = prefixText.length;

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        if (onComplete) onComplete();
      }
    }, period);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return <p>{displayText}</p>;
};

interface TypingEffectProps {
  text: string;
  prefixText?: string;
  period?: number;
  onComplete?: () => void;
}

export default TypingEffect;