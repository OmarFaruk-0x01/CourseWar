import { FC } from "react";
import { BiChevronDown, BiNotification } from "react-icons/bi";
import Button from "../../components/Button";
import Search from "../../components/Search";
import DashIcon from "../../components/DashIcon";
import Avatar from "../../components/Avatar";
import Logo from "../../components/Logo";
import Badge from "../../components/Badge";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import NavBar from "../NavBar";
const Header: FC<{}> = () => {
  return (
    <header className="sticky top-0 tablet:fixed tablet:top-0 w-full flex items-center justify-between bg-white shadow-sm z-20 px-3 py-3">
      <div className="flex flex-row items-center justify-start gap-2 mr-3">
        <Logo
          LogoComp={
            <Image
              src="/logo.png"
              layout="fill"
              className="w-full object-contain"
            />
          }
        />
        <h3 className="hidden tablet:block">CourseWar</h3>
      </div>
      <div className="hidden tablet:flex flex-1 items-center justify-start">
        <Search extentClassName="tablet:w-[76%] laptop:!w-[350px]" />
      </div>
      <div className="fixed w-2/3 h-full right-0 bottom-0 bg-white laptop:flex flex-[2] items-center justify-center shadow-lg z-10">
        <NavBar />
      </div> 
      <div className='fixed inset-0 bg-black/20 w-full h-full ' />

      <div className="flex flex-[2]  items-center justify-end gap-2">
        <Badge title="Subscribed" type="subscribed" />
        <DashIcon _Icon={BiNotification} extentClassName="hidden tablet:flex" />
        <Avatar title="Omar" avatarSizes="medium" avatarColor="primary" />
        <Button
          buttonContent="icon"
          buttonIcon={MdMenu}
          title={"Omar Faruk"}
          buttonType={"drop_text"}
          buttonSizes="large"
          extentClassName="tablet:flex"
          iconProps={{ size: 25 }}
        />
      </div>
    </header>
  );
};

export default Header;
