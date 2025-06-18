import React from "react";
import { motion } from "framer-motion";
import img368a30788385c0bb5f5fef6f72128109 from "../img/368a30788385c0bb5f5fef6f72128109.jpg";
import TopImage from "../components/TopImage";
const mission = [
  "Развитие социально-ориентированного подхода в деятельности компании",
  "Обеспечение процесса консолидации электросетевых активов Московской области",
  "Обеспечение надежного, бесперебойного и качественного электроснабжения потребителей, а также удовлетворение растущих потребностей экономики и социального сектора Московской области по экономически обоснованным тарифам",
  "Увеличение капитализации компании путем эффективного управления электросетевым имуществом",
  "Повышение эффективности инвестиций, обеспечение их доходности, ликвидности и надежности",
];

export default function History() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage
        image={img368a30788385c0bb5f5fef6f72128109}
        title={"История компании"}
      />
      <div className="page-grid__content" id="content">
        <div className="text-area">
          <p>
            "Энергия Подмосковья!" — именно под таким девизом сегодня работает
            АО «Мособлэнерго». Компания была создана на основании постановления
            Правительства Московской области от 19.07.2005 года № 456/26 «Об
            участии Московской области в создании открытого акционерного
            общества «Московская областная энергосетевая компания».
          </p>
          <p className="text-md">Миссия АО «Мособлэнерго»:</p>
          <ul>
            {mission.map((item, index) => (
              <li key={index}>
                <p style={{ display: "flex", alignItems: "center" }}>
                  {/* <img src={checkIcon} style={{ marginRight: "10px" }} /> */}
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <br />{" "}
        <div className="row-docs-age">
          {/* <a className="doc-line" href={`${addressServer}/uploads/1802a5ad2a3baee81867584923b11e76_compressed_ef73450427.pdf?updated_at=2022-10-28T09:11:34.677Z`} download="" rel="noopener noreferrer" target="_blank" >
          <div className="doc-line__wrap-icon">
            <img src={pdf} alt="icon pdf" />
          </div>
          <div className="doc-line__wrap-text">
            <span className="doc-line__name">Постановление об участии Московской области в создании открытого акционерного общества «Московская областная энергосетевая компания»</span>
            <span className="doc-line__file-info">pdf, 1МБ</span>
          </div>
        </a> */}
        </div>
      </div>
    </motion.div>
  );
}
