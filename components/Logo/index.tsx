import { FC } from "react";
import LogoProps from "./index.interface";

const Logo: FC<LogoProps> = ({ children, LogoComp }) => {
  return <div>{children || LogoComp}</div>;
};

export default Logo;