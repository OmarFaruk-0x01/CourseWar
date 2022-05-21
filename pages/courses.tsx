import type { GetServerSidePropsContext, NextPage } from "next";
import { CourseType } from "../constants/types";
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

const Courses: NextPage<{ courses: CourseType[] }> = ({ courses }) => {
  const courseViewState = useUIStore((state) => state.courseView);
  const setCourseViewState = useUIStore((state) => state.setCourseView);
  return (
    <Layout title={"Courses"} renderLeftSideBar={<UserLeftSideBarContent />}>
      <div className="bg-white rounded-md">
        {/* Filter Section Start */}
        <div className="p-3 py-5 tablet:flex items-center justify-between sticky bg-white">
          <div className="flex items-center justify-center ">
            <Search extentClassName="tablet:min-w-[400px] w-full" />
          </div>

          <div className="flex items-center justify-between mt-3 flex-row-reverse">
            <div className="">
              <DropDownMenu
                renderButton={(toggle) => (
                  <Button
                  extentClassName="w-full "
                    onClick={toggle}
                    buttonType="tertiary"
                    buttonContent="text-icon"
                    buttonSizes="small"
                    buttonIcon={BsChevronDown}
                    title={"Categories"}
                  />
                )}
                renderMenus={() => <></>}
              />
            </div>
            <div className="flex items-center justify-between">
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
                buttonType={
                  courseViewState === "vertical" ? "primary" : "tertiary"
                }
                buttonContent="icon"
                buttonSizes="large"
                buttonIcon={BsBoundingBox}
                title={""}
                onClick={setCourseViewState("vertical")}
              />
            </div>
          </div>
        </div>
        {/* Filter Section End */}

        {/* Course View Start */}
        <CoursesView courses={courses} />
        {/* Course View Start */}
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
