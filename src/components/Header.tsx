import { Github, Moon, Sun, Twitter } from "lucide-react";
import HeaderItem from "./HeaderItem";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header>
      <div className="container flex flex-col items-center md:flex-row md:max-w-5xl mx-auto p-5">
        <div className="flex items-center select-none">
          <img className="max-w-16 mr-4 rounded-full size-10" src="/icon.png" />
          <div>
            <p className="font-bold text-[16px]">つきしめじ</p>
            <p className={`mb-0 ${theme === 'dark' ? 'text-gray-400' : `text-gray-600`} text-[10px]`}>@tksimeji</p>
          </div>
        </div>
        <nav className="flex items-center md:ml-auto text-base">
          <HeaderItem icon={<Github size={16} />} url="https://github.com/tksimeji" >GitHub</HeaderItem>
          <HeaderItem icon={<Twitter size={16} />} url="https://twitter.com/tksimeji" mr={0} >Twitter</HeaderItem>
          <button className="bg-purple cursor-pointer duration-300 hover:bg-dark-purple text-gray-100 px-4 py-2 rounded-4xl" onClick={toggleTheme}>
            <div className="flex items-center mr-4">
              {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
              <p className="ml-1">Theme</p>
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;