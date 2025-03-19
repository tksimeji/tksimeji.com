import { ReactNode } from "react";

const Section = ({ children }: Props) => {
  return (
    <section>
      <div className="mx-auto md:max-w-5xl">
        {children}
      </div>
    </section>
  );
};

interface Props {
  children?: ReactNode;
}

export default Section;