'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './HeaderTitle.module.css';

const HeaderTitle = () => {
  const [spinning, setSpinning] = useState(false);

  const handleClick = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 600)
  };

  return (
    <div className="cursor-pointer duration-300 ease-in-out flex hover:bg-surface-hover items-center px-4 py-2 rounded-2xl select-none transition" onClick={handleClick}>
      <Image className={`max-w-16 mr-4 rounded-full size-10 ${spinning ? styles.animateSpinOnce : ""}`} alt="Icon" height={40} src="/icon.png" width={40} />
      <div>
        <p className="font-bold text-[16px]">つきしめじ</p>
        <p className="mb-0 text-[10px] text-secondary-text">@tksimeji</p>
      </div>
    </div>
  );
};

export default HeaderTitle;