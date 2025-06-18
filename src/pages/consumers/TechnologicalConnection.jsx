import { motion } from "framer-motion";
import React, { useState } from "react";

import TopImage from "../../components/TopImage";
import imge5f6eb838fb5010a51a4e76952abf3f5 from "../../img/e5f6eb838fb5010a51a4e76952abf3f5.jpg";

import pdf from "../../img/pdf.svg";
import doc from "../../img/doc.svg";
import docx from "../../img/docx.svg";
import rar from "../../img/rar.svg";
import xls from "../../img/xls.svg";
import TCMain from "../../components/TechnologicalConnection/TCMain";
import TCMainInformation from "../../components/TechnologicalConnection/TCMainInformation";
import TCNormativeDocuments from "../../components/TechnologicalConnection/TCNormativeDocuments";
import TCPasportService from "../../components/TechnologicalConnection/TCPasportService";
import TCStandartForms from "../../components/TechnologicalConnection/TCStandartForms";
import TCInformationAboutConnection from "../../components/TechnologicalConnection/TCInformationAboutConnection";
import TCAboutApplications from "../../components/TechnologicalConnection/TCAboutApplications";
import TCInformationAboutPersons from "../../components/TechnologicalConnection/TCInformationAboutPersons";
import TCRates from "../../components/TechnologicalConnection/TCRates";
import TCProcedureCarrying from "../../components/TechnologicalConnection/TCProcedureCarrying";
// eslint-disable-next-line unused-imports/no-unused-vars
const type = {
  pdf,
  doc,
  docx,
  rar,
  xls,
};
const submenu = [
  { id: 0, title: "Технологическое присоединение" },
  { id: 1, title: "Общая информация о технологическом присоединении" },
  { id: 2, title: "Нормативные документы" },
  { id: 3, title: "Паспорта услуг" },
  { id: 4, title: "Порядок выполнения мероприятий, связанных с присоединением к сетям" },
  { id: 5, title: "Типовые формы документов" },
  { id: 6, title: "Тарифы на технологическое присоединение" },
  { id: 7, title: "Сведения о наличии мощности, свободной для технологического присоединения" },
  { id: 8, title: "Сведения о лицах намеревающихся перераспределить мощность" },
  { id: 9, title: "О заявках и исполнении" },
];

export default function TechnologicalConnection() {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <TopImage image={imge5f6eb838fb5010a51a4e76952abf3f5} title={"Технологическое присоединение"} />

      <div className="page-grid">
        <div className="container">
          <div className="page-grid__wrapper">
            <div className="page-grid__sidebar">
              <div className="link-block">
                <div className="link-block__drop-down">
                  <ul className="link-block__list" id="i-11-i-10-bitrix-menu-left-NMQc3w6cRZPp">
                    {submenu.map((item, index) => (
                      <li key={index} className={currentPage === item.id ? "link-block__item link-block__item--active" : "link-block__item"}>
                        <a className="link-block__link-row" onClick={()=>{setCurrentPage(item.id)}}>
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
             {currentPage===0?<TCMain />:false}{/*Главная */}
            {currentPage===1?<TCMainInformation />:false}{/*Общая информация о технологическом присоединении */}
            {currentPage===2?<TCNormativeDocuments />:false}{/*Нормативные документы */}
            {currentPage===3?<TCPasportService />:false}{/*Паспорта услуг */}
            {currentPage===4?<TCProcedureCarrying />:false}{/*Порядок выполнения мероприятий, связанных с присоединением к сетям */}
            {currentPage===5?<TCStandartForms />:false}{/*Типовые формы документов */}
            {currentPage===6?<TCRates />:false}{/*Тарифы на технологическое присоединение */}
            {currentPage===7?<TCInformationAboutConnection />:false}{/*Сведения о наличии мощности, свободной для технологического присоединения */}
            {currentPage===8?<TCInformationAboutPersons />:false}{/*Сведения о лицах намеревающихся перераспределить мощность */}
            {currentPage===9?<TCAboutApplications />:false}{/*О заявках и исполнении */}
            
          </div>
        </div>
      </div>
    </motion.div>
  );
}
