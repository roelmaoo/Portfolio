import { useEffect } from "react";
import {
  useLocation,
  useNavigationType,
} from "react-router-dom";

export default function ScrollManager() {
  const { pathname, key } = useLocation();
  const navigationType = useNavigationType();

  // Save the current scroll position
  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem(
        `scroll-${key}`,
        window.scrollY.toString()
      );
    };

    window.addEventListener("scroll", saveScrollPosition);

    return () => {
      window.removeEventListener("scroll", saveScrollPosition);
    };
  }, [key]);

  // Handle navigation
  useEffect(() => {
    window.history.scrollRestoration = "manual";

    const savedPosition = sessionStorage.getItem(`scroll-${key}`);

    if (navigationType === "POP" && savedPosition) {
      // Browser Back / Forward
      window.scrollTo({
        top: Number(savedPosition),
        behavior: "instant",
      });
    } else {
      // New navigation
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [pathname, key, navigationType]);

  return null;
}