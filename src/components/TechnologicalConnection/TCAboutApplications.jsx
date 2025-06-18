import React, { useEffect, useState } from "react";
import axios from "axios";
import { addressServer } from "../../config";
import pdfIcon from "../../img/pdf.svg";
import xlsIcon from "../../img/xls.svg";

export default function TCAboutApplications() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${addressServer}/api/teh-pris-o-zayavkah-i-ispolnenii?populate=files`
      )
      .then((response) => {
        const fetchedFiles = response.data.data.files?.map((file) => ({
            ...file,
            icon:
              file.ext === ".pdf"
                ? pdfIcon
                : file.ext === ".xls"
                ? xlsIcon
                : undefined,
            sizeFormatted:
              file.size > 1000
                ? `${(file.size / 1000).toFixed(1)} мб`
                : `${file.size.toFixed()} кб`,
            year: parseInt(file.name.split(/,| /)[0]),
          }))
          .sort((a, b) => b.year - a.year);
        setFiles(fetchedFiles);
      })
      .catch((error) => console.error("Ошибка при загрузке данных: ", error));
  }, []);

  return (
    <div className="page-grid__content">
      <div className="text-area">
        <p>
          Информация о заключенных договорах об осуществлении технологического
          присоединения к электрическим сетям, содержащих сведения об объеме
          присоединяемой мощности, о сроках и плате по каждому договору.
        </p>
      </div>
      <div className="row-docs-age">
        {files?.map((file, index) => (
          <a
            key={index}
            className="doc-line"
            href={`${addressServer}${file.url}`}
            download
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="doc-line__wrap-icon">
              {file.icon && <img src={file.icon} alt={`icon ${file.ext}`} />}
            </div>
            <div className="doc-line__wrap-text">
              <span className="doc-line__name">{file.name}</span>
              <span className="doc-line__file-info">
                {file.ext.replace(".", "")}, {file.sizeFormatted}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
