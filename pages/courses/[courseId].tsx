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
import AvatarCard from "../../components/AvatarCard";
import LessonCard from "../../components/LessonCard";

interface CoursePageProps {
  course: CourseType;
}

const CoursePage: FC<CoursePageProps> = ({ course }) => {
  
  function renderCourseTitle() {
    return (
      <div className="flex items-end flex-col justify-between">
        <div className="w-full">
          <h3 className="my-2 font-semibold text-xl">{course.title}</h3>
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
      <div className="relative overflow-hidden aspect-video rounded-md desktop:!p-10">
        <Image src={course.thumbnail.url} layout="fill" />
      </div>
    );
  }

  function renderEnrollButton() {
    return (
      <div>
        <Button
          extentClassName="w-20"
          buttonContent="text"
          buttonSizes="large"
          title="Enroll"
          buttonType="primary"
        />
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
      <section className="grid  grid-cols-1 ">
        <div className={`w-full px-2 tablet:px-5 laptop:!pr-[330px] big_desktop:!pr-[500px]`}>
          {renderCourseTitle()}
          {renderVideo()}
          {/* {renderEnrollButton()} */}
          {renderTabs()}
        </div>

        <aside className="w-full bg-white right-0 top-0 h-full laptop:fixed laptop:w-[330px] big_desktop:!w-[500px] laptop:row-span-2 py-2 pt-10 my-3 overflow-y-auto">
          <div className="px-3 w-full">
            <h2 className="text-2xl">About the Course</h2>
            <div className=" py-4">
              <AvatarCard title="Md Omar Faruk" subtitle="Frontend Developer" />
            </div>
            <p className="line-clamp-5 ">{course.description}</p>
          </div>
          <div className="px-3 my-4 w-full ">
            <h2 className="text-2xl">Lessons</h2>
            <div className="grid tablet:grid-cols-2 laptop:!grid-cols-1 gap-4 my-4 grid-flow-row-dense">
              {course.lessons.map((lesson, i) => (
                <LessonCard
                  isCompleted={false}
                  isLocked={lesson.isLock}
                  key={lesson.id}
                  lessonId={lesson.id}
                  lessonTitle={lesson.title}
                  lessonIndex={i + 1}
                />
              ))}
            </div>
          </div>
        </aside>
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
