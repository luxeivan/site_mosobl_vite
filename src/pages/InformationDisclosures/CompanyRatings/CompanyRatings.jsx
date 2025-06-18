import React, { useEffect, useState } from "react";
import { addressServer } from "../../../config";
import { motion } from "framer-motion";

import TopImage from "../../../components/TopImage";
import imgb04877a3110d6b586d064fc3a2853c70 from "../../../img/b04877a3110d6b586d064fc3a2853c70.jpg";
import pdf from "../../../img/pdf.svg";
import doc from "../../../img/doc.svg";
import docx from "../../../img/docx.svg";
import rar from "../../../img/rar.svg";
import xls from "../../../img/xls.svg";
import jpg from "../../../img/jpg.svg";

const type = {
  pdf,
  doc,
  docx,
  rar,
  xls,
  jpg,
};

export default function CompanyRatings() {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    fetch(`${addressServer}/api/rejtingi-kompaniis?populate=files`)
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.data.sort(
          (a, b) => a.sort - b.sort
        );
        setRatings(sortedData);
      })
      .catch((err) => {
        console.error("Ошибка загрузки данных:", err);
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
        title={"Рейтинги Компании"}
      />
      <div className="page-grid__content" id="content">
        <ul>
          {ratings.map((rating, index) => (
            <li key={index} className="page-grid__content__li">
              <a
                href={`${addressServer}${rating.files[0].url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="doc-line"
              >
                <div className="doc-line__wrap-icon">
                  <img
                    src={
                      type[
                        rating.files[0].ext.slice(1)
                      ] || pdf
                    }
                    alt={`icon ${rating.files[0].ext.slice(
                      1
                    )}`}
                  />
                </div>
                <div className="doc-line__wrap-text">
                  <span className="doc-line__name">
                    {rating.title}
                  </span>
                  <span className="doc-line__file-info">
                    {rating.files[0].ext
                      .slice(1)
                      .toUpperCase()}{" "}
                    {Math.round(
                      rating.files[0].size
                    )}{" "}
                    kb
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { addressServer } from "../../../config";
// import { motion } from "framer-motion";

// import TopImage from "../../../components/TopImage";
// import imgb04877a3110d6b586d064fc3a2853c70 from "../../../img/b04877a3110d6b586d064fc3a2853c70.jpg";
// import imgf4f40bee4b8a3fb6f95707a4da41d873 from "../../../img/f4f40bee4b8a3fb6f95707a4da41d873.jpg";
// import pdf from "../../../img/pdf.svg";
// import doc from "../../../img/doc.svg";
// import docx from "../../../img/docx.svg";
// import rar from "../../../img/rar.svg";
// import xls from "../../../img/xls.svg";
// import jpg from "../../../img/jpg.svg";

// export default function CompanyRatings() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <TopImage
//         image={imgb04877a3110d6b586d064fc3a2853c70}
//         title={"Рейтинги Компании"}
//       />
//       <div className="page-grid__content" id="content">
//         <h1>123</h1>
//         <p>Вот тут вёрстка</p>
//       </div>
//     </motion.div>
//   );
// }
