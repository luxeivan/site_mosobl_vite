import React, {useState} from "react";

import { motion } from "framer-motion";
import TopImage from "../components/TopImage";
import img0bae28da0a97c417114a2d2330d6da0b from "../img/0bae28da0a97c417114a2d2330d6da0b.jpg";
import MDMain from "../components/MainDirections/MDMain";
import MDBalance from "../components/MainDirections/MDBalance";
import MDNetworkLosses from "../components/MainDirections/MDNetworkLosses";
import MDStandartLosses from "../components/MainDirections/MDStandartLosses";
import MDVolumeUndelivered from "../components/MainDirections/MDVolumeUndelivered";
import MDElectricTransmission from "../components/MainDirections/MDElectricTransmission";
import MDReservedPower from "../components/MainDirections/MDReservedPower";
const submenu = [
  { id: 0, title: "Основные направления деятельности" },
  { id: 1, title: "Баланс электрической энергии" },
  { id: 2, title: "Мероприятия по снижению потерь в сетях" },
  { id: 3, title: "Норматив технологических потерь электрической энергии" },
  { id: 4, title: "Объем недопоставленной электрической энергии в результате аварийных отключений" },
  { id: 5, title: "Передача электроэнергии" },
  { id: 6, title: "Резервируемая максимальная мощность" },
];
export default function MainDirections() {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <TopImage image={img0bae28da0a97c417114a2d2330d6da0b} title={"Основные направления деятельности"} />

      <div className="page-grid">
        <div className="container">
          <div className="page-grid__wrapper">
            <div className="page-grid__sidebar">
              <div className="link-block">
                <div className="link-block__drop-down">
                  <ul className="link-block__list" id="i-11-i-10-bitrix-menu-left-NMQc3w6cRZPp">
                    {submenu.map((item, index) => (
                      <li key={index} className={currentPage === item.id ? "link-block__item link-block__item--active" : "link-block__item"}>
                        <a
                          className="link-block__link-row"
                          onClick={() => {
                            setCurrentPage(item.id);
                          }}
                        >
                          <span className="link-block__text">{item.title}</span>
                          <div className="link-block__wrap-hover">
                            <div className="link-block__hover-arrow">
                              <svg className="nav-menu__arrow">
                                <path d="M34.7143 9L39 5M39 5L34.7143 0.999999M39 5L1 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {currentPage===0?<MDMain />:false}{/*Главная */}
            {currentPage===1?<MDBalance />:false}{/*Баланс электрической энергии */}
            {currentPage===2?<MDNetworkLosses />:false}{/*Мероприятия по снижению потерь в сетях */}
            {currentPage===3?<MDStandartLosses />:false}{/*Норматив технологических потерь электрической энергии */}
            {currentPage===4?<MDVolumeUndelivered />:false}{/*Объем недопоставленной в результате аварийных отключений */}
            {currentPage===5?<MDElectricTransmission />:false}{/*Передача электроэнергии */}
            {currentPage===6?<MDReservedPower />:false}{/*Резервируемая максимальная мощность */}
            
          </div>
        </div>
      </div>
    </motion.div>
  );
}
