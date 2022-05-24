export type CommentTypes = {
  id: string;
  student_id: string;
  comment: string;
  replies?: CommentTypes[];
};

export type ReviewType = {
  id: string;
  student_id: string;
  rating: number;
  review: string;
};

// Tags Type
export type TagsType = {
  id: string;
  title: string;
};

// Catagories Types
export type CatagoriesTypes = {
  id: string;
  title: string;
};

// Students Types
export type StudentType = {
  id: string;
  name: string;
};

// Lessons Types
export type LessonObjectType = "video" | "text";
export type LessonTypeVideoResolution = "4K" | "2K" | "HD" | "SD";
export type LessonTypeTextType = "HTML" | "Markdown" | "PlaneText";

export type LessonTypeVideo = {
  id: string;
  videos: {
    url: string;
    resolution: LessonTypeVideoResolution;
  }[];
  duration: number; // in Seconds
};
export type LessonTypeText = {
  id: string;
  type: LessonTypeTextType;
  text: string;
  duration: number; // in Seconds
};
export interface LessonType {
  id: string;
  title: string;
  type: LessonObjectType;
  data: LessonTypeVideo | LessonTypeText;
  isLock: boolean;
}

export type AuthorTypes = {
  id: string;
  name: string;
  sex: string;
  phone: string;
  email: string;
};

// Course Types
export type CourseLevelType =
  | "Expert"
  | "Advance"
  | "Intermediate"
  | "Easy"
  | "Bigener";
export type ThumbnailImage = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

export type CourseShortTypes = {
  id: string;
  title: string;
  thumbnail: ThumbnailImage;
  catagories: CatagoriesTypes;
  rating: number;
  level: CourseLevelType;
  description: string;
};

export interface CourseType extends CourseShortTypes {
  author: AuthorTypes;
  lessons: LessonType[];
  students: StudentType[];
  tags: TagsType[];
  reviews: ReviewType[];
  comments: CommentTypes[];
}

// UI Store Types
export type courseViewType = "landscape" | "vertical";
export type courseTag = "N1" | "N2" | "N3" | "N4" | "N5" | "N6";
export type UIStoreType = {
  isOpenNav: boolean;
  toggleNav: () => void;

  courseView: courseViewType;
  setCourseView: (courseView: courseViewType) => () => void;

  courseTag: courseTag;
  setCourseTag: (courseTag: courseTag) => () => void;

  dropdownMenuId: string;
  setDropDownMenuId: (menuId: string) => () => void;

  coursePerPage: number;
  setCoursePerPage: (num: number) => () => void;

  sideBarToggle: boolean;
  toggleSideBar: () => void;
};

// Main Store Types
export type MainStoreType = {
  courses: CourseType[];
  setCourses: (courses: CourseType[]) => () => void;
};
