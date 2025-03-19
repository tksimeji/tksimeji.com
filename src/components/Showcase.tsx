import { useTheme } from "../contexts/ThemeContext";
import Button from "./Button";
import Section from "./Section";
import Terminal from "./Terminal";

const Showcase = () => {
  const { theme } = useTheme();
  return (
    <Section>
      <div className="container flex flex-col items-center justify-center mx-auto md:flex-row md:max-w-5xl py-20">
        <div className="lg:pr-24 mb-16 md:pr-16 md:text-left text-center">
          <h1 className={`font-medium mb-4 sm:text-6xl text-3xl ${theme === 'dark' ? 'text-gray-100' : 'text-gray-950'}`}>Developer</h1>
          <p className={`leading-relaxed mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            Java と Kotlin が好きです。
            <br />
            <a className="text-purple" href="https://www.azisaba.net">アジ鯖</a> という Minecraft サーバーで統括開発者をしています。
          </p>
          <a href="https://twitter.com/tksimeji">
            <Button>Twitter を見る</Button>
          </a>
        </div>
        <div className="lg:max-w-lg md:w-2/3">
          <Terminal command="cat ~/about-me" outputs={[
            <p><span className="font-bold text-purple">NAME</span>="tksimeji"</p>,
            <p><span className="font-bold text-purple">TWITTER</span>=<a href="https://twitter.com/tksimeji">"https://twitter.com/tksimeji"</a></p>,
            <p><span className="font-bold text-purple">GITHUB</span>=<a href="https://github.com/tksimeji">"https://github.com/tksimeji"</a></p>,
            <p><span className="font-bold text-purple">FAVORITES</span>=[</p>,
            <p>"Java",</p>,
            <p>"Kotlin",</p>,
            <p>"C#",</p>,
            <p>"TypeScript",</p>,
            <p>"HTML/CSS/JavaScript",</p>,
            <p>"Spring Boot",</p>,
            <p>"Windows App SDK + XAML",</p>,
            <p>"React + Tailwind CSS",</p>,
            <p>]</p>,
          ]} />
        </div>
      </div>
    </Section>
  );
};

export default Showcase;