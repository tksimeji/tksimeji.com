'use client';

import Image from 'next/image';
import React, { useState } from 'react';

export const HeaderTitle: React.FC = () => {
  const [spinning, setSpinning] = useState(false);

  const handleClick = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 600);
  };

  const handleRightClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    handleClick();
  };

  return (
    <div
      className="duration-300 ease-in-out flex gap-4 hover:bg-surface-hover items-center pointer
       px-4 py-2 rounded-2xl select-none transition"
      onClick={ handleClick }
      onContextMenu={ handleRightClick }
    >
      <Image
        className={ `aspect-square max-w-16 rounded-full size-10 ${ spinning ? 'animate-spin-once' : '' }` }
        src="/icon.png"
        alt="Icon"
        height={ 40 }
        width={ 40 }
      />
      <div>
        <p className="font-bold text-[16px]">つきしめじ</p>
        <p className="mb-0 text-[10px] text-secondary-text">@tksimeji</p>
      </div>
    </div>
  );
};