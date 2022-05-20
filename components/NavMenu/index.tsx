import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { NavRouteTypes, NAV_ROUTES } from "../../constants/route";
import { motion } from "framer-motion";

interface NavMenuProps extends NavRouteTypes {}
//mx-3 px-2 flex flex-row items-center justify-center gap-2
const NavMenu: FC<NavMenuProps> = ({ route, title }) => {
  const router = useRouter();
  const isActive = router.asPath === route;
  return (
    <Link href={route}>
      <a className="group relative px-2 py-2 my-1 mx-2 flex items-center hover:!text-primary-500 ">
        {isActive ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            layoutId="nav_route"
            className="absolute block left-0 w-1 h-full bg-primary-500 tablet:w-full tablet:h-1 tablet:bottom-0 rounded-full tablet:group-hover:h-full"
          />
        ) : null}

        <span
          className={`text-md group-hover:text-primary-500 ${
            isActive ? "text-primary-500" : ""
          }`}
        >
          {title}
        </span>
        <span className="bg-primary inline-block absolute bottom-0 right-0 w-full group-hover:h-full"></span>
      </a>
    </Link>
  );
};

export default NavMenu;
