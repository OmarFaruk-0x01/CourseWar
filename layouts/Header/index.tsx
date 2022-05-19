import { FC } from "react";
import { BiChevronDown, BiNotification } from "react-icons/bi";
import Button from "../../components/Button";
import Search from "../../components/Search";
import DashIcon from "../../components/DashIcon";
import Avatar from "../../components/Avatar";
import Logo from "../../components/Logo";
import Badge from "../../components/Badge";
const Header: FC<{}> = () => {
  return (
    <header className="tablet:fixed tablet:top-0 w-full flex items-center justify-between bg-white shadow-sm z-20">
      <div className="flex items-center justify-start w-[20%] laptop:w-[200px]">
        <Logo
          LogoComp={
            <img
              src="https://png.pngtree.com/element_our/png/20180911/education-logo-vector-template-png_92224.jpg"
              className="w-20"
            />
          }
        />
        <h3>CourseWar</h3>
      </div>
      <div className="hidden tablet:flex flex-1 items-center justify-start">
        <Search extentClassName="tablet:w-[76%] laptop:!w-[350px]" />
      </div>

      <div className="flex  items-center justify-center">
        <Badge title="Subscribed" type="subscribed" />
        <DashIcon _Icon={BiNotification} />
        <Avatar title="Omar" avatarSizes="medium" avatarColor="primary" />
        <Button
          buttonContent="text-icon"
          buttonIcon={BiChevronDown}
          title={"Omar Faruk"}
          buttonType={"drop_text"}
          buttonSizes="small"
        />
      </div>
    </header>
  );
};

export default Header;
