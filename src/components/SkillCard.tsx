import React, { ReactNode } from 'react';

const SkillCard = (props: SkillCardProps) => {
  return (
    <div className="md:w-1/3 sm:w-2/3 p-4 w-full">
      <div className="bg-surface border-1 border-purple duration-300 cursor-pointer ease-in-out hover:bg-surface-hover hover:scale-101 min-h-[240px] p-5 rounded-lg transition-transform w-full">
        <div className="flex items-center mb-3">
          <div className="max-h-10 max-w-10">
            <div className="bg-gray-200 p-2 rounded-2xl select-none">
              {props.icon}
            </div>
          </div>
          <h2 className="font-medium ml-2 text-primary text-lg">{props.title}</h2>
        </div>
        <div className="text-gray-600">
          {props.children}
        </div>
      </div>
    </div>
  );
};

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  children?: React.ReactNode;
}

export default SkillCard;