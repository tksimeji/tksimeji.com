import { ReactNode } from "react";

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="border-0 bg-purple cursor-pointer duration-300 hover:bg-dark-purple py-2 px-6 rounded-2xl text-lg text-white">
      {children}
    </button>
  );
};

interface ButtonProps {
  children: ReactNode;
}

export default Button;