import React, { useEffect, useState } from "react";
import { addressServer } from "../../config";
import axios from "axios";
import pdf from "../../img/pdf.svg";
import doc from "../../img/doc.svg";
import docx from "../../img/docx.svg";
import rar from "../../img/rar.svg";
import xls from "../../img/xls.svg";
import rtf from "../../img/rtf.svg";
const type = {
  pdf,
  doc,
  docx,
  rar,
  xls,
  rtf,
};

export default function TCNormativeDocuments() {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    axios
      .get(`${addressServer}/api/tp-normativno-pravovye-akty?populate=*`)
      .then((response) => {
        if (response.data?.data?.docs) {
          setDocs(response.data.data.docs);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="page-grid__content">
      <div className="row-docs-age">
        {docs?.length > 0 &&
          docs
            .sort((a, b) => Number(a.caption) - Number(b.caption))
            .map((item, index) => (
              <a
                className="doc-line"
                href={`${addressServer}${item.url}`}
                download=""
                rel="noopener noreferrer"
                target="_blank"
                key={index}
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
                    {Number(item.size) > 1000
                      ? `${(item.size / 1000).toFixed(2)} МБ`
                      : `${Math.round(item.size)} КБ`}
                  </span>
                </div>
              </a>
            ))}
      </div>
    </div>
  );
}
