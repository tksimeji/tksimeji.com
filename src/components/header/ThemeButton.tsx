'use client';

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';

const themeOrder = ['system', 'light', 'dark'];

export const ThemeButton: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const getNextTheme = () => {
    const current = theme ?? 'system';
    const currentIndex = themeOrder.indexOf(current);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    return themeOrder[nextIndex];
  };

  const handleClick = () => {
    const nextTheme = getNextTheme();
    setTheme(nextTheme);
  };

  const renderIcon = () => {
    if (theme === 'system') return <Monitor className="size-4" />;
    if (theme === 'light') return <Sun className="size-4" />;
    return <Moon className="size-4" />;
  };

  return (
    <button
      className="bg-primary-purple cursor-pointer duration-300
       hover:bg-dark-purple select-none text-gray-100 px-4 py-2 rounded-4xl"
      onClick={handleClick}
    >
      <div className="flex gap-2 items-center mr-4">
        {renderIcon()}
        <p>Theme</p>
      </div>
    </button>
  );
};