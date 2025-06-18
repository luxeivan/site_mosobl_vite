import React from "react";
import { addressServer } from "../config";
import doc from "../img/doc.svg";
import docx from "../img/docx.svg";
import xlsx from "../img/xlsx.svg";
import {motion} from 'framer-motion'
import TopImage from "../components/TopImage";
import imgd44292447d1011f8cd441e0234e03505 from "../img/d44292447d1011f8cd441e0234e03505.jpg";

const result =[
    'Повышение надежности электрических сетей и качества потребляемой электроэнергии;',
    'Создание единых условий по технологическому присоединению потребителей;',
    'Отсутствие эксплуатационных затрат и капитальных вложений.',
]

export default function Gardeners() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <TopImage image={imgd44292447d1011f8cd441e0234e03505} title={"Вниманию объединений садоводов"} />
      <div className="page-grid__content" id="content">
      <div class="text-line">
        <h3 class="line-bottom">Порядок действия заявителя при передаче сетей в АО «Мособлэнерго» </h3>
      </div>
      <div class="grid-block grid-block--v2">
        <div class="vacancies-block">
          <a href={`${addressServer}/uploads/076eb27750fed478b7a8027d4e2c38c8_4a72fa71c4.xlsx?updated_at=2022-10-28T11:51:48.697Z`} download="">
            {" "}
            <h3 class="vacancies-block__caption line-bottom">01. Убедитесь, что ваши сети подключены к сетям АО «Мособлэнерго» </h3>
          </a>{" "}
          <div class="vacancies-block__wrap-text">
            <span class="vacancies-block__text">Найдите Вашу организацию в перечне</span>
            <a class="doc-line" href={`${addressServer}/uploads/076eb27750fed478b7a8027d4e2c38c8_4a72fa71c4.xlsx?updated_at=2022-10-28T11:51:48.697Z`} download="">
              <div class="doc-line__wrap-icon">
                <img src={xlsx} alt="icon xlsx" />
              </div>
              <div class="doc-line__wrap-text">
                <span class="doc-line__name">Перечень некоммерческих объединений граждан</span>
                <span class="doc-line__file-info">xlsx, 67 кб</span>
              </div>
            </a>
          </div>
        </div>
        <div class="vacancies-block">
          <a href={`${addressServer}/uploads/2930f690e9ab6f81b1fabf3b308302f1_236dba3260.docx?updated_at=2022-10-28T11:51:48.250Z`} download="">
            {" "}
            <h3 class="vacancies-block__caption line-bottom">02. Убедитесь, что ваши сети соответствуют условиям для передачи в АО «Мособлэнерго» </h3>
          </a>{" "}
          <div class="vacancies-block__wrap-text">
            <span class="vacancies-block__text">одновременное выполнение всех условий</span>
            <a class="doc-line" href={`${addressServer}/uploads/2930f690e9ab6f81b1fabf3b308302f1_236dba3260.docx?updated_at=2022-10-28T11:51:48.250Z`} download="">
              <div class="doc-line__wrap-icon">
                <img src={docx} alt="icon docx" />
              </div>
              <div class="doc-line__wrap-text">
                <span class="doc-line__name">Условия передачи сетей</span>
                <span class="doc-line__file-info">docx, 21 кб</span>
              </div>
            </a>
          </div>
        </div>
        <div class="vacancies-block">
          <a href={`${addressServer}/uploads/37cb6a61075931ba8d7434571fbb78a6_e9167ca131.docx?updated_at=2022-10-28T11:51:48.052Z`} download="">
            {" "}
            <h3 class="vacancies-block__caption line-bottom">03. Подготовьте комплект необходимых документов </h3>
          </a>{" "}
          <div class="vacancies-block__wrap-text">
            <span class="vacancies-block__text">соберите максимальное количество документов из перечня</span>
            <a class="doc-line" href={`${addressServer}/uploads/37cb6a61075931ba8d7434571fbb78a6_e9167ca131.docx?updated_at=2022-10-28T11:51:48.052Z`} download="">
              <div class="doc-line__wrap-icon">
                <img src={docx} alt="icon docx" />
              </div>
              <div class="doc-line__wrap-text">
                <span class="doc-line__name">Перечень документов</span>
                <span class="doc-line__file-info">docx, 30 кб</span>
              </div>
            </a>
          </div>
        </div>
        <div class="vacancies-block">
          <div>
            {" "}
            <h3 class="vacancies-block__caption line-bottom">04. Направьте обращение на адрес АО «Мособлэнерго» </h3>
          </div>{" "}
          <div class="vacancies-block__wrap-text">
            <span class="vacancies-block__text">по прилагаемой форме с приложением документов</span>
            <a class="doc-line" href={`${addressServer}/uploads/9c1677d5da28d5ba207427f4ed69922c_27ef2d4556.docx?updated_at=2022-10-28T11:51:47.633Z`} download="">
              <div class="doc-line__wrap-icon">
                <img src={docx} alt="icon docx" />
              </div>
              <div class="doc-line__wrap-text">
                <span class="doc-line__name">Форма обращения</span>
                <span class="doc-line__file-info">docx, 13 кб</span>
              </div>
            </a>
            <a class="doc-line" href={`${addressServer}/uploads/0fecad9bbfea32d99dab1d6a46d8a333_23f15aa0a4.docx?updated_at=2022-10-28T11:51:47.536Z`} download="">
              <div class="doc-line__wrap-icon">
                <img src={docx} alt="icon docx" />
              </div>
              <div class="doc-line__wrap-text">
                <span class="doc-line__name">Способ представления документов</span>
                <span class="doc-line__file-info">docx, 13 кб</span>
              </div>
            </a>
          </div>
        </div>
        <div class="vacancies-block">
          <div>
            {" "}
            <h3 class="vacancies-block__caption line-bottom">05. АО «Мособлэнерго» проводит обследование сетей и экспертизу документов </h3>
          </div>{" "}
          <div class="vacancies-block__wrap-text">
            <span class="vacancies-block__text">в течение 30 дней</span>
          </div>
        </div>
        <div class="vacancies-block">
          <div>
            {" "}
            <h3 class="vacancies-block__caption line-bottom">06. Результат рассмотрения обращения </h3>
          </div>{" "}
          <div class="vacancies-block__wrap-text">
            <span class="vacancies-block__text">
              <br />
            </span>
            <a class="doc-line" href={`${addressServer}/uploads/58071ac9efcda88e2e523bd6dc10cd94_c37d3498f9.doc?updated_at=2022-10-28T11:51:48.481Z`} download="">
              <div class="doc-line__wrap-icon">
                <img src={doc} alt="icon doc" />
              </div>
              <div class="doc-line__wrap-text">
                <span class="doc-line__name">Заключение договора.doc</span>
                <span class="doc-line__file-info">doc, 68 кб</span>
              </div>
            </a>
            <a class="doc-line" href={`${addressServer}/uploads/7c06e5a1b4f87fda9fda6ad439663c8a_776ab83838.docx?updated_at=2022-10-28T11:51:47.836Z`} download="">
              <div class="doc-line__wrap-icon">
                <img src={docx} alt="icon docx" />
              </div>
              <div class="doc-line__wrap-text">
                <span class="doc-line__name">Мотивированный отказ</span>
                <span class="doc-line__file-info">docx, 21 кб</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="text-area">
        <h3 class="line-bottom">Результат:</h3>
        <ul>
        {result.map((item,index)=>
            <li  key={index}>
            <p style={{ display: "flex", alignItems: "center" }}>
              {/* <img src={checkIcon} style={{ marginRight: "10px" }} /> */}
              {item}
            </p>
          </li>)}
        </ul>{" "}
      </div>
      </div>
    </motion.div>
  );
}
