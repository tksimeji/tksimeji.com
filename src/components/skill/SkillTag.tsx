import React from 'react';
import { GraduationCap, Heart, PcCase } from 'lucide-react';

export const SkillTag = (props: SkillTagProps) => {
  return (
    <div className="bg-purple cursor-pointer duration-300 hover:bg-dark-purple inline-flex items-center mr-2 my-1 px-4 py-1 rounded-4xl select-none text-[12px] text-white transition">
      {props.icon}
      <p className="ml-1">{props.title}</p>
    </div>
  );
};

interface SkillTagProps {
  icon: React.ReactNode;
  title: string;
}

export const FrequentlyUsedTag = () => {
  return (
    <SkillTag icon={<Heart size={16} />} title="よく使う" />
  );
};

export const LearningTag = () => {
  return (
    <SkillTag icon={<GraduationCap size={16} />} title="学習中" />
  );
};

export const UsedInSiteTag = () => {
  return (
    <SkillTag icon={<PcCase size={16} />} title="このサイトで使用" />
  );
};