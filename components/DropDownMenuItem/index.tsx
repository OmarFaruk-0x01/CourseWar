import { FC, ReactNode } from "react";

interface DropDownMenuItemProps {
  children: ReactNode;
}

const DropDownMenuItem: FC<DropDownMenuItemProps> = ({ children }) => {
  return (
    <li
      className="text-sm
              py-1
              px-4
              mb-1
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100"
    >
      {children}
    </li>
  );
};

export default DropDownMenuItem;