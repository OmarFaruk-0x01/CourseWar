import { FC } from "react";
import Image from "next/image";
import { CourseShortTypes, courseViewType } from "../../constants/types";
import { BiBox, BiBriefcaseAlt2 } from "react-icons/bi";
import IconText from "../IconText";
import { MdQueuePlayNext, MdStar } from "react-icons/md";
import Button from "../Button";
import { AiOutlineHeart, AiTwotoneEnvironment } from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";

interface CourseViewProps {
  course: CourseShortTypes;
  viewType: courseViewType;
}

const CourseView: FC<CourseViewProps> = ({ course, viewType }) => {
  const { id, catagories, title, thumbnail, rating, level, description } =
    course;

  return (
    <div
      className={`${
        viewType === "landscape" ? "tablet:flex tablet:max-w-full" : ""
      } group w-full sm:max-w-lg desktop:max-w-xl bg-white shadow-lg rounded-lg overflow-hidden my-2 hover:shadow-xl`}
    >
      <div
        className={`relative h-[250px] mobile:h-[300px] sm:!h-[250px] mt-3 ml-3 mr-3 mb-0 ${
          viewType === "landscape"
            ? "tablet:min-w-[300px] desktop:!min-w-[50%] tablet:mb-3"
            : ""
        } rounded-lg overflow-hidden transition-all`}
      >
        <Button
          title=""
          buttonType="tertiary"
          buttonContent="icon"
          buttonIcon={AiOutlineHeart}
          buttonSizes="medium"
          className="z-10 absolute w-10 h-10 right-2 top-2 bg-white rounded-lg text-primary-400 shadow-lg flex items-center justify-center group-hover:bg-primary-500 transition-colors group-hover:text-white active:!bg-primary-600 "
        />

        <Image src={thumbnail.url} layout="fill" />
      </div>

      <div className="flex flex-1 justify-between flex-col py-3">
        <div
          className={`px-4 ${
            viewType === "landscape"
              ? "tablet:px-1 tablet:py-1 tablet:pr-4"
              : ""
          } flex-1`}
        >
          <Link href={"/courses/" + id}>
            <a
              href={"/courses/" + id}
              className="text-lg font-semibold my-2 line-clamp-2 group-hover:text-primary-500 transition-colors"
            >
              {title}
            </a>
          </Link>
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
        <div
          className={`${
            viewType === "landscape" ? "tablet:pr-3" : ""
          } p-2 flex-auto flex items-center justify-center`}
        >
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
