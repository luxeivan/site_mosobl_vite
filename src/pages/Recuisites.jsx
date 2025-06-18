import React from "react";

import telImg from "../img/contacts-icon2.svg";
import emailImg from "../img/contacts-icon4.svg";
import mapImg from "../img/contacts-icon1.svg";
import { motion } from "framer-motion";
import img82aba1fa353db6b975974e566bb48a49 from "../img/82aba1fa353db6b975974e566bb48a49.jpg";
import TopImage from "../components/TopImage";

export default function Recuisites() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage
        image={img82aba1fa353db6b975974e566bb48a49}
        title={"Реквизиты компании"}
      />
      <div className="page-grid__content" id="content">
        <div class="contacts-block">
          <div class="contacts-row">
            <div class="contacts-row__wrap-icon">
              <img class="contacts-row__icon" src={mapImg} alt="address" />
            </div>
            <div class="contacts-row__wrap-text">
              <span class="contacts-row__caption">
                Адрес юридического лица:
              </span>
              <span class="contacts-row__text">
                143421, Московская область, г.о. Красногорск, тер. Автодорога
                Балтия, км 26-й, д. 5 стр. 5/3, помещ. 2, ком. 1
              </span>
            </div>
          </div>
          <div class="contacts-row">
            <div class="contacts-row__wrap-icon">
              <img class="contacts-row__icon" src={emailImg} alt="mail" />
            </div>
            <div class="contacts-row__wrap-text">
              <span class="contacts-row__caption">
                Адрес для корреспонденции:
              </span>
              <span class="contacts-row__text">
                143421, Московская область, Красногорский р-н, 26 км автодороги
                «Балтия», Бизнес Центр «Рига-Ленд», строение Б3
              </span>
            </div>
          </div>
          <div class="contacts-row">
            <div class="contacts-row__wrap-icon">
              <img class="contacts-row__icon" src={telImg} alt="phone" />
            </div>
            <div class="contacts-row__wrap-text">
              <span class="contacts-row__caption">Наш телефон:</span>
              <span class="contacts-row__text">
                <b>8 (495) 780-39-62</b>{" "}
              </span>
            </div>
          </div>
        </div>
        <div class="company-details">
          <div class="up-row">
            <h2 class="title">Банковские реквизиты</h2>
          </div>
          <div class="company-details__grid">
            <div class="company-details__wrap">
              <div class="text-area">
                <p>ИНН&nbsp;5032137342,&nbsp; КПП 502401001</p>
                <p>ОГРН 1055006353478</p>
                <p>ОКПО 78100576, ОКТМО 46628101</p>
                <p>Банковские реквизиты:</p>
                <p>р/с&nbsp;40702810492000006024 в Банк ГПБ (АО) г.Москва</p>
                <p>к/с&nbsp;30101810200000000823</p>
                <p>БИК&nbsp;044525823</p>{" "}
              </div>
            </div>
            <div class="company-details__wrap">
              <div class="text-area">
                <p>для департамента технологических присоединений:</p>
                <p>Р/сч №&nbsp;&nbsp;40602810500760000043</p>
                <p>ФИЛИАЛ "ЦЕНТРАЛЬНЫЙ" БАНКА ВТБ (ПАО) Г. МОСКВА</p>
                <p>Кор/сч&nbsp;№ 30101810145250000411</p>
                <p>БИК&nbsp;044525411</p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
