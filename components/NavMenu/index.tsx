import Link from "next/link";
import { FC } from "react";
import { NavRouteTypes, NAV_ROUTES } from "../../constants/route";

interface NavMenuProps extends NavRouteTypes {}
//mx-3 px-2 flex flex-row items-center justify-center gap-2 
const NavMenu: FC<NavMenuProps> = ({ route, title }) => {
  return (
    <Link href={route}>
      <a className="relative px-2 py-3 my-1">
        <span className="absoulte left-0 w-2 h-full w-1 h-1  bg-primary-500"  />
        <span className="text-">{title}</span>
        <span></span>
      </a>
    </Link>
  );
};

export default NavMenu;
