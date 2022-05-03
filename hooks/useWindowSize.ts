import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import breakpoints from "../constants/breakpoints";

const useWindowSize: (breakpoint: keyof typeof breakpoints) => boolean = (
  breakpoint
) => {
  
  const [isHide, setIsHide] = useState(false);
  useEffect(() => {
    if (window) {
      if (
        window.innerWidth >= parseInt(breakpoints[breakpoint].replaceAll("px", ""))
      ) {
        setIsHide(true);
      } else {
        setIsHide(false);
      }
      const func = (ev: Event) => {
        const target = ev.target as Window;
        if (
          target.innerWidth >= parseInt(breakpoints[breakpoint].replaceAll("px", ""))
        ) {
          setIsHide(true);
        } else {
          setIsHide(false);
        }
      };
      const wev = window.addEventListener("resize", func);

      return () => {
        removeEventListener("resize", func);
      };
    }
  }, []);
  return isHide;
};

export default useWindowSize;