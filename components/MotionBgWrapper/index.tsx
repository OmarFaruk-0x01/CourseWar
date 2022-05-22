import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
interface MotionBgWrapperProps {
  children: ReactNode;
  layoutId: string;
  active: boolean;
  color: string;
}

const MotionBgWrapper: FC<MotionBgWrapperProps> = ({
  children,
  color,
  active,
  layoutId,
}) => {
  return (
    <div className="relative w-fit items-center justify-center flex z-10">
      {children}
      {active && (
        <motion.div
          layoutId={layoutId}
          className={`absolute top-0 left-0 w-full h-full  rounded-md ${color} -z-[1]`}
        />
      )}
    </div>
  );
};

export default MotionBgWrapper;
