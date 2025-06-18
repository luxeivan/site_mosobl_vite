import React from "react";
import { addressServer } from "../../config";
import docx from "../../img/docx.svg";

export default function TCPasportService() {
  return (
    <div className="page-grid__content">
      <div className="row-docs-age">
        <a
          className="doc-line"
          href={`${addressServer}/uploads/e66191405790f1b04eef18b07f3de0c1_55fcd7ab3f.docx?updated_at=2022-11-15T11:33:37.538Z`}
          download=""
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="doc-line__wrap-icon">
            <img src={docx} alt="icon docx" />
          </div>
          <div className="doc-line__wrap-text">
            <span className="doc-line__name">Паспорт услуги до 150 кВт</span>
            <span className="doc-line__file-info">docx, 26 кб</span>
          </div>
        </a>
        <a
          className="doc-line"
          href={`${addressServer}/uploads/8ad7cd4f9c1873b8ecc4b97fc2eff545_e3cdc4ea5c.docx?updated_at=2022-11-15T11:33:36.943Z`}
          download=""
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="doc-line__wrap-icon">
            <img src={docx} alt="icon docx" />
          </div>
          <div className="doc-line__wrap-text">
            <span className="doc-line__name">
              Паспорт услуги свыше 150 до 670 кВт
            </span>
            <span className="doc-line__file-info">docx, 27 кб</span>
          </div>
        </a>
        <a
          className="doc-line"
          href={`${addressServer}/uploads/080712060e4a8c09c94b3addf5d7de9c_6fd3c94c18.docx?updated_at=2022-11-15T11:33:37.119Z`}
          download=""
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="doc-line__wrap-icon">
            <img src={docx} alt="icon docx" />
          </div>
          <div className="doc-line__wrap-text">
            <span className="doc-line__name">Паспорт услуги свыше 670 кВт</span>
            <span className="doc-line__file-info">docx, 26 кб</span>
          </div>
        </a>
        <a
          className="doc-line"
          href={`${addressServer}/uploads/b29c07bf0864b2500c1042d1abb1346d_1c622b1944.docx?updated_at=2022-11-15T11:33:37.306Z`}
          download=""
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="doc-line__wrap-icon">
            <img src={docx} alt="icon docx" />
          </div>
          <div className="doc-line__wrap-text">
            <span className="doc-line__name">
              Паспорт услуги восстановление, переоформление
            </span>
            <span className="doc-line__file-info">docx, 29 кб</span>
          </div>
        </a>
        <a
          className="doc-line"
          href={`${addressServer}/uploads/f235f9ae93996d22a0a3b5ba1c81492e_ac7e781621.docx?updated_at=2022-11-15T11:33:38.209Z`}
          download=""
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="doc-line__wrap-icon">
            <img src={docx} alt="icon docx" />
          </div>
          <div className="doc-line__wrap-text">
            <span className="doc-line__name">
              Паспорт услуги перераспределение
            </span>
            <span className="doc-line__file-info">docx, 26 кб</span>
          </div>
        </a>
        <a
          className="doc-line"
          href={`${addressServer}/uploads/7b94bc317f03e8aae38d937d9f6776ce_f2dac58a76.docx?updated_at=2022-11-15T11:33:38.005Z`}
          download=""
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="doc-line__wrap-icon">
            <img src={docx} alt="icon docx" />
          </div>
          <div className="doc-line__wrap-text">
            <span className="doc-line__name">Паспорт услуги временное ТП</span>
            <span className="doc-line__file-info">docx, 35 кб</span>
          </div>
        </a>
        <a
          className="doc-line"
          href={`${addressServer}/uploads/3d129ba1ebe647932d42909301af5b73_346c6863ae.docx?updated_at=2022-11-15T11:33:37.780Z`}
          download=""
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="doc-line__wrap-icon">
            <img src={docx} alt="icon docx" />
          </div>
          <div className="doc-line__wrap-text">
            <span className="doc-line__name">
              Паспорт услуги временное ТП по передвижным объектам
            </span>
            <span className="doc-line__file-info">docx, 34 кб</span>
          </div>
        </a>
      </div>
    </div>
  );
}
