import { FC } from "react";
import { CourseType, courseViewType } from "../../constants/types";
import CourseView from "../CourseView";

interface CoursesViewProps {
  courses: CourseType[];
  viewType: courseViewType
}

const CoursesView: FC<CoursesViewProps> = ({ courses, viewType }) => {
  function renderCourses() {
    return courses.map(
      ({ catagories, id, rating, title, thumbnail, level, description }) => (
        <CourseView
          viewType={viewType}
          key={id}
          course={{
            catagories,
            id,
            rating,
            title,
            thumbnail,
            level,
            description,
          }}
        />
      )
    );
  }
  return (
    <div 
     
      className={`p-2 grid grid-cols-1  gap-2 justify-items-center ${
        viewType === "landscape"
          ? "tablet:grid-cols-1 w-full desktop:!grid-cols-2"
          : "tablet:grid-cols-2 tablet:!justify-items-start big_desktop:!grid-cols-4 desktop:!grid-cols-3 desktop:!gap-5"
      }`}
    >
      {renderCourses()}
    </div>
  );
};

export default CoursesView;
