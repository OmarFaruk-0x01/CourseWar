import { FC } from "react";
import { useRouter } from "next/router";
import { ROUTES } from "../../constants/route";
import Link from "next/link";
import DashboardMenu from "../../components/DashboardMenu/index";
import useWindowSize from "../../hooks/useWindowSize";

const Navbar: FC<{}> = () => {
  const router = useRouter();
  const isHide = useWindowSize("laptop");

  return (
    <nav className="fixed bottom-0 w-full grid bg-white py-3 grid-cols-4 items-center justify-start z-10 justify-items-center tablet:sticky tablet:top-[20px] tablet:bg-transparent tablet:flex tablet:flex-col tablet:w-[70px] tablet:h-full  tablet:border-r-2 tablet:gap-2 laptop:!w-[190px]">
      {ROUTES.map((route) => (
        <Link href={route.route} key={route.route}>
          <DashboardMenu
            extentClassName="text-sm laptop:w-[170px] tablet:hover:bg-white tablet:hover:shadow-md "
            hideText={!isHide}
            title={route.title}
            icon={route.icon}
            active={router.asPath === route.route}
          />
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
