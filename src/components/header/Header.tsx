'use client';

import { HeaderButton } from '@/components/header/HeaderButton';
import { HeaderTitle } from '@/components/header/HeaderTitle';
import { ThemeButton } from '@/components/header/ThemeButton';
import { SiGithub, SiTwitter } from '@icons-pack/react-simple-icons';
import React from 'react';

export const Header: React.FC = () => {
  const handleSocialLinkClick = (event: React.MouseEvent<HTMLDivElement>, url: string) => {
    if (event.ctrlKey) {
      window.open(url, '_blank');
    } else {
      window.location.href = url;
    }
  };

  return (
    <header>
      <div className="container flex gap-4 flex-col items-center md:flex-row md:max-w-5xl mx-auto p-5">
        <HeaderTitle/>
        <nav className="flex gap-4 items-center md:ml-auto text-base">
          <HeaderButton
            icon={ SiTwitter }
            tooltip="Twitter"
            onClick={ event => handleSocialLinkClick(event, 'https://x.com/tksimeji') }
          />

          <HeaderButton
            icon={ SiGithub }
            tooltip="GitHub"
            onClick={ event => handleSocialLinkClick(event, 'https://github.com/tksimeji') }
          />
          <ThemeButton/>
        </nav>
      </div>
    </header>
  );
};