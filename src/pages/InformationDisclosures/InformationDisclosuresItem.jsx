import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { addressServer } from "../../config";
import pdf from "../../img/pdf.svg";
import doc from "../../img/doc.svg";
import docx from "../../img/docx.svg";
import rar from "../../img/rar.svg";
import xls from "../../img/xls.svg";
import jpg from "../../img/jpg.svg";
import { motion } from "framer-motion";

import TopImage from "../../components/TopImage";
import imgf4f40bee4b8a3fb6f95707a4da41d873 from "../../img/f4f40bee4b8a3fb6f95707a4da41d873.jpg";

const type = {
  pdf,
  doc,
  docx,
  rar,
  xls,
  jpg,
};

// Массив, определяющий нужный порядок документов
const customOrder = [
  'Устав акционерного общества "Московская областная энергосетевая компания" (новая редакция № 8) от 16.05.2019 № 15ВР-782',
  "Изменения № 1 к Уставу акционерного общества «Московская областная энергосетевая компания» (новая редакция № 8) от 05.12.2019 № 15ВР-1991",
  "Изменения № 2 к Уставу акционерного общества «Московская областная энергосетевая компания» (новая редакция № 8) от 09.03.2021 № 15ВР-327",
  "Изменения № 3 к Уставу акционерного общества «Московская областная энергосетевая компания» (новая редакция № 8) от 20.01.2022 № 15ВР-35",
  "Изменения № 4 к Уставу акционерного общества «Московская областная энергосетевая компания» (новая редакция № 8) от 24.05.2021 № 15ВР-840",
  "Изменения № 5 к Уставу акционерного общества «Московская областная энергосетевая компания» (новая редакция № 8) от 04.10.2022 №15ВР-2058",
  "Изменения № 6 к Уставу акционерного общества «Московская областная энергосетевая компания» (новая редакция № 8) от 02.02.2023 № 15ВР-150",
  "Изменения № 7 к Уставу акционерного общества «Московская областная энергосетевая компания» (новая редакция № 8) от 15.05.2024 № 15ВР-898",
  "Изменения № 8 к Уставу акционерного общества «Московская областная энергосетевая компания» (новая редакция № 8) от 30.09.2024 №  15ВР-1985",
];

export default function InformationDisclosuresItem() {
  const params = useParams();
  // console.log("Ну давай уже проверим params", params);

  const [informationDisclosureItem, setinformationDisclosureItem] = useState(
    {}
  );

  const [copy, setCopy] = useState({});

  useEffect(() => {
    fetch(
      `${addressServer}/api/information-disclosures/${params.id}?populate[0]=groupInfo&populate[1]=groupInfo.list_files&populate[2]=groupInfo.list_files.file`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log("ПРОВЕРКА КАКИЕ ДАННЫЕ ПРИХОДЯТ", data.data);
        setinformationDisclosureItem(data.data);
        setCopy(data.data);
      })
      .catch((err) => {
        console.log(err);
        setinformationDisclosureItem({});
      });
  }, []);

  const handlerSearch = (event) => {
    let copyObj = JSON.parse(JSON.stringify(copy));
    if (copyObj) {
      copyObj.groupInfo.forEach((element) => {
        element.list_files.data = element.list_files.data.filter((item) =>
          item.name.toLowerCase().includes(event.target.value.toLowerCase())
        );
      });
      setinformationDisclosureItem(copyObj);
    }
  };

  const handlerClear = (event) => {
    document.querySelector(".informationDisclosures_search").value = "";
    document.querySelector(".informationDisclosures_search").click();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage
        image={imgf4f40bee4b8a3fb6f95707a4da41d873}
        title={informationDisclosureItem && informationDisclosureItem.title}
      />
      <div className="page-grid__content" id="content">
        <div>
          <Link to="/informationDisclosures" className="button__back">
            Назад
          </Link>
          <input
            type="text"
            className="informationDisclosures_search"
            placeholder="Поиск на текущей странице"
            onChange={handlerSearch}
            onClick={handlerSearch}
          />
          <button className="button__clear" onClick={handlerClear}>
            Очистить
          </button>
        </div>
        <ul>
          {informationDisclosureItem &&
            informationDisclosureItem &&
            informationDisclosureItem.groupInfo &&
            informationDisclosureItem.groupInfo?.map((item, index) => {
              console.log(
                "informationDisclosureItem.groupInfo",
                informationDisclosureItem.groupInfo

              );

              if (item.list_files?.length < 1) {
                console.log("item.list_files", item.list_files);
                return false;
              } else {
                return (
                  <li className="page-grid__content" id="content" key={index}>
                    <div className="row-docs-age">
                      <h3 className="row-docs-age__caption line-bottom">
                        {item.title}
                      </h3>
                      <ul>
                        {item.list_files

                          ?.sort((a, b) => {
                            console.log(
                              "item.list_files.data",
                              item.list_files
                            );
                            if (
                              a.name.search(/[\s.]20[0-9]{2}/gm) != -1 &&
                              b.name.search(/[\s.]20[0-9]{2}/gm) == -1
                            ) {
                              return -1;
                            }
                            if (
                              a.name.search(/[\s.]20[0-9]{2}/gm) == -1 &&
                              b.name.search(/[\s.]20[0-9]{2}/gm) != -1
                            ) {
                              return 1;
                            }

                            return b.id - a.id;
                          })
                          ?.sort((a, b) => {
                            if (
                              a.name.search(/[\s.]20[0-9]{2}/gm) != -1 &&
                              b.name.search(/[\s.]20[0-9]{2}/gm) != -1
                            ) {
                              return (
                                b.name.match(/[\s.]20[0-9]{2}/gm)[0].slice(1) -
                                a.name.match(/[\s.]20[0-9]{2}/gm)[0].slice(1)
                              );
                            }
                          })
                          ?.map((item) => {
                            let searchDate = 0;
                            if (
                              item.name.search(
                                /[0-3][0-9].[0-1][0-9].2[0-9][0-9][0-9]/gm
                              ) != -1
                            ) {
                              let arr = item.name.match(
                                /[0-3][0-9].[0-1][0-9].2[0-9][0-9][0-9]/gm
                              );
                              let str = arr[arr.length - 1].split(".");
                              let reredate = new Date(
                                str[2],
                                str[1] - 1,
                                str[0]
                              );
                              searchDate = reredate.getTime();
                            }
                            return { ...item, searchDate };
                          })
                          ?.sort((a, b) => {
                            return b.searchDate - a.searchDate;
                          })
                          ?.sort((a, b) => {
                            if (
                              a.name.includes("Устав акционерного общества")
                            ) {
                              return -1;
                            }
                            return (
                              customOrder.indexOf(a.name) -
                              customOrder.indexOf(b.name)
                            );
                          })
                          ?.map((item, index) => (
                            <li key={index} className="page-grid__content__li">
                              <a
                                className="doc-line"
                                href={`${addressServer}${item.file.url}`}
                                download=""
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <div className="doc-line__wrap-icon">
                                  <img
                                    src={type[item.type]}
                                    alt={`icon ${item.type}`}
                                  />
                                </div>
                                <div className="doc-line__wrap-text">
                                  <span className="doc-line__name">
                                    {item.name}
                                  </span>
                                  <span className="doc-line__file-info">
                                    {item.type}{" "}
                                    {Math.round(item.file.size)}
                                    kb
                                  </span>
                                </div>
                              </a>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </li>
                );
              }
            })}
        </ul>
      </div>
    </motion.div>
  );
}
