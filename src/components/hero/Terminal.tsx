'use client';

import React, { useState } from 'react';
import TypewriterText from '@/components/TypewriterText';
import { sourceCodePro } from '@/app/fonts';
import Image from 'next/image';

const fetchCatImage = async (): Promise<SearchCatImage> => {
  const res = await fetch('https://api.thecatapi.com/v1/images/search');
  const result = await res.json();
  return result[0];
};

interface SearchCatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

const Terminal = () => {
  const [catImageUrl, setCatImageUrl] = useState('');

  const handleCommandTypingComplete = async () => {
    const catImage = await fetchCatImage();
    setCatImageUrl(catImage.url)
  };

  return (
    <>
      <div className="bg-[#303030] border-2 border-[#4a4a4a] flex h-[28px] items-center p-2 relative rounded-t-xl">
        <div className="flex gap-2">
          <div className="bg-[#ff554f] h-[16px] rounded-full w-[16px]" />
          <div className="bg-[#ffbe2f] h-[16px] rounded-full w-[16px]" />
          <div className="bg-[#28c941] h-[16px] rounded-full w-[16px]" />
        </div>
        <div className="absolute font-medium left-1/2 text-amber-50 transform -translate-x-1/2">
          Nyansole
        </div>
      </div>
      <div className={`bg-black h-[360px] p-4 rounded-b-xl ${sourceCodePro.className} text-white`}>
        <TypewriterText content="cat /etc/os-release" prefix="$ " callback={handleCommandTypingComplete} />
        <div className="h-[280px] my-4 relative w-full">
          {catImageUrl && (<Image className="object-contain" alt="Cat" fill src={catImageUrl} />)}
        </div>
      </div>
      <p className="text-secondary-text">Powered by <a href="https://thecatapi.com">The Cat API</a></p>
    </>
  );
}

export default Terminal;