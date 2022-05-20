import { FC } from "react";
import NavMenu from "../../components/NavMenu";
import { NAV_ROUTES } from "../../constants/route";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  return (
    <nav className="flex flex-col">
      {NAV_ROUTES.map((item) => (
        <NavMenu {...item} />
      ))}
    </nav>
  );
};

export default NavBar;
