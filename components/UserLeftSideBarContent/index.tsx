import { LayoutGroup } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { BiArrowToLeft, BiArrowToRight, BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { ROUTES } from "../../constants/route";
import useWindowSize from "../../hooks/useWindowSize";
import useUIStore from "../../stores/UIStore";
import Button from "../Button";
import DashboardMenu from "../DashboardMenu";

interface UserLeftSideBarProps {
  isOpenSidebar: boolean;
}

const UserLeftSideBarContent: FC<UserLeftSideBarProps> = ({
  isOpenSidebar,
}) => {
  const router = useRouter();
  // const isLaptop = useWindowSize("laptop");
  const isTablet = useWindowSize("tablet");
  const toggleSidebar = useUIStore((state) => state.toggleSideBar);
  return (
    <LayoutGroup id="dashboard">
      {ROUTES.map((route) => (
        <Link href={route.path} key={route.title}>
          <a
            href={route.path}
            className="relative flex flex-1 tablet:flex-[0] justify-center tablet:!justify-between items-center"
          >
            <DashboardMenu
              layoutId="route"
              extentClassName={`text-sm ${
                isOpenSidebar ? "tablet:w-[170px]" : ""
              }  tablet:hover:shadow-md  `}
              hideText={
                isTablet
                  ? isOpenSidebar
                    ? false
                    : true
                  : !(router.pathname === route.path)
              }
              title={route.title}
              icon={route.icon}
              active={router.pathname === route.path}
            />
          </a>
        </Link>
      ))}
      <Button
        extentClassName={`hidden tablet:flex absolute bottom-[5.5rem]  !shadow-none bg-transparent border-none  ${
          isOpenSidebar ? "right-2" : ""
        }`}
        buttonContent="icon"
        buttonIcon={isOpenSidebar ? BiArrowToLeft : BiArrowToRight}
        title="collapse"
        buttonSizes="small"
        buttonType="tertiary"
        onClick={toggleSidebar}
      />
    </LayoutGroup>
  );
};

export default UserLeftSideBarContent;
