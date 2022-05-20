import { FC } from "react";
import { DashboardMenuProps } from "./index.interface";
import DashIcon from "../DashIcon";
import {motion} from 'framer-motion'
const DashboardMenu: FC<DashboardMenuProps> = ({
  hideText,
  showBg,
  extentClassName,
  active,
  title,
  layoutId,
  icon,
  ...props
}) => {
  return (
    <button
      className={`${extentClassName} relative group flex  items-center justify-between rounded-md px-2 gap-5 py-2 active:bg-gray-100 ${
        showBg ? "bg-white" : ""
      }  transition-all`}
      {...props}
    >
      <span className="group-hover:text-primary-500 flex gap-1 items-center justify-center text-gray-500">
        {active ? (
          <motion.div
          // transition={{duration: .15}}
            initial={false}
            animate={{ transform: 'translateX(0px)' }}
          >
            <DashIcon
              className={`group-hover:text-primary-500 transition-colors ${
                active ? "text-white" : ""
              }`}
              _Icon={icon}
              _iconProps={{ size: 20 }}
            />
          </motion.div>
        ) : (
          <DashIcon
            className={`group-hover:text-primary-500 transition-colors`}
            _Icon={icon}
            _iconProps={{ size: 20 }}
          />
        )}

        {!hideText ? (
          <span
            className={`pr-2 transition-colors ${active ? "text-white" : ""}`}
          >
            {title}
          </span>
        ) : null}
      </span>
      {!hideText ? (
        <motion.span
          // transition={{ duration: .15 }}
          initial={false}
          animate={{ opacity: 1 }}
          className={`w-2 h-2 rounded-full ${
            active ? "bg-white" : ""
          } transition-colors`}
        />
      ) : null}
      {active && (
        <motion.div
          layoutId="route"
          className="absolute top-0 left-0 w-full h-full bg-primary-500 -z-[1] rounded-lg"
        ></motion.div>
      )}
    </button>
  );
};

export default DashboardMenu;
