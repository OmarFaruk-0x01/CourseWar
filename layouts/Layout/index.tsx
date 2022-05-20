import { FC } from "react";
import { LayoutProps } from "./index.interface";
import Header from "../Header";
import SideBar from "../SideBar/index";
import useWindowSize from "../../hooks/useWindowSize";

const Layout: FC<LayoutProps> = ({ title, children, withHeader, ...props }) => {
  const isShouldShowHeader = useWindowSize("mobile");
  return (
    <div className="z-10 bg-white" {...props}>
      {(withHeader) || (!isShouldShowHeader) && <Header />}
      <div className={`flex z-10 ${withHeader ? "tablet:py-16" : ""}`}>
        <div className="tablet:fixed  h-full">
          <SideBar withLogo={!withHeader} />
        </div>
        <div className="flex-1 tablet:ml-16 laptop:!ml-48">
          <h2 className="font-medium text-lg p-3 border-b-2">{title}</h2>
          <div className="p-2 pb-20 tablet:p-5 overflow-hidden rounded-md">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
