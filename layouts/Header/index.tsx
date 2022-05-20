import { FC, useState } from "react";
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
import useUIStore from "../../stores/UIStore";
import DropDownMenu from "../../components/DropDownMenu";
import DropDownMenuItem from "../../components/DropDownMenuItem";
const Header: FC<{}> = () => {
  const isNavOpen = useUIStore((state) => state.isOpenNav);
  const toggolNav = useUIStore((state) => state.toggolNav);

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

      <div
        className={`fixed w-2/3 h-full right-0 bottom-0 bg-white items-center justify-center shadow-lg  z-50   transition-all duration-200 ${
          isNavOpen ? "translate-x-0" : "translate-x-[100%]"
        }
        tablet:flex flex-1 tablet:translate-x-0 tablet:relative tablet:shadow-none`}
      >
        <NavBar />
      </div>
      {/* <div className="hidden tablet:flex flex-1 items-center justify-start">
        <Search extentClassName="tablet:w-[76%] laptop:!w-[350px]" />
      </div> */}
      <div
        onClick={toggolNav}
        className={`fixed inset-0 bg-black/20 w-full h-full transition-all ${
          !isNavOpen ? "hidden" : "visible"
        } `}
      />

      <div className="flex  items-center justify-end gap-2">
        <Badge title="Subscribed" type="subscribed" />
        <DashIcon _Icon={BiNotification} extentClassName="hidden tablet:flex" />
        <DropDownMenu
          renderButton={(toggleHandle, props) => (
            <Avatar
              onClick={toggleHandle}
              title="Omar"
              avatarSizes="medium"
              avatarColor="primary"
            />
          )}
          renderMenus={() => (
            <>
              <DropDownMenuItem>Profile</DropDownMenuItem>
              <DropDownMenuItem>Account Settings</DropDownMenuItem>
              <DropDownMenuItem>Subscribe Plans</DropDownMenuItem>
              <hr />
              <DropDownMenuItem>Logout</DropDownMenuItem>
            </>
          )}
        />
        <Button
          buttonContent="icon"
          buttonIcon={MdMenu}
          title={"Omar Faruk"}
          buttonType={"drop_text"}
          buttonSizes="large"
          extentClassName="tablet:hidden"
          iconProps={{ size: 25 }}
          onClick={toggolNav}
        />
      </div>
    </header>
  );
};

export default Header;
