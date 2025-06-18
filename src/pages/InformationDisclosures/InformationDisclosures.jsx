import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addressServer } from "../../config";
import { motion } from "framer-motion";
import TopImage from "../../components/TopImage";
import imgb04877a3110d6b586d064fc3a2853c70 from "../../img/b04877a3110d6b586d064fc3a2853c70.jpg";

export default function InformationDisclosures() {
  const [informationDisclosures, setInformationDisclosures] = useState([]);

  useEffect(() => {
    fetch(
      `${addressServer}/api/information-disclosures?populate[0]=groupInfo&populate[1]=groupInfo.list_files&populate[2]=groupInfo.list_files.file`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) =>
        setInformationDisclosures(data.data.sort((a, b) => a.sort - b.sort))
      )
      .catch((err) => {
        console.log(err);
        setInformationDisclosures([]);
      });
  }, []);


  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage
        image={imgb04877a3110d6b586d064fc3a2853c70}
        title={"Раскрытие информации"}
      />
      <div className="page-grid__content" id="content">
        <p style={{ textAlign: "center", marginBottom: "10px" }}>
          <Link
            to="/informationDisclosures/companyratings"
            className="planned-notification__link"
            style={{
              border: "1px solid rgb(227, 112, 33)",
              boxShadow: "0px 0px 9px 3px rgba(227, 112, 33, 0.2)",
              padding: "10px 20px",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            Рейтинги Компании
          </Link>
        </p>
        <p style={{ textAlign: "center" }}>
          <a
            className="planned-notification__link"
            href="https://www.e-disclosure.ru/portal/company.aspx?id=15188"
            rel="noopener noreferrer"
            target="_blank"
          >
            Карточка компании АО "Мособлэнерго" на сайте центра раскрытия
            корпоративной информации
          </a>
        </p>
        <ul>
          {informationDisclosures &&
            informationDisclosures?.map((item, index) => (
              <li
                key={index}
                className="informationDisclosures__item li__margin-top"
              >
                <Link
                  className="link-row link-row--change"
                  to={`/informationDisclosures/${item.documentId}`}
                >
                  <span className="link-row__text">{item.title}</span>
                  <div className="link-row__wrap-arrow">
                    <svg className="nav-menu__arrow">
                      <path
                        d="M34.7143 9L39 5M39 5L34.7143 0.999999M39 5L1 5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </motion.div>
  );
}
