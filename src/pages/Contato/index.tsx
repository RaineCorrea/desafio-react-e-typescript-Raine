import React, { useState } from "react";

import { CustomForm } from "../../components/CustomForm";
import Navigation from "../../components/Navigation";
import Breadcrumb from "../../components/Breadcrumb";

import "./style.css";

const Contato = () => {
  return (
    <div className="contato">
      <div className="container-contato">
        <div>
          <Breadcrumb />
          <div className="contato-navigation">
            <Navigation />
          </div>
        </div>
        <CustomForm />
      </div>
    </div>
  );
};

export default Contato;
