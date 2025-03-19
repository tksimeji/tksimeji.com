import React, { JSX, useState } from "react";
import TypingEffect from "./TypingEffect";
import { useTheme } from "../contexts/ThemeContext";

const Terminal = ({ command, outputs }: TerminalProps) => {
  const { theme } = useTheme();
  const [lines, setLines] = useState<JSX.Element[]>([]);

  const handleTypingComplete = () => {
    if (!outputs) {
      return;
    }

    let currentIndex = 0;
    
    const appendInterval = setInterval(() => {
      if (currentIndex < outputs.length) {
        const uniqueKey = `${currentIndex}-${Date.now()}`;
        const element = React.cloneElement(outputs[currentIndex], {
          key: uniqueKey,
        });
        setLines((prev) => [...prev, element]);
        currentIndex++;
      } else {
        clearInterval(appendInterval);
      }
    }, 100);
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-950'} h-[360px] font-source-code p-4 rounded-xl text-white`}>
      <TypingEffect text={command} prefixText="[tksimeji@saba ~]$ " onComplete={handleTypingComplete} />
      {lines}
    </div>
  );
};

interface TerminalProps {
  command: string;
  outputs?: JSX.Element[];
}

export default Terminal;