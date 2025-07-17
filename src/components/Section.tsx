import React from 'react';

const Section = (props: SectionProps) => {
  return (
    <section>
      <div className="mx-auto md:max-w-5xl px-4 sm:px-6">
        {props.children}
      </div>
    </section>
  );
};

interface SectionProps {
  children: React.ReactNode;
}

export default Section;