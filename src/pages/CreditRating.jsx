import React from "react";
// import pdf from "../img/pdf.svg";
// import { addressServer } from "../config";
import { motion } from "framer-motion";
import TopImage from "../components/TopImage";
// import img4c2c362e8d8fa557788c556795d32fae from "../img/4c2c362e8d8fa557788c556795d32fae.jpg";

import creditRating from "../img/PHOTO-2023-01-27-13-58-30.jpg";

export default function CreditRating() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage title={"Кредитный рейтинг"} />
      <div className="page-grid__content" id="content">
        <div className="page-creditRating">
          <img
            className="page-creditRating__img"
            src={creditRating}
            alt="logo"
          />
          <div className="page-creditRating__desc">
            <h2>
              АО «Мособлэнерго» присвоен кредитный рейтинг АА+ «Стабильный»
            </h2>
            <p className="page-creditRating__text">
              Одно из крупнейших рейтинговых агентств АКРА присвоило АО
              «Мособлэнерго» кредитный рейтинг АА+(RU) «Стабильный». Рейтинг
              отражает сильную рыночную позицию компании в Подмосковье, хороший
              операционный профиль, высокую рентабельность бизнеса, низкий
              уровень долговой нагрузки и хороший уровень ликвидности.
            </p>
            <p>
              Ключевыми факторами оценки при составлении рейтинга также стали
              инфраструктурная монополия с низким сбытовым риском, хороший
              уровень доступа к внешним источникам ликвидности.
            </p>
            <p>
              Кредитный рейтинг был присвоен АО «Мособлэнерго» впервые. При
              присвоении использовалась информация, качество и достоверность
              которой, по мнению АКРА, являются надлежащими и достаточными для
              применения методологий. Пересмотр кредитного рейтинга и прогноза
              по кредитному рейтингу АО «Мособлэнерго» ожидается в течение
              одного года.
            </p>
            <p>
              Подробнее о кредитном рейтинге АКРА, присвоенном АО «Мособлэнерго»
              можно ознакомиться, перейдя по ссылке{" "}
              <a
                href="https://www.acra-ratings.ru/press-releases/3671"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://www.acra-ratings.ru/press-releases/3671
              </a>
              .
            </p>
            <p>
              Рейтинговое агентство АКРА учреждено в 2015 году. Основная задача
              агентства – обеспечение качественным рейтинговым и аналитическим
              продуктом участников финансового рынка. АКРА присваивает кредитные
              рейтинги банкам и финансовым институтам, организациям
              корпоративного сектора, региональным и муниципальным органам
              власти РФ.
            </p>
          </div>
        </div>
        {/* <div class="row-docs-age">
        <a class="doc-line" href={`${addressServer}/uploads/b0bfad9761462fc15e13c0a467d3222a_compressed_16d27663a4.pdf?updated_at=2022-10-28T11:38:17.350Z`} download="" rel="noopener noreferrer" target="_blank" >
          <div class="doc-line__wrap-icon">
            <img src={pdf} alt="icon pdf" />
          </div>
          <div class="doc-line__wrap-text">
            <span class="doc-line__name">Сертификат соответствия по ГОСТ Р ИСО 9001-2015</span>
            <span class="doc-line__file-info">pdf, 1мб</span>
          </div>
        </a>

        <a class="doc-line" href={`${addressServer}/uploads/6c361f0b60af4fb806c890d0f972112d_compressed_be901966f5.pdf?updated_at=2022-10-28T11:38:17.248Z`} download="" rel="noopener noreferrer" target="_blank" >
          <div class="doc-line__wrap-icon">
            <img src={pdf} alt="icon pdf" />
          </div>
          <div class="doc-line__wrap-text">
            <span class="doc-line__name">Cертификационный аудит систем экологического менеджмента на соответствие требованиям ГОСТ Р ИСО 14001-2016 «Системы экологического менеджмента. Требования и руководство по применению»</span>
            <span class="doc-line__file-info">pdf, 205 кб</span>
          </div>
        </a>
      </div> */}
      </div>
    </motion.div>
  );
}
