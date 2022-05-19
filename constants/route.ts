import { AiFillDashboard, AiOutlineRadiusSetting } from "react-icons/ai";
import { MdOutlineDocumentScanner, MdOutlineInventory2, MdSettings } from "react-icons/md";

export const ROUTES = [
    {
        route: "/dashboard",
        icon: AiFillDashboard,
        title: "Dashboard",
    },
    {
        route: "/courses",
        icon: MdOutlineInventory2,
        title: "Courses",
    },
    {
        route: "/books",
        icon: MdOutlineDocumentScanner,
        title: "Books",
    },
    {
        route: "/settings",
        icon: MdSettings,
        title: "Settings",
    },
];