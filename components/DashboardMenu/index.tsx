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
    <button
      className={`!relative ${extentClassName}  group flex  items-center justify-between rounded-md px-2 gap-5 py-2 ${
        showBg ? "bg-white" : ""
      } transition-all`}
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
              className={`transition-colors ${
                active ? "text-white" : "group-hover:text-primary-500"
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
            className={` pr-2 transition-colors ${active ? "text-white" : ""}`}
          >
            {title}
          </motion.span>
        ) : null}
      </span>
      {!hideText ? (
        <motion.span
          whileHover={{ scale: 2 }}
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
            layoutId="route"
            className="absolute inline-block top-0 left-0 w-full h-full bg-primary-500 -z-[1] rounded-lg shadow shadow-primary-200"
          />
      )}
    </button>
  );
};

export default DashboardMenu;
