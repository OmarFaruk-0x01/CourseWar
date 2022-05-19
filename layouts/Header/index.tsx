import { FC } from "react";
import { BiChevronDown, BiMenu, BiNotification } from "react-icons/bi";
import Button from "../../components/Button";
import Search from "../../components/Search";
import DashIcon from "../../components/DashIcon";
import Avatar from "../../components/Avatar";
import HeaderProps from "./index.intereface";
import Logo from "../../components/Logo";
const Header: FC<HeaderProps> = ({ extendClassName, ...props }) => {
  return (
    <header
      className={`${extendClassName} tablet:fixed tablet:top-0 w-full flex items-center justify-between  bg-white shadow-sm z-20`}
      {...props}
    >
      <div className="flex items-center justify-between ">
        <Logo
          LogoComp={
            <img src="https://png.pngtree.com/element_our/png/20180911/education-logo-vector-template-png_92224.jpg" className="w-20" />
          }
        />
      </div>
      <div className="flex items-center justify-center">
        <Button
          buttonContent="icon"
          buttonIcon={BiMenu}
          title={"Menu"}
          buttonType={"drop_text"}
          buttonSizes="regular"
        />
      </div>
    </header>
  );
};

export default Header;
