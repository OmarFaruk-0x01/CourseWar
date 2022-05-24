import { FC, Fragment } from "react";
import { DashIconProps } from "./index.interface";

const DashIcon: FC<DashIconProps> = ({
  clickable,
  _Icon,
  _iconProps,
  children="",
  extentClassName="",
  ...props
}) => {
  const IconComp = !!_Icon
    ? _Icon
    : typeof children == "function"
    ? children
    : Fragment;
  const ClickStyle = clickable
    ? "hover:text-primary-500 active:text-primary-600 transition-colors"
    : "";
  return (
    <div
      className={
        "w-10 h-10 p-1 flex items-center justify-center text-gray-500 !text-inherit " +
        ClickStyle +
        extentClassName
      }
      {...props}
    >
      <IconComp {..._iconProps} />
    </div>
  );
};
export default DashIcon;
