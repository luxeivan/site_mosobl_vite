import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { addressServer } from "../../config";
import { motion } from "framer-motion";
import TopImage from "../../components/TopImage";
import MarkDownText from "../../components/MarkDownText/MarkDownText";
import img4c2c362e8d8fa557788c556795d32fae from "../../img/photo_5343684875758200971_y.jpg";

import pdf from "../../img/pdf.svg";
import doc from "../../img/doc.svg";
import docx from "../../img/docx.svg";
import rar from "../../img/rar.svg";
import xls from "../../img/xls.svg";
import jpg from "../../img/jpg.svg";

const type = {
  pdf,
  doc,
  docx,
  rar,
  xls,
  jpg,
};

function addressServerAdd(text) {
  return text.replaceAll(/\]\([a-zA-Z0-9_\/\)\.]{2,}\)/gm, (result) => {
    return result.slice(0, 2) + addressServer + result.slice(2);
  });
}

export default function InvestorDetail() {
  const params = useParams();
  const [section, setSection] = useState(null);

  useEffect(() => {
    fetch(
      `${addressServer}/api/investorams/${params.id}?populate[groupInfo][populate][files_sort][populate]=files`
    )
      .then((response) => response.json())
      .then((data) => {
        setSection(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  if (!section || !section) return <div>Загрузочка...</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage
        image={img4c2c362e8d8fa557788c556795d32fae}
        title={section.title}
      />
      <div className="page-grid__content" id="content">
        <div>
          <Link to="/investors" className="button__back">
            Назад
          </Link>
        </div>

        <ul>
          {section.groupInfo &&
            section.groupInfo.map((group, groupIndex) => (
              <li key={groupIndex} className="page-grid__content__li">
                <div className="row-docs-age">
                  <h3 className="row-docs-age__caption line-bottom">
                    {group.title}
                  </h3>

                  {/* Проверка на значение isText */}
                  {group.isText ? (
                    <div className="rich-text-content">
                      {/* Отображение rich text */}
                      <MarkDownText>
                        {addressServerAdd(group.text)}
                      </MarkDownText>
                    </div>
                  ) : (
                    // Если isText == false, то отображаем файлы, как раньше
                    <ul>
                      {Array.isArray(group.files_sort) &&
                      group.files_sort.length > 0 ? (
                        group.files_sort?.map((fileEntry, fileIndex) => {
                          const fileData = fileEntry.files?.[0];

                          return fileData && fileData.url ? (
                            <li
                              key={fileIndex}
                              className="page-grid__content__li"
                            >
                              <a
                                className="doc-line"
                                href={`${addressServer}${fileData.url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <div className="doc-line__wrap-icon">
                                  <img
                                    src={type[fileData.ext.slice(1)] || pdf}
                                    alt={`icon ${fileData.ext.slice(1)}`}
                                  />
                                </div>
                                <div className="doc-line__wrap-text">
                                  <span className="doc-line__name">
                                    {fileData.name}
                                  </span>
                                  <span className="doc-line__file-info">
                                    {fileData.ext.slice(1).toUpperCase()}{" "}
                                    {Math.round(fileData.size)} kb
                                  </span>
                                </div>
                              </a>
                            </li>
                          ) : (
                            <p key={fileIndex}>Файл недоступен</p>
                          );
                        })
                      ) : (
                        <p>Нет доступных файлов</p>
                      )}
                    </ul>
                  )}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </motion.div>
  );
}

// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { addressServer } from "../../config";
// import { motion } from "framer-motion";
// import TopImage from "../../components/TopImage";
// import img4c2c362e8d8fa557788c556795d32fae from "../../img/photo_5343684875758200971_y.jpg";

// import pdf from "../../img/pdf.svg";
// import doc from "../../img/doc.svg";
// import docx from "../../img/docx.svg";
// import rar from "../../img/rar.svg";
// import xls from "../../img/xls.svg";
// import jpg from "../../img/jpg.svg";

// const type = {
//   pdf,
//   doc,
//   docx,
//   rar,
//   xls,
//   jpg,
// };

// export default function InvestorDetail() {
//   const params = useParams();
//   const [section, setSection] = useState(null);

//   useEffect(() => {
//     fetch(
//       `${addressServer}/api/investorams/${params.id}?populate[groupInfo][populate][files_sort][populate]=files`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Полученные данные:", data);
//         setSection(data.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [params.id]);

//   if (!section || !section) return <div>Загрузочка...</div>;

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <TopImage
//         image={img4c2c362e8d8fa557788c556795d32fae}
//         title={section.title}
//       />
//       <div className="page-grid__content" id="content">
//         <div>
//           <Link to="/investors" className="button__back">
//             Назад
//           </Link>
//         </div>

//         <ul>
//           {section.groupInfo &&
//             section.groupInfo.map((group, groupIndex) => (
//               <li key={groupIndex} className="page-grid__content__li">
//                 <div className="row-docs-age">
//                   <h3 className="row-docs-age__caption line-bottom">
//                     {group.title}
//                   </h3>
//                   <ul>
//                     {Array.isArray(group.files_sort) &&
//                     group.files_sort.length > 0 ? (
//                       group.files_sort.map((fileEntry, fileIndex) => {
//                         const fileData = fileEntry.files?.data?.[0]?;

//                         return fileData && fileData.url ? (
//                           <li
//                             key={fileIndex}
//                             className="page-grid__content__li"
//                           >
//                             <a
//                               className="doc-line"
//                               href={`${addressServer}${fileData.url}`}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                             >
//                               <div className="doc-line__wrap-icon">
//                                 <img
//                                   src={type[fileData.ext.slice(1)] || pdf}
//                                   alt={`icon ${fileData.ext.slice(1)}`}
//                                 />
//                               </div>
//                               <div className="doc-line__wrap-text">
//                                 <span className="doc-line__name">
//                                   {fileData.name}
//                                 </span>
//                                 <span className="doc-line__file-info">
//                                   {fileData.ext.slice(1).toUpperCase()}{" "}
//                                   {Math.round(fileData.size)} kb
//                                 </span>
//                               </div>
//                             </a>
//                           </li>
//                         ) : (
//                           <p key={fileIndex}>Файл недоступен</p>
//                         );
//                       })
//                     ) : (
//                       <p>Нет доступных файлов</p>
//                     )}
//                   </ul>
//                 </div>
//               </li>
//             ))}
//         </ul>
//       </div>
//     </motion.div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { addressServer } from "../../config";
// import { motion } from "framer-motion";
// import TopImage from "../../components/TopImage";
// import img4c2c362e8d8fa557788c556795d32fae from "../../img/photo_5343684875758200971_y.jpg";

// import pdf from "../../img/pdf.svg";
// import doc from "../../img/doc.svg";
// import docx from "../../img/docx.svg";
// import rar from "../../img/rar.svg";
// import xls from "../../img/xls.svg";
// import jpg from "../../img/jpg.svg";

// const type = {
//   pdf,
//   doc,
//   docx,
//   rar,
//   xls,
//   jpg,
// };

// export default function InvestorDetail() {
//   const params = useParams();
//   const [section, setSection] = useState(null);

//   useEffect(() => {
//     fetch(
//       `${addressServer}/api/investorams/${params.id}?populate[groupInfo][populate][files_sort][populate]=files`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Полученные данные:", data);
//         setSection(data.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [params.id]);

//   if (!section || !section) return <div>Загрузочка...</div>;

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <TopImage
//         image={img4c2c362e8d8fa557788c556795d32fae}
//         title={section.title}
//       />
//       <div className="page-grid__content" id="content">
//         <div>
//           <Link to="/investors" className="button__back">
//             Назад
//           </Link>
//         </div>

//         <ul>
//           {section.groupInfo &&
//             section.groupInfo.map((group, groupIndex) => (
//               <li key={groupIndex} className="page-grid__content__li">
//                 <div className="row-docs-age">
//                   <h3 className="row-docs-age__caption line-bottom">
//                     {group.title}
//                   </h3>
//                   <ul>
//                     {Array.isArray(group.files_sort) &&
//                     group.files_sort.length > 0 ? (
//                       group.files_sort.map((fileEntry, fileIndex) => {
//                         const fileData = fileEntry.files?.data?.[0]?;

//                         return fileData && fileData.url ? (
//                           <li
//                             key={fileIndex}
//                             className="page-grid__content__li"
//                           >
//                             <a
//                               className="doc-line"
//                               href={`${addressServer}${fileData.url}`}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                             >
//                               <div className="doc-line__wrap-icon">
//                                 <img
//                                   src={type[fileData.ext.slice(1)] || pdf}
//                                   alt={`icon ${fileData.ext.slice(1)}`}
//                                 />
//                               </div>
//                               <div className="doc-line__wrap-text">
//                                 <span className="doc-line__name">
//                                   {fileData.name}
//                                 </span>
//                                 <span className="doc-line__file-info">
//                                   {fileData.ext.slice(1).toUpperCase()}{" "}
//                                   {Math.round(fileData.size)} kb
//                                 </span>
//                               </div>
//                             </a>
//                           </li>
//                         ) : (
//                           <p key={fileIndex}>Файл недоступен</p>
//                         );
//                       })
//                     ) : (
//                       <p>Нет доступных файлов</p>
//                     )}
//                   </ul>
//                 </div>
//               </li>
//             ))}
//         </ul>
//       </div>
//     </motion.div>
//   );
// }
