import { FC } from "react";
import Image from "next/image";
import { CourseShortTypes } from "../../constants/types";
import { BiBox, BiBriefcaseAlt2, BiPlayCircle, BiStar } from "react-icons/bi";
import IconText from "../IconText";
import { MdStar } from "react-icons/md";
import Button from "../Button";
import { AiTwotoneEnvironment } from "react-icons/ai";

interface CourseViewProps {
  course: CourseShortTypes;
}

const CourseView: FC<CourseViewProps> = ({ course }) => {
  const { id, catagories, title, thumbnail, rating, level, description } =
    course;
  return (
    <div className=" hover:!bg-black group w-full sm:max-w-lg desktop:max-w-xl bg-white shadow-lg rounded-lg overflow-hidden my-2 ">
      <div
        className={
          "relative h-[250px] mobile:h-[300px] sm:!h-[250px] mt-3 ml-3 mr-3 mb-0 rounded-lg overflow-hidden transition-all group-hover:bg-black"
        }
      >
        <div className="z-50 absolute inset-[35%] bg-primary-50/80 rounded-full text-primary-400/30 shadow-xl flex items-center justify-center">
          <BiPlayCircle size={60} />
        </div>
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
          <h2 className="text-lg font-semibold my-2">
            {title.slice(0, 50) + " ......"}
          </h2>
          <p className="text-sm my-3">{description.slice(0, 80) + " ..."}</p>
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
