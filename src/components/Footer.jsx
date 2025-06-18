import React from "react";
import { mainMenu } from "../store/menu";
import imgd207b8fbfd66032909fbe79073f45685 from "../img/d207b8fbfd66032909fbe79073f45685.svg";
import gerb from "../img/gerb.svg";
import img34512673ce61b0db299f7e2405ac60e9 from "../img/34512673ce61b0db299f7e2405ac60e9.svg";
import img7ad387832d629a52c87195d9cb795e3c from "../img/7ad387832d629a52c87195d9cb795e3c.svg";
import img639bae9c47ff56a3f33bc8f8b49a4e9b from "../img/639bae9c47ff56a3f33bc8f8b49a4e9b.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  const handlerOpenAccordion = (event) => {
    //console.log(event.currentTarget)
    document.querySelectorAll(".page-footer__block").forEach((item) => {
      if (event.currentTarget == item) {
        return;
      }
      item.classList.remove("open-accordion");
      item.querySelector(".caption-row").classList.remove("active");
      if (item.querySelector(".accordion-content")) {
        item.querySelector(".accordion-content").style.maxHeight = "";
      }
    });
    event.currentTarget.classList.toggle("open-accordion");
    event.currentTarget
      .querySelector(".caption-row")
      .classList.toggle("active");
    const drop = event.currentTarget.querySelector(".accordion-content");
    if (drop.style.maxHeight == "") {
      drop.style.maxHeight = `${drop.scrollHeight}px`;
    } else {
      drop.style.maxHeight = "";
    }
    // if (event.currentTarget.querySelector(".accordion-content").style.maxHeight == "inherit") {
    //   event.currentTarget.querySelector(".accordion-content").style.maxHeight = "";
    // } else {
    //   event.currentTarget.querySelector(".accordion-content").style.maxHeight = "inherit";
    // }
  };
  return (
    <footer>
      <section
        className="line-contacts"
        id="i-25-i-24-bitrix-news-list-line-contacts-asDrK55qWv5z"
      >
        <div className="container">
          <div className="line-contacts__wrapper">
            <div className="line-contacts__wrap">
              <img
                className="sm-icon"
                src={imgd207b8fbfd66032909fbe79073f45685}
                alt="icon"
              />
              <span className="sm-text">
                Горячая линия «Мособлэнерго» По вопросам аварийных отключений и
                качеству электроэнергии{" "}
              </span>
              <a
                className="tel"
                href="tel:+74959950099"
                title="Горячая линия «Мособлэнерго» По вопросам аварийных отключений и качеству электроэнергии"
              >
                +7 (495) 99-500-99
              </a>
            </div>
            <div className="line-contacts__wrap">
              <img
                className="sm-icon"
                src={imgd207b8fbfd66032909fbe79073f45685}
                alt="icon"
              />
              <span className="sm-text">
                Технологическое присоединение Консультации по вопросам
                присоединения к электросети{" "}
              </span>
              <a
                className="tel"
                href="tel:+74957850000"
                title="Технологическое присоединение Консультации по вопросам присоединения к электросети"
              >
                +7 (495) 785-00-00
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="page-footer">
        <div className="container">
          <div
            className="page-footer__wrapper"
            id="i-11-i-10-bitrix-menu-footer-NMQc3w6cRZPp"
          >
            {mainMenu &&
              mainMenu.map((item, index) => (
                <div
                  className="page-footer__block"
                  key={index}
                  onClick={item.link == "" ? handlerOpenAccordion : null}
                >
                  <div className="caption-row">
                    {item.link == "" ? (
                      <span className="caption-row__caption">
                        {item.mainTitle}
                      </span>
                    ) : (
                      <Link className="caption-row__caption" to={item.link}>
                        {item.mainTitle}
                      </Link>
                    )}

                    <span className="caption-row__plus"></span>
                  </div>
                  {item.submenu.length > 1 ? (
                    <div className="accordion-content">
                      <ul className="footer-nav-list">
                        {item.submenu.map((item, index) => (
                          <li className="footer-nav-list__item" key={index}>
                            <Link
                              className="footer-nav-list__link"
                              to={item.link}
                            >
                              {" "}
                              <div className="footer-nav-list__wrap-arrow">
                                <svg className="footer-nav-list__arrow">
                                  <path
                                    d="M42.7143 9L47 5M47 5L42.7143 0.999999M47 5L1 5"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <span className="footer-nav-list__text">
                                {item.title}
                              </span>
                            </Link>{" "}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    false
                  )}
                </div>
              ))}
          </div>
          <div className="page-footer__down">
            <div className="page-footer__flex">
              <div
                className="footer-link-kompany"
                id="i-13-i-12-bitrix-menu-footer-link-kompany-mKUqxKGMvHpP"
              >
                <img
                  className="footer-link-kompany__logo"
                  src={gerb}
                  alt="Герб"
                />
                <a
                  className="footer-link-kompany__link"
                  href="https://mosreg.ru/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Правительство московской области</span>
                </a>
                <a
                  className="footer-link-kompany__link"
                  href="https://minenergo.mosreg.ru/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Министерство энергетики Московской области</span>
                </a>
              </div>
              <div
                className="social"
                id="i-25-i-24-bitrix-news-list-social-ZF1lvfcvg99a"
              >
                <span className="social__text">Мы в социальных сетях</span>
                <ul className="social__list">
                  <li className="social__item">
                    <a
                      className="social__link"
                      href="https://vk.com/mosoblenergo"
                      title="Вконтакте"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img
                        className="social__icon"
                        src={img34512673ce61b0db299f7e2405ac60e9}
                        alt="Вконтакте"
                      />
                    </a>
                  </li>
                  <li className="social__item">
                    <a
                      className="social__link"
                      href="https://ok.ru/mosoblenergo"
                      title="Одноклассники"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img
                        className="social__icon"
                        src={img7ad387832d629a52c87195d9cb795e3c}
                        alt="Одноклассники"
                      />
                    </a>
                  </li>
                  <li className="social__item">
                    <a
                      className="social__link"
                      href="https://t.me/mosoblenergo"
                      title="Telegram"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img
                        className="social__icon"
                        src={img639bae9c47ff56a3f33bc8f8b49a4e9b}
                        alt="Telegram"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="footer-wrap-link"
                id="i-15-i-14-bitrix-menu-footer-wrap-link-QCJ7JgRxyjuV"
              >
                {/* <a className="footer-wrap-link__row" href="#">
                  <div className="footer-wrap-link__wrap-arrow">
                    <svg className="footer-nav-list__arrow">
                      <path d="M42.7143 9L47 5M47 5L42.7143 0.999999M47 5L1 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="footer-wrap-link__text">Карта сайта</span>
                </a> */}
                <a
                  className="footer-wrap-link__row"
                  href="http://www.consultant.ru/cons/cgi/online.cgi?from=221444-0&amp;rnd=B368155CDEE9313B15DF85BD2F39D334&amp;req=doc&amp;base=LAW&amp;n=372838&amp;REFDOC=221444&amp;REFBASE=LAW#a9yu0niwfqw"
                >
                  <div className="footer-wrap-link__wrap-arrow">
                    <svg className="footer-nav-list__arrow">
                      <path
                        d="M42.7143 9L47 5M47 5L42.7143 0.999999M47 5L1 5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="footer-wrap-link__text">
                    Политика конфиденциальности
                  </span>
                </a>
              </div>
              <div className="page-footer__block-text">
                <span className="page-footer__text">
                  Copyright © {new Date().getFullYear()}{" "}
                  <b>АО «Мособлэнерго».</b>{" "}
                </span>
                <span className="page-footer__text">Все права защищены. </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
