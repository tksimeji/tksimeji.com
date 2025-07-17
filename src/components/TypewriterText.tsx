'use client';

import React, { useEffect, useRef } from 'react';

const TypewriterText = ({ content, prefix = '', period = 100, callback }: TypewriterTextProps) => {
  const fullText = prefix + content;
  const [displayText, setDisplayText] = React.useState(prefix);
  const callbackRef = useRef(callback);

  useEffect(() => {
    let currentIndex = prefix.length;

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        if (callbackRef.current) callbackRef.current();
      }
    }, period || 100);
    
    return () => clearInterval(typingInterval);
  }, [fullText, prefix, period]);

  return <p>{displayText}</p>
};

interface TypewriterTextProps {
  content: string;
  prefix?: string;
  period?: number;
  callback?: () => void;
}

export default TypewriterText;