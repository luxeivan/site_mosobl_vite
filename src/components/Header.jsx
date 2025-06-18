import React, { useEffect, useState } from "react";
import { useHref, useLocation, useNavigate } from "react-router";
import { mainMenu } from "../store/menu";
import logo from "../img/header/logo_20yearold_3.png";
import logo2 from "../img/header/logo_20yearold_1.png";
import logoTwo from "../img/header/logo_20yearold_1.png";
// import logo from "../img/logo.svg";
// import logo2 from "../img/logo2.svg";
// import logoTwo from "../img/logo-two.svg";
// import pobeda from "../img/Pobeda80_logo_main.png";
// import firstScreenLogo from "../img/header/logo_20yearold_2.png";
import searchIcon2 from "../img/search-icon2.svg";
import firstScreenLogo from "../img/first-screen-logo.svg";
import img34512673ce61b0db299f7e2405ac60e9 from "../img/34512673ce61b0db299f7e2405ac60e9.svg";
import img7ad387832d629a52c87195d9cb795e3c from "../img/7ad387832d629a52c87195d9cb795e3c.svg";
import img639bae9c47ff56a3f33bc8f8b49a4e9b from "../img/639bae9c47ff56a3f33bc8f8b49a4e9b.svg";
import img629d5332fa7791fcb59127d93f320c66 from "../img/629d5332fa7791fcb59127d93f320c66.jpg";
import { Link } from "react-router-dom";
import { Flex, Typography } from "antd";

