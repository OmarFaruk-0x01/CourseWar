import { FC } from "react";
import { LayoutProps } from "./index.interface";
import Header from "../Header";
import SideBar from "../SideBar/index";

const Layout: FC<LayoutProps> = ({
  title,
  children,
  withHeader = true,
  withSidebar,
  ...props
}) => {
  const isShouldShowHeader = false; //useWindowSize("mobile");
  return (
    <div className="z-10 bg-white" {...props}>
      {(withHeader || !isShouldShowHeader) && <Header />}
      <div className={`flex z-10 ${withHeader ? "tablet:py-20" : ""}`}>
        {withSidebar && (
          <div className="tablet:fixed  h-full">
            <SideBar withLogo={!withHeader} />
          </div>
        )}
        <div
          className={`flex-1 ${
            withSidebar ? "tablet:ml-20 laptop:!ml-48" : ""
          }`}
        >
          <h2 className="font-medium text-lg p-3 border-b-[1px]">{title}</h2>
          <div className="p-2 pb-20 tablet:p-5 overflow-hidden rounded-md">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
