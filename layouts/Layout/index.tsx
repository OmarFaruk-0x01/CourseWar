import { FC } from "react";
import { LayoutProps } from "./index.interface";
import Header from "../Header";
import SideBar from "../SideBar/index";
import useUIStore from "../../stores/UIStore";

const Layout: FC<LayoutProps> = ({
  title,
  children,
  withHeader = true,
  renderLeftSideBar,
  ...props
}) => {
  const setDropDownMenuId = useUIStore((state) => state.setDropDownMenuId);
  const isOpenSidebar = useUIStore((state) => state.sideBarToggle);

  const isShouldShowHeader = false; //useWindowSize("mobile");
  return (
    <div className="z-10 bg-white" {...props}>
      {(withHeader || !isShouldShowHeader) && <Header />}
      <div
        className={`flex z-10 ${
          withHeader ? "tablet:pt-20 pb-5 overflow-auto" : ""
        }`}
      >
        {renderLeftSideBar && (
          <div className="tablet:fixed  h-full">
            <SideBar withLogo={!withHeader} isOpenSideBar={isOpenSidebar}>
              {renderLeftSideBar({ isOpenSidebar })}
            </SideBar>
          </div>
        )}

        <div
          className={`flex-1 ${
            renderLeftSideBar
              ? !isOpenSidebar
                ? "tablet:ml-20 laptop:!ml-20"
                : "tablet:!ml-48 laptop:!ml-48"
              : ""
          }`}
        >
          {title && (
            <h2 className="font-medium text-lg p-3 border-b-[1px]">{title}</h2>
          )}
          <div className="p-2 pb-20 tablet:p-5 overflow-hidden rounded-md">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
