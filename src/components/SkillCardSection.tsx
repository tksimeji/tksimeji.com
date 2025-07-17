import React from 'react';
import Section from '@/components/Section';

const SkillCardSection = (props: SkillCardSectionProps) => {
  return (
    <Section>
      <div className="container justify-center mx-autp px-5 py-24">
        <div className="flex flex-wrap">
          {props.children}
        </div>
      </div>
    </Section>
  );
};

interface SkillCardSectionProps {
  children: React.ReactNode;
}

export default SkillCardSection;