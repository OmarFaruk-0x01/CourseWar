import Image from "next/image";
import { FC } from "react";
import { BiLike, BiShareAlt } from "react-icons/bi";
import { StudentType } from "../../constants/types";
import Avatar from "../Avatar";
import AvatarCard from "../AvatarCard";
import Button from "../Button";

interface ReviewCardProps {
  student_info: StudentType;
}

const ReviewCard: FC<ReviewCardProps> = ({ student_info }) => {
  return (
    <section className="py-2 pt-3 px-2 bg-gray-100 rounded-md">
      <div className="flex items-center justify-between">
        <AvatarCard title={student_info.name} subtitle='ssadasd' />
        <span className="text-xs text-gray-400">
          {new Date().toDateString()}
        </span>
      </div>
      <hr className="mt-2" />
      <div className="px-1">
        <p className="text-sm py-1 pt-2 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          placeat rem labore dolorem deleniti vel a consequuntur molestiae iusto
          beatae.
        </p>
      </div>
      <div className="flex items-center justify-between">
        <Button
          buttonContent="icon-text"
          buttonIcon={BiLike}
          title="Helpful"
          buttonType="drop_text"
          extentClassName="text-sm !text-gray-500"
        />
        <Button
          buttonContent="icon-text"
          buttonIcon={BiShareAlt}
          title="Share"
          buttonType="drop_text"
          extentClassName="text-sm !text-gray-500"
        />
      </div>
    </section>
  );
};

export default ReviewCard;
