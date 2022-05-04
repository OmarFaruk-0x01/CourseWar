import { FC } from "react";
import { DashboardMenuProps } from "./index.interface";
import DashIcon from "../DashIcon";

const DashboardMenu: FC<DashboardMenuProps> = ({
  hideText,
  showBg,
  extentClassName,
  active,
  title,
  icon,
  ...props
}) => {
  return (
    <button
      className={`${extentClassName} group flex  items-center justify-between rounded-md px-2 gap-5 py-2 active:bg-gray-100 ${
        showBg ? "bg-white" : ""
      } ${active ? "bg-white tablet:shadow-md" : ""} transition-all`}
      {...props}
    >
      <span className="group-hover:text-primary-500 flex gap-1 items-center justify-center text-gray-500">
        <DashIcon
          className={`group-hover:text-primary-500 transition-colors ${
            active ? "text-primary-500" : ""
          }`}
          _Icon={icon}
          _iconProps={{ size: 20 }}
        />
        {!hideText ? (
          <span
            className={`pr-2 transition-colors ${
              active ? "text-primary-500" : ""
            }`}
          >
            {title}
          </span>
        ) : null}
      </span>
      {!hideText ? (
        <span
          className={`w-2 h-2 rounded-full ${
            active ? "bg-primary-500" : ""
          } transition-colors`}
        />
      ) : null}
    </button>
  );
};

export default DashboardMenu;
