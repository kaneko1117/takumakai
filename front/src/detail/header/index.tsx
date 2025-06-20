import { ReactNode } from "react";
import { Logo } from "./components/logo";

type Props = {
  children: ReactNode;
};

export const Header = ({ children }: Props) => {
  return (
    <header className="h-20 flex justify-center items-center w-full">
      <Logo />
      {children}
    </header>
  );
};
