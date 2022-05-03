import { AiFillDashboard, AiOutlineRadiusSetting } from "react-icons/ai";
import { MdOutlineDocumentScanner, MdOutlineInventory2 } from "react-icons/md";

export const ROUTES = [
    {
        route: "/dashboard",
        icon: AiFillDashboard,
        title: "Dashboard",
    },
    {
        route: "/inventory",
        icon: MdOutlineInventory2,
        title: "Inventory",
    },
    {
        route: "/documents",
        icon: MdOutlineDocumentScanner,
        title: "Documents",
    },
    {
        route: "/settings",
        icon: AiOutlineRadiusSetting,
        title: "Settings",
    },
];