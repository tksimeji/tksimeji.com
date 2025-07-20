import React from 'react';
import { Skill } from '@/skills';
import Image from 'next/image';
import { FrequentlyUsedTag, LearningTag, UsedInSiteTag } from '@/components/skill/SkillTag';

const SkillCard = (props: SkillCardProps) => {
  const renderTags = () => {
    if (!props.skill.tags) return null;

    return props.skill.tags.map((tag, index) => {
      switch (tag) {
        case 'FrequentlyUsed':
          return <FrequentlyUsedTag key={index} />;
        case 'Learning':
          return <LearningTag key={index} />;
        case 'UsedInSite':
          return <UsedInSiteTag key={index} />;
        default:
          return null;
      }
    });
  };

  return (
    <div className="py-4 w-full">
      <div className="bg-surface duration-300 hover:bg-surface-hover min-h-[260px] p-5 rounded-lg transform w-full">
        <div className="flex items-center mb-3">
          <div className="max-h-10 max-w-10">
            <div className="bg-gray-200 p-2 rounded-2xl select-none">
              <Image alt={props.skill.title} height={16} src={props.skill.icon} width={16} />
            </div>
          </div>
          <h2 className="font-medium ml-2 text-primary text-lg">{props.skill.title}</h2>
        </div>
        <div>
          {renderTags()}
        </div>
        <div className="text-secondary-text text-sm">
          {props.skill.description.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

interface SkillCardProps {
  skill: Skill;
}

export default SkillCard;