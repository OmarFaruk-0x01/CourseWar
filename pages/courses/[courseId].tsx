import Image from "next/image";
import { FC } from "react";
import Layout from "../../layouts/Layout";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineHeart } from "react-icons/ai";
import Button from "../../components/Button";
import { GetServerSidePropsContext } from "next";
import { CourseType } from "../../constants/types";
import UserLeftSideBarContent from "../../components/UserLeftSideBarContent";
import { useRouter } from "next/router";
import { BiBookmarkAlt, BiShareAlt } from "react-icons/bi";
import TabsView from "../../components/TabsView";
import TabView from "../../components/TabView";
import CourseDescription from "../../components/CourseDescription";
import CourseReviews from "../../components/CourseReview";

interface CoursePageProps {
  course: CourseType;
}

const CoursePage: FC<CoursePageProps> = ({ course }) => {
  console.log(course);
  const router = useRouter();
  console.log(router);

  function renderCourseTitle() {
    return (
      <div className="flex items-end flex-col justify-between">
        <div className="w-full">
          <h3 className="my-2 font-bold text-xl">{course.title}</h3>
          <h5 className="my-2 font-normal text-lg text-gray-400">
            {course.author.name}
          </h5>
        </div>
        <div className="flex pb-2">
          <Button
            buttonContent="icon"
            buttonIcon={BiShareAlt}
            buttonSizes="small"
            title="icon"
          />
          <Button
            buttonContent="icon"
            buttonIcon={BiBookmarkAlt}
            buttonSizes="small"
            title="icon"
          />
        </div>
      </div>
    );
  }

  function renderVideo() {
    return (
      <div className="relative overflow-hidden aspect-video rounded-md">
        <Image src={course.thumbnail.url} layout="fill" />
      </div>
    );
  }

  function renderTabs() {
    return (
      <TabsView
        tabsTitles={[
          "Description",
          "Reviews",
          "Discussion",
          "Resources",
          "Instructor",
        ]}
      >
        {({ tabs, currentTab }) => (
          <AnimatePresence exitBeforeEnter>
            {/* Description Tab */}
            {tabs[0] === currentTab && (
              <motion.div
                key={tabs[0]}
                transition={{ type: "liner" }}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
              >
                <TabView title={tabs[0]} active={tabs[0] === currentTab}>
                  <CourseDescription text={course.description} isHtml={false} />
                </TabView>
              </motion.div>
            )}

            {tabs[1] === currentTab && (
              <motion.div
                key={tabs[1]}
                transition={{ type: "liner" }}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
              >
                <TabView title={tabs[1]} active={tabs[1] === currentTab}>
                  <CourseReviews />
                </TabView>
              </motion.div>
            )}
{/* 
            {tabs[2] === currentTab && (
              <motion.div
                key={tabs[2]}
                transition={{ type: "liner" }}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
              >
                <TabView title={tabs[2]} active={tabs[2] === currentTab}>
                  <h1>{tabs[2]}</h1>
                </TabView>
              </motion.div>
            )}

            {tabs[3] === currentTab && (
              <motion.div
                key={tabs[3]}
                transition={{ type: "liner" }}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
              >
                <TabView title={tabs[3]} active={tabs[3] === currentTab}>
                  <h1>{tabs[3]}</h1>
                </TabView>
              </motion.div>
            )}

            {tabs[4] === currentTab && (
              <motion.div
                key={tabs[4]}
                transition={{ type: "liner" }}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
              >
                <TabView title={tabs[4]} active={tabs[4] === currentTab}>
                  <h1>{tabs[4]}</h1>
                </TabView>
              </motion.div>
            )} */}
          </AnimatePresence>
        )}
      </TabsView>
    );
  }

  return (
    <Layout
      renderLeftSideBar={(props) => <UserLeftSideBarContent {...props} />}
    >
      <section className="grid  grid-cols-1 laptop:grid-cols-[3fr_1fr]">
        <div className={`w-full px-2 tablet:px-5 laptop:!px-5 laptop:!pr-10`}>
          {renderCourseTitle()}
          {renderVideo()}
          {renderTabs()}
        </div>
        <aside className="w-full h-full laptop:row-span-2 bg-green-300"></aside>
      </section>
    </Layout>
  );
};

export default CoursePage;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const data = await fetch(
    process.env.API_URL + "/courses/" + ctx?.params?.courseId || ""
  );
  const result: CourseType = await data.json();

  return {
    props: {
      course: result,
    },
  };
}
