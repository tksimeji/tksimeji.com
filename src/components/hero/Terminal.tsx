'use client';

import React, { JSX, useState } from 'react';
import TypewriterText from '@/components/TypewriterText';
import { sourceCodePro } from '@/app/fonts';

const out: JSX.Element[] = [
];


const Terminal = () => {
  const [lines, setLines] = useState<JSX.Element[]>([]);

  const handleCommandTypingComplete = () => {
    let currentIndex = 0;

    const appendInterval = setInterval(() => {
      if (currentIndex < out.length) {
        const uniqueKey = `${currentIndex}-${Date.now()}`;
        const element = React.cloneElement(out[currentIndex], {
          key: uniqueKey
        });

        setLines((prev) => [...prev, element]);

        currentIndex++;
      } else {
        clearInterval(appendInterval);
      }
    }, 100);
  }

  return (
    <>
      <div className="bg-[#303030] border-2 border-[#4a4a4a] flex h-[28px] items-center p-2 relative rounded-t-xl">
        <div className="flex gap-2">
          <div className="bg-[#ff554f] h-[16px] rounded-full w-[16px]" />
          <div className="bg-[#ffbe2f] h-[16px] rounded-full w-[16px]" />
          <div className="bg-[#28c941] h-[16px] rounded-full w-[16px]" />
        </div>
        <div className="absolute font-medium left-1/2 text-amber-50 transform -translate-x-1/2">
          tksimeji@vmxxx
        </div>
      </div>
      <div className={`bg-black h-[360px] p-4 rounded-b-xl ${sourceCodePro.className} text-white`}>
        <TypewriterText content="cat /etc/os-release" prefix="[tksimeji@saba ~]$ " callback={handleCommandTypingComplete} />
        {lines}
      </div>
    </>
  );
}

export default Terminal;