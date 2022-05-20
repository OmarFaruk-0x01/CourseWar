import Link from "next/link";
import { useRouter } from "next/router";
import { ROUTES } from "../../constants/route";
import useWindowSize from "../../hooks/useWindowSize";
import DashboardMenu from "../DashboardMenu";

const UserLeftSideBarContent = () => {
  const router = useRouter();
  const isLaptop = useWindowSize("laptop");
  const isTablet = useWindowSize("tablet");

  return (
    <>
      {ROUTES.map((route) => (
        <Link href={route.path} key={route.title}>
          <a
            href={route.path}
            className="flex flex-1 tablet:flex-[0] justify-center tablet:!justify-between items-center"
          >
            <DashboardMenu
              layoutId="route"
              extentClassName=" text-sm laptop:w-[170px] tablet:hover:bg-white tablet:hover:shadow-md "
              hideText={
                isLaptop
                  ? false
                  : isTablet
                  ? true
                  : !(router.asPath === route.path)
              }
              title={route.title}
              icon={route.icon}
              active={router.asPath === route.path}
            />
          </a>
        </Link>
      ))}
    </>
  );
};

export default UserLeftSideBarContent;
