import { FC } from "react";
import LogoProps from "./index.interface";

const Logo: FC<LogoProps> = ({ children, LogoComp }) => {
  return (
    <div className="relative flex items-center justify-start w-[70px]  h-10">
      {children || LogoComp}
    </div>
  );
};

export default Logo;