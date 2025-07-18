'use client';

import { useEffect, useState } from 'react';
import styles from './HeroSectionTitle.module.css';

const TYPING_INTERVAL = 100;
const PAUSE_DURATION = 1500;

const roles = [
  'Web',
  'Paper Plugin',
  "Desktop App",
  'Discord Bot'
];

const HeroSectionTitle = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typingTimeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
      );
    }, TYPING_INTERVAL);

    let pauseTimeout: NodeJS.Timeout | null = null;

    if (!isDeleting && displayText === currentRole) {
      pauseTimeout = setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => {
      clearTimeout(typingTimeout);
      if (pauseTimeout) clearTimeout(pauseTimeout);
    };
  }, [displayText, isDeleting, roleIndex]);

  return (
    <>
      <div className="flex font-bold text-3xl">
        <p className="text-purple">{displayText}</p>
        <p className={`${styles.cursor} text-purple`}>|</p>
        <p>Developer</p>
      </div>
      <p className="mt-10 text-secondary-text"><a href="https://www.azisaba.net">アジ鯖</a>というマインクラフトサーバーで統括開発者をしています</p>
    </>
  );
};

export default HeroSectionTitle;