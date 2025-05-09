import { Logo } from "./components/logo";
import { DropMenu } from "./components/menu";

export const Header = () => {
  return (
    <header className="h-10 flex justify-between items-center">
      <Logo />
      <DropMenu />
    </header>
  );
};
