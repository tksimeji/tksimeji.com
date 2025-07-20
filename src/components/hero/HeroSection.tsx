import HeroSectionTitle from '@/components/hero/HeroSectionTitle';
import Terminal from '@/components/hero/Terminal';
import Section from '@/components/Section';

const HeroSection = () => {
  return (
    <Section>
      <div className="container flex flex-col items-center justify-start mx-auto md:flex-row md:max-w-5xl py-20">
        <div className="lg:pr-24 mb-16 md:text-left left">
          <HeroSectionTitle />
        </div>
        <div className="lg:max-w-lg md:w-2/3 ml-auto">
          <Terminal />
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;