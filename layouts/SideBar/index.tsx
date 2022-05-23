import { FC, ReactNode } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Logo from "../../components/Logo";
import Image from "next/image";
import { motion } from "framer-motion";
import useUIStore from "../../stores/UIStore";
interface SideBarProps {
  withLogo?: boolean;
  children: ReactNode;
  isOpenSideBar?:boolean;
}
const SideBar: FC<SideBarProps> = ({ withLogo, children, isOpenSideBar }) => {
  const isTablet = useWindowSize("tablet");

  return (
    <motion.aside
      layout={"size"}
      className={`fixed bottom-0 w-full flex bg-white py-4 px-2 items-center justify-start z-50  justify-items-center tablet:sticky tablet:top-[20px] tablet:bg-transparent tablet:flex tablet:flex-col ${
        !isOpenSideBar
          ? " tablet:w-20 laptop:!w-20"
          : "tablet:items-start  tablet:!w-[190px] laptop:!w-[190px]"
      } tablet:h-full  tablet:border-r-[1px] tablet:gap-2  transition-all duration-200 drop-shadow-[5px_0px_4px_rgba(0,0,0,.2)]`}
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

      {children}
    </motion.aside>
  );
};

export default SideBar;
