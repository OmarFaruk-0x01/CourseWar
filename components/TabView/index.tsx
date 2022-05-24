import { AnimatePresence, motion } from "framer-motion";
import { FC, forwardRef, LegacyRef, ReactNode } from "react";
interface TabViewProps {
  active: boolean;
  title: string;
  children: ReactNode;
}

const TabView: FC<TabViewProps> = ({ title, children, active }) => {
  return (active && <div key={title}>{children}</div>) || null;
};
export default TabView;
