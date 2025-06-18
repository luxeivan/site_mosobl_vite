import React from "react";

import telImg from '../img/contacts-icon2.svg'
import mapImg from '../img/contacts-icon1.svg'
import {motion} from 'framer-motion'
import img78f4762845b4378f1947a2fa7912e72d from "../img/78f4762845b4378f1947a2fa7912e72d.jpg";
import TopImage from "../components/TopImage";


export default function ContactForMedia() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <TopImage image={img78f4762845b4378f1947a2fa7912e72d} title={"Контакты для СМИ"} />
      <div className="page-grid__content" id="content">
      <div class="contacts-row">
        <div class="contacts-row__wrap-icon">
          <img class="contacts-row__icon" src={mapImg} alt="icon" />
        </div>
        <div class="contacts-row__wrap-text">
          <span class="contacts-row__caption">Почтовый адрес:</span>
          <span class="contacts-row__text">143421, Красногорский р-н, 26 км автодороги «Балтия», Бизнес Центр «Рига-Ленд», строение Б3.</span>
        </div>
      </div>
      <div class="contacts-row">
        <div class="contacts-row__wrap-icon">
          <img class="contacts-row__icon" src={telImg} alt="icon" />
        </div>
        <div class="contacts-row__wrap-text">
          <span class="contacts-row__caption">Наш телефон:</span>
          <span class="contacts-row__text">
            <b>+7 (495) 780-39-62</b>, факс <b>+7 (495) 780-39-60</b>
          </span>
        </div>
      </div>
      <p class="text">Следите за анонсами пресс-центра "Мособлэнерго"</p>{" "}
      </div>
    </motion.div>
  );
}
