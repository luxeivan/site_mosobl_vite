import React from "react";
import pdf from "../../img/pdf.svg";
import jpg from "../../img/jpg.svg";
import { addressServer } from "../../config";
import { motion } from "framer-motion";
import TopImage from "../../components/TopImage";
import img4c2c362e8d8fa557788c556795d32fae from "../../img/4c2c362e8d8fa557788c556795d32fae.jpg";
import gostPdf from "./sert.pdf"; 

export default function Certs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage
        image={img4c2c362e8d8fa557788c556795d32fae}
        title={"Сертификаты"}
      />
      <div className="page-grid__content" id="content">
        <div class="row-docs-age">
          <a
            class="doc-line"
            href={`${addressServer}/uploads/PHOTO_2023_01_27_13_58_30_5009cb645d.jpg?updated_at=2023-03-29T13:28:33.640Z`}
            download=""
            rel="noopener noreferrer"
            target="_blank"
          >
            <div class="doc-line__wrap-icon">
              <img src={jpg} alt="icon jpg" />
            </div>
            <div class="doc-line__wrap-text">
              <span class="doc-line__name">
                Кредитный рейтинг: АА+ "Стабильный"
              </span>
              <span class="doc-line__file-info">jpg, 75кб</span>
            </div>
          </a>
          {/* <a
            class="doc-line"
            href={`${addressServer}/uploads/0086_C0_6dfcd1b059.pdf?updated_at=2023-11-28T04:56:59.610Z`}
            download=""
            rel="noopener noreferrer"
            target="_blank"
          >
            <div class="doc-line__wrap-icon">
              <img src={pdf} alt="icon pdf" />
            </div>
            <div class="doc-line__wrap-text">
              <span class="doc-line__name">
                Сертификат соответствия по ГОСТ Р ИСО 9001-2015
              </span>
              <span class="doc-line__file-info">pdf, 1мб</span>
            </div>
          </a> */}
          {/* СРОЧНО ЗАКИНУЛ СЮДА СЕРТИК, НО НАДО БЫ СДЕЛАТЬ БАЗУ В strapi */}
          <a
            className="doc-line"
            href={gostPdf}
            download=""
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="doc-line__wrap-icon">
              <img src={pdf} alt="icon pdf" />
            </div>
            <div className="doc-line__wrap-text">
              <span className="doc-line__name">
                Сертификат соответствия ГОСТ Р ИСО 9001-2015
              </span>
              <span className="doc-line__file-info">pdf, 1мб</span>
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
