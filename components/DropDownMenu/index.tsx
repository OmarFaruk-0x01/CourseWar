import { FC, HTMLAttributes, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DropDownMenuItem from "../DropDownMenuItem";
import Link from "next/link";
interface DropDownMenuProps extends HTMLAttributes<HTMLDivElement> {
  renderButton: (handleToggle: () => void, props?: any) => JSX.Element;
  renderMenus: () => JSX.Element;
  extendsClassName?: string;
}

const DropDownMenu: FC<DropDownMenuProps> = ({
  renderButton,
  renderMenus,
  extendsClassName,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  function toggleMenu() {
    setOpen(!open);
  }
  return (
    <div className={extendsClassName + "flex justify-center"} {...props}>
      <div>
        <div className="dropdown relative">
          {renderButton(toggleMenu)}
          <AnimatePresence>
            {open && (
              <motion.ul
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: -180, opacity: 1 }}
                className={`
              dropdown-menu
              min-w-[200px]
              absolute
          bg-white
          text-base
          z-50
          float-left
          py-2
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
