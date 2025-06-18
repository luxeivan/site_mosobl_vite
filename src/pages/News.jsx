import React from "react";
import { motion } from "framer-motion";
import img5d1dda82e3641ae19df5a51619ffb49c from "../img/5d1dda82e3641ae19df5a51619ffb49c.jpg";
import TopImage from "../components/TopImage";
import telegramQR from "../img/planned/YQR.svg";
import alarm from "../img/planned/alarm_alert_bell.svg";

const actual = [
  "https://t.me/mosoblenergo",
  "https://vk.com/mosoblenergo",
  "https://ok.ru/mosoblenergo",
  "https://dzen.ru/mosoblenergo",
];
const off = [
  "https://t.me/mosoblenergo24",
  "https://vk.com/mosoblenergo24",
  "https://ok.ru/mosoblenergo24",
];

export default function News() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage
        image={img5d1dda82e3641ae19df5a51619ffb49c}
        title={"Новости компании"}
      />
      <div className="page-grid__content" id="content">
        {/* <div className="creditRating-area">
          <div className="creditRating">
            <img className="creditRating__img" src={creditRating} alt="logo" />
            <div className="creditRating__desc">
              <h3 className="creditRating__title">АО «Мособлэнерго» присвоен кредитный рейтинг АА+ «Стабильный»</h3>
              <p className="creditRating__text">
                Одно из крупнейших рейтинговых агентств АКРА присвоило АО «Мособлэнерго» кредитный рейтинг АА+(RU) «Стабильный». Рейтинг отражает сильную рыночную позицию компании в Подмосковье, хороший операционный профиль, высокую рентабельность
                бизнеса, низкий уровень долговой нагрузки и хороший уровень ликвидности.
              </p>
              <div className="creditRating__link-area">
                <Link className="creditRating__link block-btn" to="/creditRating">
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        </div> */}
        <div class="text-area">
          <p>
            Актуальная информация о работе компании публикуется в Telegram и
            соцсетях:
          </p>
          <ul>
            {actual.map((item, index) => (
              <li key={index}>
                <p style={{ display: "flex", alignItems: "center" }}>
                  {/* <img src={checkIcon} style={{ marginRight: "10px" }} /> */}
                  <a href={item}>{item}</a>{" "}
                </p>{" "}
              </li>
            ))}
          </ul>
          <p>Плановые отключения публикуются в Telegram и соцсетях:</p>
          <ul>
            {off.map((item, index) => (
              <li key={index}>
                <p style={{ display: "flex", alignItems: "center" }}>
                  {/* <img src={checkIcon} style={{ marginRight: "10px" }} /> */}
                  <a href={item}>{item}</a>{" "}
                </p>{" "}
              </li>
            ))}
          </ul>
        </div>
        <div className="planned-notification">
          <div className="planned-notification__area planned-notification__area_col">
            <div className="planned-notification__title-area">
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <img src={alarm} className="planned-notification__picture" />
              <h3 className="planned-notification__title">
                Уведомления о возможных плановых отключениях в Telegram по
                указанному адресу
              </h3>
            </div>
            <div className="planned-notification__text">
              <p>
                Уважаемые потребители! АО «Мособлэнерго» предлагает вам
                воспользоваться удобным способом получения информации о
                возможных плановых отключениях электроэнергии в сетях компании
                через специальный{" "}
                <a
                  style={{
                    color: "#0061aa",
                    textDecorationColor: "#85a0b5",
                    textDecorationLine: "underline",
                  }}
                  href="https://t.me/Mosoblenergo24_bot"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Telegram-бот
                </a>{" "}
              </p>
              <p style={{ fontWeight: 600 }}>Подписывайтесь!</p>
            </div>
          </div>
          <div className="planned-notification__area">
            <div className="planned-notification__link-area">
              <img
                src={telegramQR}
                alt="qr"
                className="planned-notification__qr"
              />
              <a
                type="button"
                className="planned-notification__link"
                href="https://t.me/Mosoblenergo24_bot"
                target="_blank" rel="noreferrer"
              >
                Перейти в Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
