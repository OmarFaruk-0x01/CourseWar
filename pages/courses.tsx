import type {
  GetServerSideProps,
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
  console.log(courses);

  return (
    <Layout title={"Courses"}>
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
  const ITEM_PER_PAGE = 9;
  const data = await fetch(process.env.API_URL || "");
  const result: { courses: CourseType[] } = await data.json();
  let Courses: CourseType[] = [];
  // console.log(result);
  if (ctx.query.page) {
    const startFrom = (parseInt(ctx.query.page as string) - 1) * 9;
    const endFrom = parseInt(ctx.query.page as string) * 9;
    Courses = result.courses.slice(startFrom, endFrom);
  } else {
    Courses = result.courses.slice(0, 9);
  }
  return {
    props: {
      courses: Courses,
    },
  };
}
