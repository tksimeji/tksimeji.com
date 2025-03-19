import { ReactNode } from "react";
import { useTheme } from "../contexts/ThemeContext";

const Card = (props: CardProps) => {
  const { theme } = useTheme();
  return (
    <div className="md:w-1/3 p-4">
      <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-200'} min-h-[240px] p-8 rounded-lg`}>
        <div className="flex items-center mb-3">
          <div className="bg-purple p-1 rounded-full text-white">
            {props.icon}
          </div>
          <h2 className={`font-medium ml-2 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'} text-lg`}>{props.title}</h2>
        </div>
        <div className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

interface CardProps {
  icon: ReactNode;
  title: string;
  children?: ReactNode;
}

export default Card;