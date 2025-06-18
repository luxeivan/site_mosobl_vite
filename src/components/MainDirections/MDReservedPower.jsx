import React, { useEffect, useState } from "react";
import { addressServer } from "../../config";
import pdf from "../../img/pdf.svg";
import doc from "../../img/doc.svg";
import docx from "../../img/docx.svg";
import rar from "../../img/rar.svg";
import xls from "../../img/xls.svg";
import xlsx from "../../img/xlsx.svg";
import rtf from "../../img/rtf.svg";
const type = {
  pdf,
  doc,
  docx,
  rar,
  xls,
  xlsx,
  rtf,
};

export default function MDReservedPower() {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `${addressServer}/api/rezerviruemaya-maksimalnaya-moshhnosts?populate=*`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setFiles(data.data);
      })
      .catch((err) => {
        console.log(err);
        setFiles([]);
      });
  }, []);
  return (
    <div className="page-grid__content">
      {files &&
        files
          // .sort((a, b) => {
          //   return parseInt(a.title, 10) - parseInt(b.title, 10);
          // })
          .map((item, index) => (
            <div key={index}>
              <h3 className="row-docs-age__caption line-bottom">
                {item.title}
              </h3>
              <ul>
                {item &&
                  item.files &&
                  item.files?.map((item, index) => (
                    <li key={index} className="page-grid__content__li">
                      <a
                        className="doc-line"
                        href={`${addressServer}${item.url}`}
                        download=""
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="doc-line__wrap-icon">
                          <img
                            src={type[item.ext.slice(1)]}
                            alt={`icon ${item.ext.slice(1)}`}
                          />
                        </div>
                        <div className="doc-line__wrap-text">
                          <span className="doc-line__name">{item.name}</span>
                          <span className="doc-line__file-info">
                            {item.ext.slice(1)} {Math.round(item.size)}kb
                          </span>
                        </div>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
    </div>
  );
}
