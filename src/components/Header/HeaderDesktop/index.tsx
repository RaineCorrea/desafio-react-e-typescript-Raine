import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import m3 from "../HeaderImages/m3-logo.png";
import search from "../HeaderImages/search-logo.png";
import cart from "../HeaderImages/cart-logo.png";

const HeaderDesktop = () => {
  return (
    <div className="HeaderDesktop">
      <div className="page-header">
        <div className="page-header__wrapper container-header">
          <a className="page-header__link-logo" href="sobre">
            <img className="page-header__logo" src={m3} alt="Logo M3 Academy" />
          </a>
          <div className="page-header__search">
            <input
              placeholder="Buscar..."
              className="page-header__input__search"
              type="text"
            />
            <button className="page-header__icon">
              <img
                className="page-header__img__search"
                src={search}
                alt="Icone Lupa Header"
              />
            </button>
          </div>
          <div className="page-header-links">
            <NavLink to="/" className="page-header__login">
              ENTRAR
            </NavLink>
            <button className="page-header__button">
              <img className="page-header__cart" src={cart} alt="" />
            </button>
          </div>
        </div>
        <div className="page-subHeader">
          <div className="container-header">
            <div className="page-subHeader-links">
              <NavLink to="/" className="page-subHeader-title cursos">
                CURSOS
              </NavLink>
              <NavLink to="/" className="page-subHeader-title">
                SAIBA MAIS
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDesktop;
