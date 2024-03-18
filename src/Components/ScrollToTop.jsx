import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Scroll to the top when route changes
    window.scrollTo(0, 0);

    // Scroll to top on component mount (page load)
    // window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default ScrollToTop;
