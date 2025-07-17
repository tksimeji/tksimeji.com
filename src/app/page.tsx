import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SkillCard from '@/components/SkillCard';
import Image from 'next/image';
import SkillCardSection from '@/components/SkillCardSection';

export default function Home() {
  return (
    <div className="bg-light">
      <Header/>
      <HeroSection/>
      <SkillCardSection>
        <SkillCard icon={<Image alt="Kotlin" height={40} src="./assets/kotlin.svg" width={40} />} title="Kotlin❤ / Java">
        </SkillCard>
        <SkillCard icon={<Image alt="Ktor" height={40} src="./assets/ktor.svg" width={40} />} title="Ktor">
        </SkillCard>
        <SkillCard icon={<Image alt="TypeScript" height={40} src="./assets/typescript.svg" width={40} />} title="TypeScript">
        </SkillCard>
        <SkillCard icon={<Image alt="C#" height={40} src="./assets/csharp.svg" width={40} />} title="C#">
        </SkillCard>
        <SkillCard icon={<Image alt="Kubernetes" height={40} src="./assets/kubernetes.svg" width={40} />} title="Kubernetes / Argo CD">
        </SkillCard>
        <SkillCard icon={<Image alt="Next.js" height={40} src="./assets/nextjs.svg" width={40} />} title="Next.js">
        </SkillCard>
        <SkillCard icon={<Image alt="Windows App" height={40} src="./assets/windows.svg" width={40} />} title="Windows アプリ">
        </SkillCard>
        <SkillCard icon={<Image alt="Tailwind CSS" height={40} src="./assets/tailwindcss.svg" width={40} />} title="Tailwind CSS">
        </SkillCard>
        <SkillCard icon={<Image alt="JetBrains Exposed" height={40} src="./assets/exposed.svg" width={40} />} title="JetBrains Exposed">
        </SkillCard>
        <SkillCard icon={<Image alt="React" height={40} src="./assets/react.svg" width={40} />} title="React">
        </SkillCard>
        <SkillCard icon={<Image alt="Rust" height={40} src="./assets/rust.svg" width={40} />} title="Rust">
        </SkillCard>
      </SkillCardSection>
    </div>
  );
};
