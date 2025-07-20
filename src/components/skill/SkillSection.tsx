'use client';

import Section from '@/components/Section';
import SkillSearchBox from '@/components/skill/SkillSearchBox';
import React from 'react';
import SkillCard from '@/components/skill/SkillCard';
import { skills } from '@/skills';

const SkillSection = () => {
  const [query, setQuery] = React.useState('');

  const filteredSkills = skills.filter(skill =>
    skill.title.toLowerCase().includes(query.toLowerCase()) ||
    skill.keywords?.some(kw => kw.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <Section>
      <div className="container justify-center mx-auto px-5">
        <SkillSearchBox onChange={e => setQuery(e.target.value)} />
        <div className="grid gap-2 md:grid-cols-3 w-full">
          {filteredSkills.map((skill, index) => {
            return <SkillCard key={index} skill={skill} />;
          })}
        </div>
      </div>
    </Section>
  );
};

export default SkillSection;