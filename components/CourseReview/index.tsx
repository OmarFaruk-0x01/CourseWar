import { FC, useState } from "react";
import { BiHeart } from "react-icons/bi";
import {
  BsFillHeartFill,
  BsHeart,
  BsHeartFill,
  BsHeartHalf,
} from "react-icons/bs";
import Button from "../Button";
import DashIcon from "../DashIcon";
import ProgressBar from "../ProgressBar";
import ReviewCard from "../ReviewCard";
import ReviewListView from "../ReviewListView";

const CourseReviews: FC = () => {
  const [showAllReview, setShowAllReview] = useState(false);
  function toggleReviewList() {
    setShowAllReview(!showAllReview);
  }
  const renderReviewProgressbar = () => {
    const color: Record<number, string> = {
      1: "bg-red-300",
      2: "bg-orange-400",
      3: "bg-yellow-400",
      4: "bg-teal-400",
      5: "bg-primary-400",
    };
    return [5, 4, 3, 2, 1].map((star) => (
      <div className="flex gap-3 my-[2px] items-center justify-center">
        <span className="text-xs w-2 text-center text-slate-400">{star}</span>
        <ProgressBar
          progress={Math.round(Math.random() * 100)}
          progressColor={color[star]}
        />
        <span className="text-xs w-7 text-center text-slate-400">
          {Math.round(Math.random() * 100)}
        </span>
      </div>
    ));
  };

  return (
    <section>
      <div className="flex items-end justify-start gap-1">
        <span className="text-[3rem] font-semibold" style={{ lineHeight: 0.9 }}>
          4.7
        </span>
        <div className="flex items-center justify-center">
          <div className="!text-primary-500 flex">
            <DashIcon
              extentClassName="w-fit h-fit px-[2px]"
              _Icon={BsHeartFill}
              _iconProps={{ size: 12 }}
            />
            <DashIcon
              extentClassName="w-fit h-fit px-[2px]"
              _Icon={BsHeartFill}
              _iconProps={{ size: 12 }}
            />
            <DashIcon
              extentClassName="w-fit h-fit px-[2px]"
              _Icon={BsHeartFill}
              _iconProps={{ size: 12 }}
            />
            <DashIcon
              extentClassName="w-fit h-fit px-[2px]"
              _Icon={BsHeartFill}
              _iconProps={{ size: 12 }}
            />
            <DashIcon
              extentClassName="w-fit h-fit px-[2px]"
              _Icon={BsHeartHalf}
              _iconProps={{ size: 12 }}
            />
          </div>
          <p className="text-xs ml-1 text-slate-500">1232 reviews</p>
        </div>
      </div>
      <div className="flex flex-col my-4">{renderReviewProgressbar()}</div>
      <Button
        onClick={toggleReviewList}
        buttonContent="text"
        buttonIcon={BiHeart}
        buttonSizes={"small"}
        buttonType="tertiary"
        title={showAllReview ? "Hide All Reviews" : "View All Reviews"}
      />

      <ReviewListView open={showAllReview} />
    </section>
  );
};

export default CourseReviews;
