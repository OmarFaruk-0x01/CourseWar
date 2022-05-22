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
  const toggleNav = useUIStore((state) => state.toggleNav);

  return (
    <header className="sticky top-0 tablet:fixed tablet:top-0 w-full flex items-center justify-between bg-white shadow-sm z-20 px-3 py-3">
      <div className="flex flex-row items-center justify-start gap-2 mr-3">
        <Logo
          LogoComp={
            <svg
              width="193"
              height="106"
              viewBox="0 0 193 106"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
              className="fill-primary-500"
                d="M59.802 21.6C3.30201 55.4 -0.0979834 57.4 0.0020166 58.5C0.0020166 59 3.80202 61.1 8.40202 63.1L16.802 66.7L17.102 75.8C17.302 84.1 17.202 85 15.302 86C12.802 87.4 12.702 89.6 15.202 91.2C17.102 92.4 17.102 92.5 14.702 98.8C13.402 102.3 12.302 105.4 12.302 105.6C12.302 105.8 15.502 106 19.402 106C24.702 106 26.402 105.7 26.002 104.7C25.702 104.1 24.402 101 23.002 97.9C20.602 92.5 20.502 92.3 22.402 91.2C25.002 89.5 24.802 87.2 21.802 85.8C19.402 84.7 19.302 84.3 19.302 76.4V68.1L27.302 71.5C31.702 73.4 36.102 75.4 37.202 76C38.302 76.5 39.402 77 39.602 77C39.902 77 39.002 73.1 37.702 68.3C36.402 63.4 35.302 59 35.302 58.3C35.302 57.2 43.202 54.5 88.102 40.2L96.302 37.6L106.102 40.7C111.402 42.4 125.102 46.8 136.602 50.4C153.002 55.7 157.302 57.4 157.302 58.8C157.302 59.7 156.402 63.4 155.302 67C154.202 70.6 153.302 74.3 153.302 75.3C153.302 76.9 153.502 76.9 156.402 75.5C158.102 74.6 166.802 70.7 175.602 66.9C184.502 63.1 192.202 59.5 192.702 59C193.102 58.6 191.902 57.1 189.702 55.7C182.502 51.2 96.602 0 96.202 0C96.002 0.0999985 79.602 9.8 59.802 21.6Z"
                
              />
            </svg>
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
        onClick={toggleNav}
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
          onClick={toggleNav}
        />
      </div>
    </header>
  );
};

export default Header;
