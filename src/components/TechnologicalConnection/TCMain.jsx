import React from "react";
import { addressServer } from "../../config";
import pdf from "../../img/pdf.svg";

import img39183659301ae48cbce79c02699311ba from "../../img/39183659301ae48cbce79c02699311ba.jpg";
import imgc9aa4799530f04b8ca426ca7cbc50628 from "../../img/c9aa4799530f04b8ca426ca7cbc50628.jpg";
import imgb1c9f93332b6312256a7f804cf1f0a27 from "../../img/b1c9f93332b6312256a7f804cf1f0a27.jpg";

export default function TCMain() {
  return (
    <div className="page-grid__content" id="content">
      <div className="block-info">
        <div className="block-info__up">
          <div className="block-info__wrap-img">
            <picture>
              <img
                src={img39183659301ae48cbce79c02699311ba}
                alt="Контакт-центр"
              />
            </picture>
          </div>
          <div className="block-info__wrap-text">
            <h3 className="block-info__caption">Контакт-центр</h3>
          </div>
        </div>
        <div className="block-info__grid">
          <div className="text-block">
            <h4>Центр обслуживания клиентов:</h4>
            <p>
              Московская область, Красногорский р-н, 26 км автодороги «Балтия»,
              Бизнес Центр «RigaLand», строение А, подъезд 4
            </p>
          </div>
          <div className="text-block">
            <h4>Режим работы:</h4>
            <span>
              По рабочим дням – <b>с 8.00 до 17.00</b>
            </span>
            <span>
              в пятницу – <b>с 8.00 до 15.45</b>
            </span>
            <span>(без обеденного перерыва)</span>
          </div>
          <div className="text-block">
            <h4>Контактный телефон:</h4>
            <a className="tel-contacts" href="tel:+74957850000">
              {" "}
              +7 (495) 785-00-00{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="block-info">
        <div className="block-info__up">
          <div className="block-info__wrap-img">
            <picture>
              <img
                src={imgc9aa4799530f04b8ca426ca7cbc50628}
                alt="Портал потребителя"
              />
            </picture>
          </div>
          <div className="block-info__wrap-text">
            <h3 className="block-info__caption">Портал потребителя</h3>
          </div>
        </div>
        <div className="block-info__down">
          <div className="text-block">
            Подать заявку на технологическое присоединение к электрическим сетям
            АО "Мособлэнерго" Вы можете в личном кабинете на{" "}
            <a
              href="https://moetp.ru"
              rel="noopener noreferrer"
              target="_blank"
            >
              "Портале потребителя"
            </a>
            .
          </div>
        </div>
      </div>
      <div className="block-info">
        <div className="block-info__up">
          <div className="block-info__wrap-img">
            <picture>
              <img
                src={imgb1c9f93332b6312256a7f804cf1f0a27}
                alt="Портал Государственных и муниципальных услуг Московской области"
              />
            </picture>
          </div>
          <div className="block-info__wrap-text">
            <h3 className="block-info__caption">
              Портал Государственных и муниципальных услуг Московской области
            </h3>
          </div>
        </div>
        <div className="block-info__down">
          <div className="text-block">
            <p>
              Также заявку можно оформить на Портале Государственных и
              муниципальных услуг Московской области -{" "}
              <a
                href="https://uslugi.mosreg.ru/"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://uslugi.mosreg.ru/
              </a>
            </p>
            <p>
              <a
                href="https://www.youtube.com/watch?v=YL8au7k-C54&amp;feature=youtu.be"
                rel="noopener noreferrer"
                target="_blank"
              >
                Видеоинструкция по подаче заявки на технологическое
                присоединение (смотреть)
              </a>
            </p>
          </div>
          <a
            className="doc-line"
            href={`${addressServer}/uploads/Instrukcziya_Dogovor_Elektrika_69ae54d22f.pdf?updated_at=2023-01-24T18:12:01.094Z`}
            download=""
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="doc-line__wrap-icon">
              <img src={pdf} alt="icon pdf" />
            </div>
            <div className="doc-line__wrap-text">
              <span className="doc-line__name">
                Инструкция по подаче заявки на технологическое присоединение
                (скачать)
              </span>
              <span className="doc-line__file-info">pdf, 2 мб</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
