import { FC } from "react";
import ReviewCard from "../ReviewCard";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../Button";
import { BiHeart } from "react-icons/bi";

interface ReviewListViewProps {
  open: boolean;
}

const ReviewListView: FC<ReviewListViewProps> = ({ open }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {open && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 400 }}
          exit={{ height: 0 }}
          className="my-3 overflow-scroll"
        >
          <div className="grid grid-cols-1 gap-3 tablet:grid-cols-2 ">
            <ReviewCard student_info={{ id: "", name: "Omar Faruk" }} />
            <ReviewCard student_info={{ id: "", name: "Omar Faruk" }} />
            <ReviewCard student_info={{ id: "", name: "Omar Faruk" }} />
          </div>
          <div className="">
            <Button
              extentClassName="my-2 mx-auto"
              onClick={() => {}}
              buttonContent="text"
              buttonSizes={"small"}
              buttonType="tertiary"
              title={"Load more reviews"}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReviewListView;
