import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { NavRouteTypes, NAV_ROUTES } from "../../constants/route";
import { motion } from 'framer-motion';

interface NavMenuProps extends NavRouteTypes {}
//mx-3 px-2 flex flex-row items-center justify-center gap-2 
const NavMenu: FC<NavMenuProps> = ({ route, title }) => {
  const router = useRouter()
  const isActive = router.asPath === route 
  return (
    <Link href={route}>
      <a className="relative px-2 py-3 my-1 flex items-center ">
        {isActive ? (
          <motion.span initial={{opacity: 0}} animate={{opacity: 1}} layoutId="nav_route" className="absolute block left-0 w-1 h-full   bg-primary-500" />
        ) : null}

        <span className="text-">{title}</span>
        <span></span>
      </a>
    </Link>
  );
};

export default NavMenu;
