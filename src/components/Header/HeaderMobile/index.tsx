import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import m3 from "../HeaderImages/m3-logo.png";
import search from "../HeaderImages/search-logo.png";
import cart from "../HeaderImages/cart-logo.png";
import menu from "../HeaderImages/menu-mobile.png";
import close from "../HeaderImages/close-icon.png";
import "./style.css";

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const element = document.querySelector("body") as HTMLElement;
    element.classList.toggle("scroll");
  }, [isOpen]);

  return (
    <div className="HeaderMobile">
      <div className="page-header">
        <div className="page-header__wrapper container-header">
          <div className="page-header-menu">
            <button
              type="button"
              className="page-header-button-menu"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={`${isOpen ? "Fechar" : "Abrir"} menu`}
            >
              <img src={menu} alt="Abrir menu mobile" />
            </button>

            <div
              className={`mobile-menu ${isOpen ? "active" : "disabled"}`}
              aria-hidden={!isOpen}
            >
              <div className="page-subHeader-link">
                <Link to="/" className="page-subHeader-title cursos">
                  CURSOS
                </Link>
                <Link to="/" className="page-subHeader-title">
                  SAIBA MAIS
                </Link>

                <button
                  className="page-subHeader-close-button"
                  type="button"
                  onClick={() => setIsOpen(false)}
                >
                  <img src={close} alt="" />
                </button>
              </div>
            </div>

            <a className="page-header__link-logo" href="sobre">
              <img
                className="page-header__logo"
                src={m3}
                alt="Logo M3 Academy"
              />
            </a>
            <div className="page-header-links">
              <button className="page-header__button-cart">
                <img className="page-header__cart" src={cart} alt="" />
              </button>
            </div>
          </div>

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
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
