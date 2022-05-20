import { AiFillDashboard, AiOutlineRadiusSetting } from "react-icons/ai";
import {
  MdOutlineDocumentScanner,
  MdOutlineInventory2,
  MdSettings,
} from "react-icons/md";

export const ROUTES = [
  {
    path: "/dashboard",
    icon: AiFillDashboard,
    title: "Dashboard",
  },
  {
    path: "/courses",
    icon: MdOutlineInventory2,
    title: "Courses",
  },
  {
    path: "/books",
    icon: MdOutlineDocumentScanner,
    title: "Books",
  },
  {
    path: "/settings",
    icon: MdSettings,
    title: "Settings",
  },
];

export const NAV_ROUTES = [
  {
    route: "/",
    title: "Home",
  },
  {
    route: "/courses",
    title: "Courses",
  },
  {
    route: "/books",
    title: "Books",
  },
  {
    route: "/about-us",
    title: "About Us",
  },
];


export type NavRouteTypes = typeof NAV_ROUTES[0]