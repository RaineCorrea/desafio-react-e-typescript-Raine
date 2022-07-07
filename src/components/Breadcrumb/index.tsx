import React, { useEffect, useState } from "react";
import BreadcrumbDesktop from "./BreadcrumbDesktop";
import BreadcrumbMobile from "./BreadcrumbMobile";
import "./style.css";

const Breadcrumb = () => {
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

  return <>{width <= 768 ? <BreadcrumbMobile /> : <BreadcrumbDesktop />}</>;
};

export default Breadcrumb;
