import { FC, ReactNode } from "react";
import { DashboardMenuProps } from "./index.interface";
import DashIcon from "../DashIcon";
import { AnimatePresence, motion } from "framer-motion";
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
    <AnimatePresence>
      <button
        className={`${extentClassName} relative group flex  items-center justify-between rounded-md px-2 gap-5 py-2 active:bg-gray-100 ${
          showBg ? "bg-white" : ""
        }  transition-all`}
        {...props}
      >
        <span className="group-hover:text-primary-500 flex gap-1 items-center justify-center text-gray-500">
          {active ? (
            <motion.div
              transition={{ duration: 0.2 }}
              initial={{ x: -50 }}
              animate={{ x: 0 }}
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
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className={` pr-2 transition-colors ${
                active ? "text-white" : ""
              }`}
            >
              {title}
            </motion.span>
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
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            layoutId="route"
            className="absolute inline-block top-0 left-0 w-full h-full bg-primary-500 -z-[1] rounded-lg "
          />
        )}
      </button>
    </AnimatePresence>
  );
};

export default DashboardMenu;
