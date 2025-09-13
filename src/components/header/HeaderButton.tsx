'use client';

import React, { useState } from 'react';

export interface HeaderButtonProps {
  icon: React.ElementType<{ className?: string; title?: string; size?: number }>;
  tooltip?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const HeaderButton: React.FC<HeaderButtonProps> = ({ icon: Icon, tooltip, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative select-none"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon
        className={`duration-150 hover:text-primary-dark-purple text-primary-purple transition-colors ${onClick ? 'cursor-pointer' : ''}`}
        title=""
        size={26}
      />
      {isHovered && (
        <div
          className="absolute bg-primary-purple left-1/2 mt-4 px-3 py-2 rounded shadow text-white text-xs top-full transform w-max z-20 -translate-x-1/2"
        >
          <div
            className="absolute bg-primary-purple h-3 left-1/2 rotate-45 rounded-sm top-[-6px] transform w-3 z-10 -translate-x-1/2"
          />
          <p>{tooltip}</p>
        </div>
      )}
    </div>
  );
};