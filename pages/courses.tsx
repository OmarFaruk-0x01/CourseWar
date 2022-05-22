import type { GetServerSidePropsContext, NextPage } from "next";
import { courseTag, CourseType } from "../constants/types";
import {
  BsBoundingBox,
  BsViewList,
  BsCaretDown,
  BsChevronCompactDown,
  BsChevronDown,
} from "react-icons/bs";
import CoursesView from "../components/CoursesView";
import Search from "../components/Search";
import Layout from "../layouts/Layout";
import DashIcon from "../components/DashIcon";
import UserLeftSideBarContent from "../components/UserLeftSideBarContent";
import Button from "../components/Button";
import DropDownMenu from "../components/DropDownMenu";
import useUIStore from "../stores/UIStore";
import { motion } from "framer-motion";
import { CourseTypes } from "../constants/courseTypes";
import { AiOutlineDown, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Courses: NextPage<{ courses: CourseType[] }> = ({ courses }) => {
  const courseViewState = useUIStore((state) => state.courseView);
  const setCourseViewState = useUIStore((state) => state.setCourseView);
  const courseTag = useUIStore((state) => state.courseTag);
  const setCourseTag = useUIStore((state) => state.setCourseTag);

  return (
    <Layout title={"Courses"} renderLeftSideBar={<UserLeftSideBarContent />}>
      {/* Filter Section Start */}
      <div className="p-3 py-5 tablet:flex items-center justify-between sticky bg-white ">
        {/* Course Types Filter Btn */}
        <div className="grid grid-cols-3 tablet:flex gap-2 items-center justify-center justify-items-center">
          {CourseTypes.map((ct) => (
            <div key={ct} className="relative w-full flex items-center justify-center tablet:w-auto">
              <Button
                // disabled={parseInt(ct[1]) >= 4}
                buttonType={"tertiary"}
                onClick={setCourseTag(ct as courseTag)}
                buttonContent="text"
                buttonSizes="regular"
                buttonIcon={BsViewList}
                title={ct}
                extentClassName={` w-full tablet:w-auto px-5 bg-transparent ${
                  ct === courseTag
                    ? "!text-white !outline-none duration-300"
                    : ""
                } `}
              />
              {courseTag === ct ? (
                <motion.div
                  layoutId="switch_btn_bg"
                  className="absolute top-0 right-0 w-full h-full bg-primary-500 -z-10 rounded-md"
                />
              ) : null}
            </div>
          ))}
        </div>

        {/* Course Views Switch Btn */}
        <div className="hidden tablet:flex item-center mt-2 tablet:mt-0 justify-end ">
          <Button
            buttonType={
              courseViewState === "landscape" ? "primary" : "tertiary"
            }
            onClick={setCourseViewState("landscape")}
            buttonContent="icon"
            buttonSizes="large"
            buttonIcon={BsViewList}
            title={""}
          />
          <Button
            buttonType={courseViewState === "vertical" ? "primary" : "tertiary"}
            buttonContent="icon"
            buttonSizes="large"
            buttonIcon={BsBoundingBox}
            title={""}
            onClick={setCourseViewState("vertical")}
          />
        </div>
      </div>

      {/* Course View Start */}
      <CoursesView viewType={courseViewState} courses={courses} />

      {/* Pagination Section */}
      <div className=" px-2 py-5 flex items-center justify-between">
        <div className="hidden tablet:flex">
          <Button
            extentClassName="shadow-md"
            buttonType="tertiary"
            buttonContent="text-icon"
            buttonSizes="small"
            buttonIcon={AiOutlineDown}
            title="10 items per page"
          />
        </div>
        <div className="flex items-center justify-start">
          <Button
            extentClassName="shadow-md"
            buttonType="tertiary"
            buttonContent="text-icon"
            buttonSizes="small"
            buttonIcon={AiOutlineDown}
            title="page 1 of 5"
          />
          <div className=" px-2 flex items-center justify-start">
            <Button
              extentClassName="shadow-md"
              buttonType="tertiary"
              buttonContent="icon"
              buttonSizes="small"
              buttonIcon={AiOutlineLeft}
              title="left"
            />
            <Button
              extentClassName="shadow-md"
              buttonType="tertiary"
              buttonContent="icon"
              buttonSizes="small"
              buttonIcon={AiOutlineRight}
              title="right"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Courses;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const ITEM_PER_PAGE = 8;
  const data = await fetch(process.env.API_URL || "");
  const result: { courses: CourseType[] } = await data.json();
  let Courses: CourseType[] = [];
  // console.log(result);
  if (ctx.query.page) {
    const startFrom = (parseInt(ctx.query.page as string) - 1) * ITEM_PER_PAGE;
    const endFrom = parseInt(ctx.query.page as string) * ITEM_PER_PAGE;
    Courses = result.courses.slice(startFrom, endFrom);
  } else {
    Courses = result.courses.slice(0, ITEM_PER_PAGE);
  }
  return {
    props: {
      courses: Courses,
    },
  };
}