export default function Header() {
  const [scroll, setScroll] = useState();
  const [openMobMenu, setOpenMobMenu] = useState(false);
  const [openSearchLine, setOpenSearchLine] = useState(false);
  const hreff = useHref();
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      //console.log("window.scrollY", window.scrollY);
      if (window.scrollY > 0 && scroll !== "sticky") {
        setScroll("sticky");
      } else {
        setScroll("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    setOpenMobMenu(false);
  }, [location]);
  return (
    <header>
      <section
        className={`page-header vg-modal-fixed ${scroll}  ${openSearchLine ? "hide-line" : ""
          }`}
        id="myHeader"
      >
        <div className="container">
          <div className="page-header__container">
            <div className="page-header__up">
              <div className="page-header__flex">
                <div className="page-header__left">
                  <Link
                    className="wrap-logo"
                    to="/"
                    id="i-1-i-0-bitrix-main-include-header-logo-IgWGoplpYkDt"
                  >
                    <img
                      className="logo"
                      src={logo}
                      alt="АО «Мособлэнерго»"
                      title="АО «Мособлэнерго»"
                      style={{ width: 200 }}
                    />
                    <img
                      className="logo logo--inner-mob"
                      src={logo2}
                      alt="АО «Мособлэнерго»"
                      title="АО «Мособлэнерго»"
                      style={{ width: 200 }}
                    />
                  </Link>{" "}
                  <div
                    className="page-header__block"
                    id="i-3-i-2-bitrix-news-list-line-contacts-header-7DqYycKlRukS"
                  >
                    <div className="page-header__wrap">
                      <span className="page-header__text">
                        Горячая линия «Мособлэнерго»
                      </span>
                      <div className="page-header__row">
                        <div className="circle-hint">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="12" cy="12" r="12"></circle>
                            <path
                              d="M12 6V14"
                              stroke="white"
                              fill="none"
                              strokeWidth="2"
                              strokeMiterlimit="10"
                            ></path>
                            <path
                              d="M12 16.1094V18.3315"
                              stroke="white"
                              fill="none"
                              strokeWidth="2"
                              strokeMiterlimit="10"
                            ></path>
                          </svg>
                          <div className="circle-hint__hint">
                            <div className="circle-hint__wrap-text">
                              <span>
                                По вопросам аварийных отключений и качеству
                                электроэнергии
                              </span>
                            </div>
                          </div>
                        </div>
                        <a className="page-header__tel" href="tel:+74959950099">
                          +7 (495) 99-500-99
                        </a>
                      </div>
                    </div>
                    <div className="page-header__wrap">
                      <span className="page-header__text">
                        Технологическое присоединение
                      </span>
                      <div className="page-header__row">
                        <div className="circle-hint">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="12" cy="12" r="12"></circle>
                            <path
                              d="M12 6V14"
                              stroke="white"
                              fill="none"
                              strokeWidth="2"
                              strokeMiterlimit="10"
                            ></path>
                            <path
                              d="M12 16.1094V18.3315"
                              stroke="white"
                              fill="none"
                              strokeWidth="2"
                              strokeMiterlimit="10"
                            ></path>
                          </svg>
                          <div className="circle-hint__hint">
                            <div className="circle-hint__wrap-text">
                              <span>
                                Консультации по вопросам присоединения к
                                электросети
                              </span>
                            </div>
                          </div>
                        </div>
                        <a className="page-header__tel" href="tel:+74957850000">
                          +7 (495) 785-00-00
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="page-header__right">
                  <a
                    className="wrap-link wrap-link_portal"
                    href="https://moetp.ru/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="wrap-link__wrap-icon">
                      <svg
                        className="wrap-link__icon wrap-link_portal__icon"
                        viewBox="0 0 16 24"
                        height="24"
                        fill="none"
                        width="16"
                      >
                        <path
                          d="M12.2 20.7143C13.7127 20.7143 15 19.3639 15 18.0857V12.1715C15 10.0009 10.4318 8.88574 8 8.88574C5.5682 8.88574 1 10.0003 1 12.1715V18.0857C1 19.3639 2.2873 20.7143 3.8 20.7143"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M7.99995 6.91429C9.63165 6.91429 10.8 5.94828 10.8 4.54857V3.36572C10.8 1.966 9.63165 1 7.99995 1C6.36825 1 5.19995 1.966 5.19995 3.36572V4.54923C5.19995 5.94829 6.36825 6.91429 7.99995 6.91429Z"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M12 24.0001V13.4858"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M4 13.4858V24.0001"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                        ></path>
                      </svg>
                    </div>
                    <span className="wrap-link__text">
                      Перейти на портал потребителя
                    </span>
                  </a>
                  <Link className="wrap-link" to="/plannedOutages">
                    {" "}
                    <div className="wrap-link__wrap-icon">
                      <svg
                        className="wrap-link__icon"
                        viewBox="0 0 24 21"
                        height="21"
                        width="24"
                        fill="none"
                      >
                        <path
                          d="M8.69987 19.889H1.77842C1.1613 19.889 0.790604 19.1379 1.12722 18.5713L11.3488 1.38665C11.6557 0.871118 12.3443 0.871118 12.6512 1.38665L22.8728 18.5713C23.2094 19.1379 22.8387 19.889 22.2216 19.889H15.3001"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M12 7.66736V16.5557"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M12 18.7778V20.9999"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                        />
                      </svg>
                    </div>
                    <span className="wrap-link__text">
                      Узнать об отключениях
                    </span>
                  </Link>
                  <ul
                    className="social-list"
                    id="i-5-i-4-bitrix-news-list-social-list-jmonnOjsjk4V"
                  >
                    <li className="social-list__item">
                      <a
                        className="social-list__link"
                        href="https://vk.com/mosoblenergo"
                        title="Вконтакте"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img
                          className="social-list__icon"
                          src={img34512673ce61b0db299f7e2405ac60e9}
                          alt="Вконтакте"
                        />
                      </a>
                    </li>
                    <li className="social-list__item">
                      <a
                        className="social-list__link"
                        href="https://ok.ru/mosoblenergo"
                        title="Одноклассники"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img
                          className="social-list__icon"
                          src={img7ad387832d629a52c87195d9cb795e3c}
                          alt="Одноклассники"
                        />
                      </a>
                    </li>
                    <li className="social-list__item">
                      <a
                        className="social-list__link"
                        href="https://t.me/mosoblenergo"
                        title="Telegram"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img
                          className="social-list__icon"
                          src={img639bae9c47ff56a3f33bc8f8b49a4e9b}
                          alt="Telegram"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-header__down">
          <div className="container">
            <div className="page-header__flex">
              <div className="logo-two">
                <Link
                  className="wrap-logo"
                  to="/"
                  id="i-3-i-2-bitrix-main-include-header-logo-mmL5iToNSYT7"
                >
                  <img
                    src={logoTwo}
                    alt="АО «Мособлэнерго»"
                    title="АО «Мособлэнерго»"
                    style={{ width: 200 }}
                  />
                </Link>{" "}
              </div>
              <nav
                className="navigation"
                id="i-5-i-4-bitrix-menu-top-XEVOpkwAkIZ0"
              >
                <ul className="navigation__list">
                  {mainMenu &&
                    mainMenu.map((item, index) => (
                      <li className="navigation__item" key={index}>
                        <div className="navigation__wrap">
                          <Link className="navigation__link" to={item.link}>
                            {item.mainTitle}
                          </Link>{" "}
                          {item.submenu.length > 1 ? (
                            <ul className="nav-menu">
                              {item.submenu.map((item, index) => (
                                <li className="nav-menu__item" key={index}>
                                  <Link
                                    className="nav-menu__link"
                                    to={item.link}
                                  >
                                    {" "}
                                    <span className="nav-menu__text">
                                      {item.title}
                                    </span>
                                    <div className="nav-menu__wrap-arrow">
                                      <svg className="nav-menu__arrow">
                                        <path
                                          d="M34.7143 9L39 5M39 5L34.7143 0.999999M39 5L1 5"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </div>
                                  </Link>{" "}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            false
                          )}
                        </div>
                      </li>
                    ))}
                </ul>
              </nav>
              <div className="page-header__right-block">
                <div
                  className="burger"
                  onClick={() => {
                    setOpenMobMenu(true);
                  }}
                >
                  <div className="burger__line"></div>
                  <div className="burger__line"></div>
                  <div className="burger__line"></div>
                </div>
              </div>
            </div>
            <div
              className={
                openSearchLine ? "search-line search-line--open" : "search-line"
              }
            >
              <span className="search-line__text">поиск по сайту </span>
              <form
                className="search-line__form"
                action="https://mosoblenergo.ru/search/"
              >
                <div className="search-line__flex">
                  <input
                    type="text"
                    name="q"
                    size="15"
                    maxLength="50"
                    required=""
                    placeholder="введите ключевое слово"
                  />
                  <button type="submit">
                    <img src={searchIcon2} alt="текст" />
                    <span>Найти</span>
                  </button>
                </div>
              </form>
              <div
                className="search-line__close"
                onClick={() => {
                  setOpenSearchLine(false);
                }}
              >
                <div>x</div>
                <span>закрыть</span>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
      {/* ------------------------------------------------------------------------------ */}
      <section className="mob-contact" style={{ marginTop: 50 }}>
        <div className="page-header__wrap_mob">
          <span className="page-header__text_mob">Горячая линия:</span>{" "}
          <a className="page-header__tel_mob" href="tel:+74959950099">
            +7 (495) 99-500-99
          </a>
        </div>
        <div className="page-header__wrap_mob">
          <span className="page-header__text_mob">Тех. присоединение:</span>{" "}
          <a className="page-header__tel_mob" href="tel:+74957850000">
            +7 (495) 785-00-00
          </a>
        </div>
      </section>
      {/* ------------------------------------------------------------------------------ */}
      <section className={openMobMenu ? "mob-menu open-menu" : "mob-menu"}>
        <div className="mob-menu-up">
          <div className="container">
            <div className="mob-menu-up__flex">
              <div className="mob-menu-up__left">
                <a
                  className="wrap-logo"
                  href="https://mosoblenergo.ru/"
                  id="i-7-i-6-bitrix-main-include-header-logo-bHcqHw2DBgtH"
                >
                  <img
                    className="logo"
                    src={logo}
                    alt="АО «Мособлэнерго»"
                    title="АО «Мособлэнерго»"
                  />
                </a>{" "}
                <div
                  className="mob-menu-up__block"
                  id="i-9-i-8-bitrix-news-list-line-contacts-mobile-iJBuqawNy1tM"
                >
                  <div className="mob-menu-up__wrap">
                    <span className="mob-menu-up__text">
                      Горячая линия «Мособлэнерго»
                    </span>
                    <div className="mob-menu-up__row">
                      <div className="circle-hint">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="12" cy="12" r="12"></circle>
                          <path
                            d="M12 6V14"
                            stroke="white"
                            fill="none"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                          ></path>
                          <path
                            d="M12 16.1094V18.3315"
                            stroke="white"
                            fill="none"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                          ></path>
                        </svg>
                        <div className="circle-hint__hint">
                          <div className="circle-hint__wrap-text">
                            <span>
                              По вопросам аварийных отключений и качеству
                              электроэнергии
                            </span>
                          </div>
                        </div>
                      </div>
                      <a className="mob-menu-up__tel" href="tel:+74959950099">
                        +7 (495) 99-500-99
                      </a>
                    </div>
                  </div>
                  <div className="mob-menu-up__wrap">
                    <span className="mob-menu-up__text">
                      Технологическое присоединение
                    </span>
                    <div className="mob-menu-up__row">
                      <div className="circle-hint">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="12" cy="12" r="12"></circle>
                          <path
                            d="M12 6V14"
                            stroke="white"
                            fill="none"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                          ></path>
                          <path
                            d="M12 16.1094V18.3315"
                            stroke="white"
                            fill="none"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                          ></path>
                        </svg>
                        <div className="circle-hint__hint">
                          <div className="circle-hint__wrap-text">
                            <span>
                              Консультации по вопросам присоединения к
                              электросети
                            </span>
                          </div>
                        </div>
                      </div>
                      <a className="mob-menu-up__tel" href="tel:+74957850000">
                        +7 (495) 785-00-00
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mob-menu-up__right">
                <div
                  className="close-menu"
                  onClick={() => {
                    setOpenMobMenu(false);
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mob-menu-middle"
          id="i-9-i-8-bitrix-menu-mob-menu-middle-g8taYvoNj68S"
        >
          <div className="container">
            <div className="mob-menu-middle__wrapper-scroll">
              <div className="mob-menu-middle__container">
                <div className="mob-menu-middle__scroll-container">
                  <nav className="mob-menu-middle__nav">
                    <ul className="mob-menu-middle__list">
                      {mainMenu &&
                        mainMenu.map((item, index) => (
                          <li
                            className="mob-menu-middle__item"
                            onClick={(event) => {
                              if (item.submenu.length > 1) {
                                event.currentTarget.classList.toggle(
                                  "open-accordion"
                                );
                                event.currentTarget
                                  .getElementsByClassName(
                                    "mob-menu-middle__row"
                                  )[0]
                                  .classList.toggle("active");
                                const drop =
                                  event.currentTarget.querySelector(
                                    ".mob-menu-drop"
                                  );
                                if (drop.style.maxHeight == "") {
                                  drop.style.maxHeight = `${drop.scrollHeight}px`;
                                } else {
                                  drop.style.maxHeight = "";
                                }
                              } else {
                                navigate(item.link);
                              }
                            }}
                            key={index}
                          >
                            <div
                              className="mob-menu-middle__row"
                              style={{ cursor: "pointer" }}
                            >
                              <div className="mob-menu-middle__flex">
                                <span className="mob-menu-middle__caption">
                                  {item.mainTitle}
                                </span>{" "}
                                <div className="mob-menu-middle__wrap-arrow">
                                  <svg className="mob-menu-middle__arrow">
                                    <path
                                      d="M34.7143 9L39 5M39 5L34.7143 0.999999M39 5L1 5"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            {item.submenu.length > 1 ? (
                              <div className="mob-menu-drop">
                                <div className="mob-menu-drop__wrapper">
                                  <div className="mob-menu-drop__block">
                                    <ul className="mob-menu-drop__list">
                                      {item.submenu.map((item, index) => (
                                        <li
                                          className="mob-menu-drop__item"
                                          key={index}
                                        >
                                          <Link
                                            className="mob-menu-drop__link"
                                            to={item.link}
                                          >
                                            {" "}
                                            <span className="mob-menu-drop__text">
                                              {item.title}
                                            </span>
                                            <div className="mob-menu-drop__line"></div>
                                          </Link>{" "}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              false
                            )}
                          </li>
                        ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mob-menu-down">
          <div
            className="mob-menu-down__up"
            id="i-17-i-16-bitrix-news-list-line-contacts-mobile-down-d42sdqzZxdic"
          >
            <div className="container">
              <div className="mob-menu-down__wrap-text">
                <span className="mob-menu-down__text-info">
                  Горячая линия «Мособлэнерго»
                </span>
                <div className="mob-menu-down__row">
                  <div className="circle-hint">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="12"></circle>
                      <path
                        d="M12 6V14"
                        stroke="white"
                        fill="none"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      ></path>
                      <path
                        d="M12 16.1094V18.3315"
                        stroke="white"
                        fill="none"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      ></path>
                    </svg>
                    <div className="circle-hint__hint">
                      <div className="circle-hint__wrap-text">
                        <span>
                          По вопросам аварийных отключений и качеству
                          электроэнергии
                        </span>
                      </div>
                    </div>
                  </div>
                  <a className="mob-menu-down__tel" href="tel:+74959950099">
                    +7 (495) 99-500-99
                  </a>
                </div>
              </div>
              <div className="mob-menu-down__wrap-text">
                <span className="mob-menu-down__text-info">
                  Технологическое присоединение
                </span>
                <div className="mob-menu-down__row">
                  <div className="circle-hint">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="12"></circle>
                      <path
                        d="M12 6V14"
                        stroke="white"
                        fill="none"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      ></path>
                      <path
                        d="M12 16.1094V18.3315"
                        stroke="white"
                        fill="none"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      ></path>
                    </svg>
                    <div className="circle-hint__hint">
                      <div className="circle-hint__wrap-text">
                        <span>
                          Консультации по вопросам присоединения к электросети
                        </span>
                      </div>
                    </div>
                  </div>
                  <a className="mob-menu-down__tel" href="tel:+74957850000">
                    +7 (495) 785-00-00
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mob-menu-down__down">
            <div className="container">
              <div className="mob-menu-down__wrapper">
                <a className="mob-menu-down__wrap" href="https://moetp.ru/">
                  <div className="mob-menu-down__wrap-icon">
                    <svg
                      className="mob-menu-down__icon"
                      viewBox="0 0 16 24"
                      height="24"
                      width="16"
                      fill="none"
                    >
                      <use href="/local/templates/vg/assets/img/consumer.svg#consumer"></use>
                    </svg>
                  </div>
                  <span className="mob-menu-down__text">
                    Перейти на портал потребителя
                  </span>
                </a>
                <Link className="mob-menu-down__wrap" to="/plannedOutages">
                  {" "}
                  <div className="mob-menu-down__wrap-icon">
                    <svg
                      className="mob-menu-down__icon"
                      viewBox="0 0 24 21"
                      height="21"
                      width="24"
                      fill="none"
                    >
                      <use href="/local/templates/vg/assets/img/warning-icon.svg#warning-icon"></use>
                    </svg>
                  </div>
                  <span className="mob-menu-down__text">
                    Узнать об отключениях
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="first-screen"
        id="i-13-i-12-bitrix-news-list-main-slider-CpmJaVVMQLIA"
      >
        <div className="first-screen__slider swiper-container">
          <div className="first-screen__wrapper swiper-wrapper">
            {hreff === "/" ? (
              <div className="first-screen__slide swiper-slide">
                <div
                  className="first-screen__wrap"
                  style={{
                    backgroundImage: `url(${img629d5332fa7791fcb59127d93f320c66})`,
                  }}
                >
                  <div className="container">
                    <div className="first-screen__block">
                      <div
                        className="logo_two"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "20px",
                          justifyContent: "center"
                        }}
                      >
                        <img
                          className="first-screen__img"
                          src={firstScreenLogo}
                          alt="logo"
                          style={{ marginTop: 100 }}
                        />
                        {/* <img
                          className="pobeda"
                          src={pobeda}
                          alt="80 лет Победа!"
                          style={{
                            width: "200px",
                            zIndex: 10,
                            marginLeft: "-10px",
                            marginBottom: "-25px",
                            height: "auto",
                            maxWidth: "100%", 
                          }}
                        /> */}
                      </div>
                      <br />
                      {/* ------------------------------------------------------ */}
                      <Flex wrap={"wrap"} className="creditRatingFlex" gap={20}>
                        <div className="creditRating">
                          {/* <img className="creditRating__img" src={creditRating} alt="logo" /> */}
                          <div className="creditRating__desc">
                            <h3 className="creditRating__title">
                              Внеплановые отключения
                            </h3>
                            <p className="creditRating__text">
                              АО «Мособлэнерго» предлагает воспользоваться
                              сервисом информирования населения о перерывах
                              электроснабжения – плановых работах и
                              технологических нарушениях в сетях(внеплановых
                              отключениях). Получить информацию об отключениях
                              можно, перейдя по кнопке в верхнем правом углу
                              сайта «Узнать об отключениях» или по кнопке ниже.
                            </p>
                            <div className="creditRating__link-area">
                              <Link
                                className="creditRating__link block-btn"
                                to="/plannedOutages"
                              >
                                Узнать об отключениях
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="creditRating">
                          {/* <img className="creditRating__img" src={creditRating} alt="logo" /> */}
                          <div className="creditRating__desc">
                            <h3
                              className="creditRating__title"
                              style={{ color: "red", textAlign: "center" }}
                            >
                              ВНИМАНИЕ МОШЕННИКИ!!!
                            </h3>
                            <p className="creditRating__text">
                              Работники АО «Мособлэнерго» и наши представители
                              НИКОГДА не запрашивают персональные данные (номер
                              паспорта, СНИЛС и т.д.) по телефону.
                            </p>
                            <p className="creditRating__text">
                              Передача персональных данных возможна только в
                              личном кабинете или в офисе при подаче заявок.
                            </p>
                            <p className="creditRating__text">
                              Берегите себя и своих близких!
                            </p>
                          </div>
                        </div>
                        <div className="creditRating">
                          {/* <img className="creditRating__img" src={creditRating} alt="logo" /> */}
                          <div className="creditRating__desc">
                            <h3 className="creditRating__title">
                              Дополнительные услуги
                            </h3>
                            <p className="creditRating__text">
                              Согласовать топографическую съемку для подтверждения наличия/отсутствия инженерных сетей на территории земельного участка в электронном виде Вы можете посредством сервиса «ВсеСети» на Портале государственных и муниципальных услуг Московской области.
                            </p>
                            <div className="creditRating__link-area">
                              <a href="https://uslugi.mosreg.ru/services/20809?step=110530&target=66979&applicant=15267" target="_blank" className="creditRating__link block-btn">

                                Перейти на "ВсеСети"
                              </a>
                            </div>
                          </div>
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              false
            )}
          </div>
        </div>
      </section>
    </header>
  );
}
