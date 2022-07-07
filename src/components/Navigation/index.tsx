import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NavigationDesktop from "./NavigationDesktop";
import NavigationMobile from "./NavigationMobile";

import "./style.css";

const Navigation = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return <>{width <= 768 ? <NavigationMobile /> : <NavigationDesktop />}</>;
};

export default Navigation;
