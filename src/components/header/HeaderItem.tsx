import { ReactNode } from 'react';

const HeaderItem = (props: HeaderItemProps) => {
  return (
    <a className="flex group  items-center mr-5" href={props.url}>
      <div className="mr-2">
        {props.children}
      </div>
      <p className="duration-300 group-hover:text-dark-purple text-purple transition">{props.title}</p>
    </a>
  );
};

interface HeaderItemProps {
  title: string,
  url: string,
  mr?: number,
  children: ReactNode
}

export default HeaderItem;