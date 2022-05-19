import { FC } from "react";
import { CourseType } from "../../constants/types";
import CourseView from "../CourseView";

interface CoursesViewProps {
  courses: CourseType[];
}

const CoursesView: FC<CoursesViewProps> = ({ courses }) => {
  function renderCourses() {
    return courses.map(
      ({ catagories, id, rating, title, thumbnail, level, description }) => (
        <CourseView
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
    <div className="p-2 grid grid-cols-1  gap-2 justify-items-center mobile:grid-cols-2 tablet:!justify-items-start desktop:!grid-cols-3">
      {renderCourses()}
    </div>
  );
};

export default CoursesView;
