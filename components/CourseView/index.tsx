import { FC } from "react";
import Image from "next/image";
import { CourseShortTypes } from "../../constants/types";
import { BiBox, BiBriefcaseAlt2 } from "react-icons/bi";
import IconText from "../IconText";
import { MdQueuePlayNext, MdStar } from "react-icons/md";
import Button from "../Button";
import { AiOutlineHeart, AiTwotoneEnvironment } from "react-icons/ai";

interface CourseViewProps {
  course: CourseShortTypes;
}

const CourseView: FC<CourseViewProps> = ({ course }) => {
  const { id, catagories, title, thumbnail, rating, level, description } =
    course;
  return (
    <div className=" group w-full sm:max-w-lg desktop:max-w-xl bg-white shadow-lg rounded-lg overflow-hidden my-2 hover:shadow-xl">
      <div
        className={
          "relative h-[250px] mobile:h-[300px] sm:!h-[250px] mt-3 ml-3 mr-3 mb-0 rounded-lg overflow-hidden transition-all "
        }
      >
        <Button
          title="Enroll"
          buttonType="primary"
          buttonContent="icon"
          buttonIcon={AiOutlineHeart}
          buttonSizes="medium"
          className="z-10 absolute w-10 h-10 right-2 top-2 bg-white rounded-lg text-primary-400 shadow-lg flex items-center justify-center group-hover:bg-primary-500 transition-colors group-hover:text-white"
        />

        <Image src={thumbnail.url} layout="fill" />
      </div>
      {/* <div>
        <Image
          draggable
          className="max-w-full min-w-full"
          src={{
            src: thumbnail.url,
            width: thumbnail.width,
            height: thumbnail.height,
          }}
        />
      </div> */}
      <div className="flex  justify-between flex-col">
        <div className="px-4 flex-1">
          <h2 className="text-lg font-semibold my-2 line-clamp-2 group-hover:text-primary-500 transition-colors">
            {title}
          </h2>
          <p className="text-sm my-3 line-clamp-2">{description}</p>
          <div className="flex  items-start justify-between gap-2 my-1">
            <IconText icon={<BiBriefcaseAlt2 size={16} />} title={level} />
            <IconText icon={<BiBox size={16} />} title={catagories.title} />
            <IconText
              icon={<MdStar color="orange" size={16} />}
              title={rating.toFixed(1).toString()}
            />
          </div>
        </div>
        <div className="p-2 flex-auto  flex items-center justify-center">
          <Button
            title="Enroll"
            buttonType="primary"
            buttonContent="text"
            buttonIcon={AiTwotoneEnvironment}
            buttonSizes="medium"
            extentClassName="px-10 rounded-md w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseView;
