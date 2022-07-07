import React, { useState, useEffect } from "react";
import { Newsletter } from "../Newsletter";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

import "./style.css";

const Footer = () => {
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

  return (
    <footer>
      <Newsletter />
      {width <= 768 ? <FooterMobile /> : <FooterDesktop />}
    </footer>
  );
};

export default Footer;
