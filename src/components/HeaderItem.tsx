import { ReactNode } from "react";
import { useTheme } from "../contexts/ThemeContext";

const HeaderItem = (props: HeaderItemProps) => {
  const { theme } = useTheme();
  return (
    <a className={`duration-300 flex hover:text-dark-purple items-center ${props.mr ? props.mr : 'mr-5'} ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`} href={props.url}>
      <div className={props.icon ? 'mr-2' : ''}>
        {props.icon}
      </div>
      {props.children}
    </a>
  );
};

interface HeaderItemProps {
  icon?: ReactNode;
  url: string;
  mr?: number;
  children: ReactNode;
}

export default HeaderItem;