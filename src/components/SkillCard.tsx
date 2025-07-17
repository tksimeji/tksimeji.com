import React, { ReactNode } from 'react';

const SkillCard = (props: SkillCardProps) => {
  return (
    <div className="md:w-1/3 p-4">
      <div className="bg-gray-200 border-1 border-purple min-h-[240px] p-6 rounded-lg">
        <div className="flex items-center mb-3">
          <div className="max-h-10 max-w-10">
            {props.icon}
          </div>
          <h2 className="font-medium ml-2 text-gray-800 text-lg">{props.title}</h2>
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