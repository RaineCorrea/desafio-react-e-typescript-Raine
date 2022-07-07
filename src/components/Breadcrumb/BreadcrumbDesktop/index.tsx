import React from "react";
import "./style.css";

import home from "../BreadcrumbImages/home-icon.png";
import arrow from "../BreadcrumbImages/home-arrow-right.png";

const BreadcrumbDesktop = () => {
  return (
    <div className="BreadcrumbDesktop">
      <div className="breadcrumb">
        <img className="breadcrumb-img-home" src={home} alt="" />
        <img className="breadcrumb-img-arrow" src={arrow} alt="" />
        <a className="breadcrumb-link" href="">
          INSTITUCIONAL
        </a>
      </div>
    </div>
  );
};

export default BreadcrumbDesktop;
