import { FC } from "react";
import Header from "../Header";
import Navbar from "../Navbar/index";
import { LayoutProps } from "./index.interface";

const Layout: FC<LayoutProps> = ({ title, children, ...props }) => {
  return (
    <div className="z-10" {...props}>
      <Header />
      <div className="flex z-10 tablet:py-16">
        <div className="tablet:fixed  h-full">
          <Navbar />
        </div>
        <div className="flex-1 tablet:ml-16 laptop:!ml-48">
          <h2 className="font-medium text-lg p-3 border-b-2">{title}</h2>
          <div className="p-2 pb-20 tablet:p-5 overflow-hidden rounded-md">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
