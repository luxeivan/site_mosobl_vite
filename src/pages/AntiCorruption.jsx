import React from "react";
import { addressServer } from "../config";
import pdf from "../img/pdf.svg";
import { motion } from "framer-motion";
import img645bacfd778f59d52bde903ed23400dd from "../img/645bacfd778f59d52bde903ed23400dd.jpg";
import TopImage from "../components/TopImage";
const known = [
  'о готовящихся или свершившихся фактах коррупции, мошенничества, хищений и других угрозах безопасности людей и объектов АО "Мособлэнерго";',
  'о нарушениях при проведении закупочных процедур в АО "Мособлэнерго";',
  'о злоупотреблениях служебным положением и превышении полномочий должностными лицами АО "Мособлэнерго";',
  'о фактах вымогательства при обеспечении процедур технологического присоединения к электросетям АО "Мособлэнерго";',
  "о совершении иных действий, которые наносят или могут нанести материальный ущерб или причинить вред деловой репутации АО «Мособлэнерго».",
];

export default function AntiCorruption() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage
        image={img645bacfd778f59d52bde903ed23400dd}
        title={"Антикоррупционная деятельность"}
      />
      <div className="page-grid__content" id="content">
        <div className="text-area border-bottom">
          <p>Уважаемые посетители!</p>
          <p>
            Обеспечение безопасности энергетических объектов и работников
            компании, антикоррупционная и антитеррористическая деятельность, а
            также обеспечение экономической и информационной безопасности
            являются одними из важнейших задач АО "Мособлэнерго".
          </p>
          <p>Если Вам стало известно:</p>
          <ul>
            {known.map((item, index) => (
              <li key={index}>
                <p style={{ display: "flex", alignItems: "center" }}>
                  {/* <img src={checkIcon} style={{ marginRight: "10px" }} /> */}
                  {item}
                </p>
              </li>
            ))}
          </ul>
          <strong>8(495)780-39-62 доб. 3336, 3339</strong>{" "}
          <a className="email-link" href="mailto:sb@mosoblenergo.ru">
            sb@mosoblenergo.ru
          </a>
          <p>Конфиденциальность гарантируем!</p>
        </div>
        <br />{" "}
        <div className="row-docs-age">
          <a
            className="doc-line"
            href={`${addressServer}/uploads/846ab2624384624e15d406bfa509493c_compressed_64f929ccf4.pdf?updated_at=2022-10-28T11:19:26.393Z`}
            download=""
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="doc-line__wrap-icon">
              <img src={pdf} alt="icon pdf" />
            </div>
            <div className="doc-line__wrap-text">
              <span className="doc-line__name">
                Памятка "Что нужно знать о коррупции?"
              </span>
              <span className="doc-line__file-info">pdf, 1мб</span>
            </div>
          </a>
          <a
            className="doc-line"
            href={`${addressServer}/uploads/Antikorrupczionnaya_politika_762adf5a21.pdf`}
            download=""
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="doc-line__wrap-icon">
              <img src={pdf} alt="icon pdf" />
            </div>
            <div className="doc-line__wrap-text">
              <span className="doc-line__name">Антикоррупционная политика</span>
              <span className="doc-line__file-info">pdf, 5,4 мб</span>
            </div>
          </a>
          {/* Новый док */}
          <a
            className="doc-line"
            href={`${addressServer}/uploads/Izmeneniya_v_Antikorrupczionnuyu_politiku_ee0ee379cf.docx`}
            download=""
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="doc-line__wrap-icon">
              <img src={pdf} alt="icon pdf" />
            </div>
            <div className="doc-line__wrap-text">
              <span className="doc-line__name">
                Изменения в Антикоррупционную политику
              </span>
              <span className="doc-line__file-info">docs, 17 кб</span>
            </div>
          </a>
          {/* Новый док */}
          <a
            className="doc-line"
            href={`${addressServer}/uploads/09712613ac9e27d2b3283ed9d15b7ad6_compressed_d1ab536605.pdf?updated_at=2022-10-28T11:19:26.263Z`}
            download=""
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="doc-line__wrap-icon">
              <img src={pdf} alt="icon pdf" />
            </div>
            <div className="doc-line__wrap-text">
              <span className="doc-line__name">
                Антикоррупционные стандарты акционерного общества «Московская
                областная энергосетевая компания»
              </span>
              <span className="doc-line__file-info">pdf, 205 кб</span>
            </div>
          </a>
        </div>
        <div className="text-line line-bottom">
          <h3>Антитеррористическая деятельность</h3>
        </div>
        <div className="row-docs-age">
          <a
            className="doc-line"
            href={`${addressServer}/uploads/d795d364887f3cf09a4b919d12bdb3a5_compressed_eda29f5cdd.pdf?updated_at=2022-10-28T11:19:25.991Z`}
            download=""
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="doc-line__wrap-icon">
              <img src={pdf} alt="icon pdf" />
            </div>
            <div className="doc-line__wrap-text">
              <span className="doc-line__name">
                Памятка работнику АО «Мособлэнерго»/гражданину при совершении
                террористического акта с применением химических и отравляющих
                веществ
              </span>
              <span className="doc-line__file-info">pdf, 126 кб</span>
            </div>
          </a>

          <a
            className="doc-line"
            href={`${addressServer}/uploads/b29330c4733153e1db70e06af28b0944_compressed_d299ff6d67.pdf?updated_at=2022-10-28T11:19:25.812Z`}
            download=""
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="doc-line__wrap-icon">
              <img src={pdf} alt="icon pdf" />
            </div>
            <div className="doc-line__wrap-text">
              <span className="doc-line__name">
                Памятка работнику АО «Мособлэнерго» /гражданинупри обнаружении
                подозрительного предмета, который может оказаться взрывным
                устройством на объектах АО «Мособлэнерго», а также захвате в
                заложники, получении информации о готовящемся террористическом
                акте
              </span>
              <span className="doc-line__file-info">pdf, 118 кб</span>
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
