import { FC, HTMLAttributes, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  MotionProps,
} from "framer-motion";
import DropDownMenuItem from "../DropDownMenuItem";
import Link from "next/link";
import { removeAllListeners } from "process";
import useUIStore from "../../stores/UIStore";
interface DropDownMenuProps extends HTMLAttributes<HTMLDivElement> {
  renderButton: (handleToggle: () => void, props?: any) => JSX.Element;
  renderMenus: () => JSX.Element;
  extendsClassName?: string;
  animateProps?: HTMLMotionProps<"ul">;
  menuId: string;
}

const DropDownMenu: FC<DropDownMenuProps> = ({
  menuId,
  renderButton,
  renderMenus,
  extendsClassName,
  animateProps,
  ...props
}) => {
  const dropdownMenuId = useUIStore((state) => state.dropdownMenuId);
  const setDropDownMenuId = useUIStore((state) => state.setDropDownMenuId);
  function toggleMenu() {
    console.log("state: ", dropdownMenuId);
    console.log("props: ", menuId);
    if (dropdownMenuId === menuId) {
     return setDropDownMenuId("")();
    }
    setDropDownMenuId(menuId)();
  }
  return (
    <div className={extendsClassName + "flex justify-center"} {...props}>
      <div>
        <div className="dropdown relative">
          {renderButton(toggleMenu)}
          <AnimatePresence>
            {menuId === dropdownMenuId && (
              <motion.ul
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: -170, opacity: 1 }}
                className={`
              dropdown-menu
              min-w-[200px]
              absolute
          bg-white
          text-base
          z-[9999]
          float-left
          py-2
          px-1
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          m-0
          bg-clip-padding
          border-none
        `}
                aria-labelledby="dropdownMenuButton1d"
                {...animateProps}
              >
                {renderMenus()}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;
