import { FC } from "react";
import { CourseType } from "../../constants/types";
import CourseView from "../CourseView";

const Data: CourseType[] = [
  {
    id: "4234234",
    title: "Learn Swift Programming and Object C",
    rating: 5.0,
    level: "Advance",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero debitis dolore quod veniam. Ducimus blanditiis quis itaque reprehenderit explicabo necessitatibus!",
    thumbnail: {
      url: "https://images.unsplash.com/photo-1605379399642-870262d3d051?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506",
      alt: "thumb",
      width: 350,
      height: 250,
    },
    lessons: [
      {
        id: "234234234",
        title: "Introducing Programming. What is Programming?",
        type: "video",
        data: {
          id: "234234324223",
          duration: 2 * 60,
          videos: [
            {
              url: "https://vimo.be/asdaxda",
              resolution: "4K",
            },
            {
              url: "https://vimo.be/asdaxda",
              resolution: "2K",
            },
          ],
        },
        isLock: false,
      },
    ],
    catagories: { id: "234235234", title: "Education" },
    comments: [
      {
        id: "231225123",
        comment: "Awesome Course!!",
        student_id: "56234234523",
      },
    ],
    reviews: [
      {
        id: "643523451",
        rating: 3.4,
        review: "Need to more specific",
        student_id: "3423413514",
      },
    ],
    students: [{ id: "123123", name: "Omar" }],
    tags: [{ id: "123124123", title: "programming" }],
  },
  {
    id: "4234234",
    title: "Learn Swift Programming and Object C",
    rating: 5.0,
    level: "Advance",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero debitis dolore quod veniam. Ducimus blanditiis quis itaque reprehenderit explicabo necessitatibus!",
    thumbnail: {
      url: "https://images.unsplash.com/photo-1605379399642-870262d3d051?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506",
      alt: "thumb",
      width: 350,
      height: 250,
    },
    lessons: [
      {
        id: "234234234",
        title: "Introducing Programming. What is Programming?",
        type: "video",
        data: {
          id: "234234324223",
          duration: 2 * 60,
          videos: [
            {
              url: "https://vimo.be/asdaxda",
              resolution: "4K",
            },
            {
              url: "https://vimo.be/asdaxda",
              resolution: "2K",
            },
          ],
        },
        isLock: false,
      },
    ],
    catagories: { id: "234235234", title: "Education" },
    comments: [
      {
        id: "231225123",
        comment: "Awesome Course!!",
        student_id: "56234234523",
      },
    ],
    reviews: [
      {
        id: "643523451",
        rating: 3.4,
        review: "Need to more specific",
        student_id: "3423413514",
      },
    ],
    students: [{ id: "123123", name: "Omar" }],
    tags: [{ id: "123124123", title: "programming" }],
  },
];

const CoursesView: FC = () => {
  function renderCourses() {
    return Data.map(
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
    <div className="p-2 grid grid-cols-1 mobile:grid-cols-2 gap-2 justify-items-center tablet:!justify-items-start">
      {renderCourses()}
    </div>
  );
};

export default CoursesView;
