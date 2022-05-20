import { FC } from "react";
import { useRouter } from "next/router";
import { ROUTES } from "../../constants/route";
import Link from "next/link";
import DashboardMenu from "../../components/DashboardMenu/index";
import useWindowSize from "../../hooks/useWindowSize";
import Logo from "../../components/Logo";
import Image from "next/image";
import { motion } from "framer-motion";
interface SideBarProps {
  withLogo?: boolean;
}
const SideBar: FC<SideBarProps> = ({ withLogo }) => {
  const router = useRouter();
  const isLaptop = useWindowSize("laptop");
  const isTablet = useWindowSize("tablet");

  return (
    <motion.aside
      layout={"size"}
      className="fixed bottom-0 w-full flex bg-white py-4 px-1 grid-cols-4 items-center justify-start z-10 justify-items-center tablet:sticky tablet:top-[20px] tablet:bg-transparent tablet:flex tablet:flex-col tablet:w-20 tablet:h-full  tablet:border-r-[1px] tablet:gap-2 laptop:!w-[190px] transition-all duration-200"
    >
      {withLogo && isTablet && (
        <div
          className={`flex relative items-center justify-start w-full gap-2 mb-2 tablet:p-1 tablet:!mb-1 ${
            withLogo ? "laptop:w-[150px]" : "laptop:w-[200px]"
          }`}
        >
          <Logo
            LogoComp={
              <Image layout="fill" src="/logo.png" className="bg-white" />
            }
          />
          <h3 className="tablet:hidden laptop:!block">CourseWar</h3>
        </div>
      )}
      {ROUTES.map((route) => (
        <Link href={route.path} key={route.title}>
          <a href={route.path}>
            <DashboardMenu
              layoutId="route"
              extentClassName=" flex-1 tablet:flex-[0] !justify-center tablet:!justify-between items-center text-sm laptop:w-[170px] tablet:hover:bg-white tablet:hover:shadow-md "
              hideText={
                isLaptop
                  ? false
                  : isTablet
                  ? true
                  : !(router.asPath === route.path)
              }
              title={route.title}
              icon={route.icon}
              active={router.asPath === route.path}
            />
          </a>
        </Link>
      ))}
    </motion.aside>
  );
};

export default SideBar;
