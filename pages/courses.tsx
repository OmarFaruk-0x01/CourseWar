import type {
  GetServerSidePropsContext,
  NextPage,
} from "next";
import CoursesView from "../components/CoursesView";
import Search from "../components/Search";
import TableHeader from "../components/TableHeader";
import TableRow from "../components/TableRow";
import TableView from "../components/TableView";
import customData from "../constants/customData";
import Layout from "../layouts/Layout";
import CourseView from "../components/CourseView/index";
import { CourseType } from "../constants/types";

const Courses: NextPage<{ courses: CourseType[] }> = ({ courses }) => {
  return (
    <Layout title={"Courses"} withSidebar>
      <div className="bg-white rounded-md">
        <div className="p-3 py-5 tablet:flex items-center justify-start">
          <Search extentClassName="tablet:min-w-[400px]" />
        </div>
        <CoursesView courses={courses} />
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
