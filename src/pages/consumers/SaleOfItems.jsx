import React from "react";
import { addressServer } from "../../config";
import pdf from "../../img/pdf.svg";
import { motion } from "framer-motion";
import TopImage from "../../components/TopImage";
import img40991becd6853fa47483520f60d82b38 from "../../img/40991becd6853fa47483520f60d82b38.jpg";

export default function SaleOfItems() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage
        image={img40991becd6853fa47483520f60d82b38}
        title={"Реализация товарно-материальных ценностей"}
      />
      <div className="page-grid__content" id="content">
        <div className="row-docs-age">
          <a
            className="doc-line"
            href={`${addressServer}/uploads/Perechen_877289d59d.pdf`}
            download=""
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="doc-line__wrap-icon">
              <img src={pdf} alt="icon xlsx" />
            </div>
            <div className="doc-line__wrap-text">
              <span className="doc-line__name">
                Реализация товарно-материальных ценностей
              </span>
              <span className="doc-line__file-info">pdf, 111КБ</span>
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
