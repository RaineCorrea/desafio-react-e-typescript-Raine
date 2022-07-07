import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";

import facebook from "../FooterImages/facebook-icon.png";
import instagram from "../FooterImages/instagram-icon.png";
import twitter from "../FooterImages/twitter-icon.png";
import youtube from "../FooterImages/youtube-icon.png";
import linkedin from "../FooterImages/linkedin-icon.png";
import mastercard from "../FooterImages/mastercard-icon.png";
import visa from "../FooterImages/visa-icon.png";
import american from "../FooterImages/american-icon.png";
import elo from "../FooterImages/elo-icon.png";
import hiper from "../FooterImages/hiper-icon.png";
import paypal from "../FooterImages/paypal-icon.png";
import boleto from "../FooterImages/boleto-icon.png";
import vtexPCI from "../FooterImages/vtex-pci-icon.png";
import vtex from "../FooterImages/vtex-icon.png";
import m3 from "../FooterImages/m3-icon.png";
import mais from "../FooterImages/mais-icon.png";

import "./style.css";

type toggleStateType = {
  state: boolean;
  modifier: React.Dispatch<React.SetStateAction<boolean>>;
};

const FooterMobile = () => {
  const [isInstitutionalActive, setInstitutionalActive] =
    useState<boolean>(true);

  const toggleStateInstitucional = ({ state, modifier }: toggleStateType) => {
    modifier(!state);
  };

  const [isDuvidaActive, setDuvidaActive] = useState<boolean>(true);

  const toggleStateDuvida = ({ state, modifier }: toggleStateType) => {
    modifier(!state);
  };

  const [isFaleActive, setFaleActive] = useState<boolean>(true);

  const toggleStateFale = ({ state, modifier }: toggleStateType) => {
    modifier(!state);
  };

  return (
    <div className="footer-mobile">
      <div className="container-footer">
        <div className="footer-links__wrapper">
          <div className="footer-links__column">
            <h4
              className="footer-links__title"
              onClick={() =>
                toggleStateInstitucional({
                  state: isInstitutionalActive,
                  modifier: setInstitutionalActive,
                })
              }
            >
              INSTITUCIONAL{" "}
              <span className="footer-mobile-mais">
                {" "}
                <img src={mais} alt="" />
              </span>
            </h4>

            {isInstitutionalActive && (
              <ul className="footer-links__itens-list">
                <li className="footer-links__item">
                  <NavLink
                    to="/institucional/quem-somos"
                    className="footer-links__link"
                  >
                    Quem somos
                  </NavLink>
                </li>

                <li className="footer-links__item">
                  <NavLink
                    to="/institucional/politica-de-privacidade"
                    className="footer-links__link"
                  >
                    Política de Privacidade
                  </NavLink>
                </li>

                <li className="footer-links__item">
                  <NavLink
                    to="/institucional/seguranca"
                    className="footer-links__link"
                  >
                    Segurança
                  </NavLink>
                </li>

                <li className="footer-links__item">
                  <NavLink
                    to="/institucional/seja-um-revendedor"
                    className="footer-links__link"
                  >
                    Seja um Revendedor
                  </NavLink>
                </li>
              </ul>
            )}
          </div>

          <div className="footer-links__column">
            <h4
              className="footer-links__title"
              onClick={() =>
                toggleStateDuvida({
                  state: isDuvidaActive,
                  modifier: setDuvidaActive,
                })
              }
            >
              DÚVIDAS{" "}
              <span className="footer-mobile-mais duvidas">
                {" "}
                <img src={mais} alt="" />
              </span>
            </h4>

            {isDuvidaActive && (
              <ul className="footer-links__itens-list">
                <li className="footer-links__item">
                  <NavLink to="/duvidas/entrega" className="footer-links__link">
                    Entrega
                  </NavLink>
                </li>

                <li className="footer-links__item">
                  <NavLink
                    to="/duvidas/pagamento"
                    className="footer-links__link"
                  >
                    Pagamento
                  </NavLink>
                </li>

                <li className="footer-links__item">
                  <NavLink
                    to="/duvidas/troca-e-devolucoes"
                    className="footer-links__link"
                  >
                    Troca e Devoluções
                  </NavLink>
                </li>

                <li className="footer-links__item">
                  <NavLink
                    to="/duvidas/duvidas-frequentes"
                    className="footer-links__link"
                  >
                    Dúvidas Frequentes
                  </NavLink>
                </li>
              </ul>
            )}
          </div>

          <div className="footer-links__column">
            <h4
              className="footer-links__title"
              onClick={() =>
                toggleStateFale({
                  state: isFaleActive,
                  modifier: setFaleActive,
                })
              }
            >
              FALE CONOSCO{" "}
              <span className="footer-mobile-mais">
                {" "}
                <img src={mais} alt="" />
              </span>
            </h4>
            {isFaleActive && (
              <ul className="footer-links__itens-list">
                <li className="footer-links__item">
                  <span className="footer-links__title">
                    Atendimento ao Consumidor
                  </span>
                </li>

                <li className="footer-links__item">
                  <a className="footer-links__link" href="tel:1141599504">
                    (11) 4159 9504
                  </a>
                </li>

                <li className="footer-links__item">
                  <span className="footer-links__title">
                    Atendimento Online
                  </span>
                </li>

                <li className="footer-links__item">
                  <a className="footer-links__link" href="tel:11994338825">
                    (11) 99433-8825
                  </a>
                </li>
              </ul>
            )}
          </div>

          <div className="footer-links__column">
            <ul className="footer-links__itens-list footer-links__itens-list--social-networks">
              <li>
                <a href="#" target="_blank" title="Facebook">
                  <i className="footer-links__icon">
                    <img
                      className="footer-links__icon__social"
                      src={facebook}
                      alt="Ícone do Facebook"
                    />
                  </i>
                </a>
              </li>

              <li>
                <a href="#" target="_blank" title="Instagram">
                  <i className="footer-links__icon">
                    <img
                      className="footer-links__icon__social"
                      src={instagram}
                      alt="Ícone do Instagram"
                    />
                  </i>
                </a>
              </li>

              <li>
                <a href="#" target="_blank" title="Twitter">
                  <i className="footer-links__icon">
                    <img
                      className="footer-links__icon__social"
                      src={twitter}
                      alt="Ícone do Twitter"
                    />
                  </i>
                </a>
              </li>

              <li>
                <a href="#" target="_blank" title="Youtube">
                  <i className="footer-links__icon">
                    <img
                      className="footer-links__icon__social"
                      src={youtube}
                      alt="Ícone do Youtube"
                    />
                  </i>
                </a>
              </li>

              <li>
                <a href="#" target="_blank" title="Linkedin">
                  <i className="footer-links__icon">
                    <img
                      className="footer-links__icon__social"
                      src={linkedin}
                      alt="Ícone do Linkedin"
                    />
                  </i>
                </a>
              </li>
            </ul>
            <a className="footer-links__social" href="#">
              www.loremipsum.com
            </a>
          </div>
        </div>
      </div>

      <section className="footer-infos">
        <div className="container-footer">
          <div className="footer-infos__labels">
            <ul className="footer-infos__payment">
              <li>
                <i className="footer-links__bandeiras">
                  <img className="payment" src={mastercard} alt="" />
                </i>

                <i className="footer-links__bandeiras">
                  <img className="payment" src={visa} alt="" />
                </i>

                <i className="footer-links__bandeiras">
                  <img className="payment" src={american} alt="" />
                </i>

                <i className="footer-links__bandeiras">
                  <img className="payment" src={elo} alt="" />
                </i>

                <i className="footer-links__bandeiras">
                  <img className="payment" src={hiper} alt="" />
                </i>

                <i className="footer-links__bandeiras">
                  <img className="payment" src={paypal} alt="" />
                </i>

                <i className="footer-links__bandeiras">
                  <img className="payment" src={boleto} alt="" />
                </i>
              </li>

              <div className="footer-infos__divider"></div>

              <ul className="footer-infos__security">
                <li>
                  <i className="footer-links__bandeiras">
                    <img className="vtexPCI" src={vtexPCI} alt="" />
                  </i>
                </li>
              </ul>
            </ul>
            <div className="footer-infos-text">
              <span className="footer-infos__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </span>
            </div>

            <div className="footer-infos-company">
              <div className="footer-infos__devlopment">
                <a href="https://vtex.com/" target="_blank">
                  <span>Powered by</span>
                  <i className="footer-links__bandeiras">
                    <img className="vtex" src={vtex} alt="" />
                  </i>
                </a>

                <a href="https://m3ecommerce.com/" target="_blank">
                  <span>Developed by</span>
                  <i className="footer-links__bandeiras">
                    <img className="m3" src={m3} alt="" />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FooterMobile;
