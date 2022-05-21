import { FC } from "react";
import { BiCollapse, BiRightArrow } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import DashIcon from "../../components/DashIcon";
import NavMenu from "../../components/NavMenu";
import { NAV_ROUTES } from "../../constants/route";
import useUIStore from "../../stores/UIStore";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  const toggleNav = useUIStore(state => state.toggleNav)
  return (
    <nav className="flex flex-col py-1 tablet:flex-row">
      <DashIcon
        onClick={toggleNav}
        extentClassName='tablet:hidden'
        style={{cursor: 'pointer'}}
      _Icon={MdClose}
      _iconProps={{size: 25}}
      />
      {NAV_ROUTES.map((item) => (
        <NavMenu key={item.title} {...item} />
      ))}
    </nav>
  );
};

export default NavBar;
