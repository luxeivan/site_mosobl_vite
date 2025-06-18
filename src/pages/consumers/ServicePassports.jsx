import { motion } from "framer-motion";
import React, { useState } from "react";
import TopImage from "../../components/TopImage";
import img7705c92ee469adb3142aa609f3e9e15a from "../../img/7705c92ee469adb3142aa609f3e9e15a.jpg";
import SPMain from "../../components/ServicePassports/SPMain";
import MDElectricTransmission from "../../components/MainDirections/MDElectricTransmission";
import MDBalance from "../../components/MainDirections/MDBalance";

const submenu = [
  { id: 0, title: "Паспорта услуг" },
  { id: 1, title: "Тарифы на услуги по передаче электрической энергии" },
  { id: 2, title: "Баланс электрической энергии и мощности" },
];
export default function ServicePassports() {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <TopImage title={"Передача электрической энергии"} image={img7705c92ee469adb3142aa609f3e9e15a} />

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
            {currentPage===0?<SPMain />:false}{/*Главная */}
            {currentPage===1?<MDElectricTransmission />:false}{/*Тарифы на услуги по передаче электрической энергии */}
            {currentPage===2?<MDBalance />:false}{/*Баланс электрической энергии и мощности  */}

          </div>
        </div>
      </div>
    </motion.div>
  );
}
