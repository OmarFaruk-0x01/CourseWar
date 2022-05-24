import { FC } from "react";
import { IconType } from "react-icons";
import { BiLock } from "react-icons/bi";
import { BsCheck2, BsLock, BsLockFill } from "react-icons/bs";
interface LessonCardProps {
  lessonIndex: number;
  lessonId: string;
  lessonTitle: string;
  isLocked: boolean;
  isCompleted: boolean;
}

const LessonCard: FC<LessonCardProps> = ({
  isCompleted,
  isLocked,
  lessonId,
  lessonTitle,
  lessonIndex,
}) => {
  let Icon: IconType | null;

  if (isLocked) {
    Icon = BiLock;
  } else if (isCompleted) {
    Icon = BsCheck2;
  } else {
    Icon = null;
  }

  return (
    <div className="flex py-2 px-5 rounded-lg items-center justify-between bg-gray-100">
      <div className="flex items-center gap-5 ">
        <span>{lessonIndex}</span>
        <h2>{lessonTitle}</h2>
      </div>
      <span>{Icon && <Icon size={20} />}</span>
    </div>
  );
};

export default LessonCard;
