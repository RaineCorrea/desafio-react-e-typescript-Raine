import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

const NavigationDesktop = () => {
  return (
    <div className="NavigationDesktop">
      <div className="menu-navigator">
        <div className="menu-navigator-titles">
          <div className="menu-description menu-description-first">
            <NavLink
              to="/sobre"
              className={({ isActive }) =>
                isActive ? "ativo menu-link" : "menu-link"
              }
            >
              Sobre
            </NavLink>
          </div>
          <div className="menu-description">
            <NavLink
              to="/forma-de-pagamento"
              className={({ isActive }) =>
                isActive ? "ativo menu-link" : "menu-link"
              }
            >
              Forma de Pagamento
            </NavLink>
          </div>
          <div className="menu-description">
            <NavLink
              to="/entrega"
              className={({ isActive }) =>
                isActive ? "ativo menu-link" : "menu-link"
              }
            >
              Entrega
            </NavLink>
          </div>
          <div className="menu-description">
            <NavLink
              to="/troca-e-devolucao"
              className={({ isActive }) =>
                isActive ? "ativo menu-link" : "menu-link"
              }
            >
              Troca e Devolução
            </NavLink>
          </div>
          <div className="menu-description">
            <NavLink
              to="/seguranca-e-privacidade"
              className={({ isActive }) =>
                isActive ? "ativo menu-link" : "menu-link"
              }
            >
              Segurança e Privacidade
            </NavLink>
          </div>
          <div className="menu-description">
            <NavLink
              to="/contato"
              className={({ isActive }) =>
                isActive ? "ativo menu-link" : "menu-link"
              }
            >
              Contato
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationDesktop;
