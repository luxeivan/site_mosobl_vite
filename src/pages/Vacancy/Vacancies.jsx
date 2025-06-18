// import React from "react";
// import { motion } from "framer-motion";
// import { Splitter, Grid, Space, Card, Typography } from "antd";
// import TopImage from "../../components/TopImage";
// import vacan_img from "../../img/d21248be80705e7a80efdf5efde73cc5.jpg";
// import styles from "./Vacancies.module.css";

// import JobPart from "./Job/JobPart";
// import PracticePart from "./Practice/PracticePart";
// import DownBlock from "./DownBlock/DownBlock";

// const { Title, Text } = Typography;

// const { useBreakpoint } = Grid;

// export default function Vacancies() {
//   const screens = useBreakpoint();
//   const isMobile = !screens.md; // md ~ 768px, если ширина < 768, считаем мобильной

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Заглавная картинка */}
//       {/* <TopImage title={"Моя карьера"} image={vacan_img} /> */}
//       <TopImage title={"Моя карьера"} />

//       <div className="page-grid__content" id="content">
//         {isMobile ? (
//           // Мобильная верстка: блоки идут вертикально друг под другом
//           <Space direction="vertical" style={{ width: "100%" }}>
//             <JobPart />
//             <PracticePart />
//           </Space>
//         ) : (
//           // Десктопная верстка: используем Splitter
//           <>
//             <Splitter style={{ height: "auto" }}>
//               <Splitter.Panel
//                 defaultSize="50%"
//                 min="30%"
//                 max="70%"
//                 className={styles.right}
//               >
//                 <JobPart />
//               </Splitter.Panel>
//               <Splitter.Panel className={styles.left}>
//                 <PracticePart />
//               </Splitter.Panel>
//             </Splitter>
//             {/* <DownBlock/> */}
//           </>
//         )}
//       </div>
//     </motion.div>
//   );
// }


//Старый вариант
import React from "react";
import { motion } from "framer-motion";
import TopImage from "../../components/TopImage";
import vacan_img from "../../img/d21248be80705e7a80efdf5efde73cc5.jpg";
import qr_rabota_ru from "../../img/QR_HH.png";
import { Link } from "react-router-dom";

export default function Vacancies() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage image={vacan_img} title={"Моя карьера"} />
      <div className="page-grid__content" id="content">
        <p style={{ textAlign: "center", marginBottom: "10px" }}></p>
        <div className="vacancies-main">
          <div className="vacancies-main__item vacancies">
            <div className="vacancies__text-area">
              <h3>
                По вопросам трудоустройства и прохождения производственной
                практики звоните:
              </h3>
              <div>
                <a href="tel:+74957803962">
                  <h3 className="vacancies__tel">
                    +7 (495) 780-39-62, доб. 1057
                  </h3>
                </a>
              </div>
            </div>
          </div>
          <div className="vacancies vacancies-main__item">
            <div className="vacancies__text-area">
              <h3>Актуальные вакансии можно посмотреть на платформе hh.ru </h3>
              <div className="vacancies__button-area">
                {" "}
                <a
                  href="https://hh.ru/employer/221874"
                  // href="https://www.rabota.ru/company/1745869/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="open-map__button"
                >
                  Перейти на hh.ru
                </a>
              </div>
            </div>
            <img className="vacancies__img" src={qr_rabota_ru} />
          </div>
          <div className="vacancies-main__item main-info">
            <h2 className="vacancies-main__title branch-post__caption">
              МОСОБЛЭНЕРГО ЭТО:
            </h2>

            <div className="main-info__item">
              <div className="main-info__col-left">
                <p className="main-info__filialcount">11</p>
                <p className="main-info__filialcount-info">
                  УКРУПНЕННЫХ ФИЛИАЛОВ
                </p>
              </div>
              <div className="main-info__col-right">
                <div className="main-info__row">
                  <div className="main-info__col">
                    <p>6 408</p>
                    <p>Специалистов в коллективе</p>
                  </div>
                  <div className="main-info__col">
                    <p>54 000</p>
                    <p>Кабельные и воздушные линии (км)</p>
                  </div>
                </div>
                <div className="main-info__row">
                  <div className="main-info__col">
                    <p>15 000</p>
                    <p>ТП, РП (шт)</p>
                  </div>
                  <div className="main-info__col">
                    <p>15,9</p>
                    <p>
                      Объем переданной электроэнергии в 2024 г. (млрд.
                      киловатт-часов)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="vacancies-main__item targeted-training">
            <h2 className="vacancies-main__title branch-post__caption">
              ЦЕЛЕВОЕ ОБУЧЕНИЕ
            </h2>
            <p className="targeted-training__title">
              <strong>Работа – это не только зарплата, но и:</strong>
            </p>
            <ul className="vacancies-main__list">
              <li className="vacancies-main__list-item targeted-training__item">
                Применение своих знаний и навыков;
              </li>
              <li className="vacancies-main__list-item targeted-training__item">
                Приобретение профессионального и жизненного опыта;
              </li>
              <li className="vacancies-main__list-item targeted-training__item">
                Возможность личностного роста и самореализации;
              </li>
              <li className="vacancies-main__list-item targeted-training__item">
                Возможность узнать новое и расширить круг интересов.
              </li>
            </ul>
          </div>
          <div className="vacancies-main__item">
            <h2 className="vacancies-main__title branch-post__caption">
              ОСНОВНЫЕ НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ
            </h2>
            <ul className="vacancies-main__list">
              <li className="vacancies-main__list-item">
                <div>
                  <h3>Передача электроэнергии</h3> - ключевое направление
                  деятельности АО «Мособлэнерго».
                </div>
              </li>
              <li className="vacancies-main__list-item">
                <div>
                  <h3>Строительство и капитальный ремонт электросетей</h3>{" "}
                  C целью развития электросетевой инфраструктуры Московской
                  области компания ежегодно проводит капитальный ремонт,
                  реконструкцию и строительство новых электросетей.
                </div>
              </li>
              <li className="vacancies-main__list-item">
                <div>
                  <h3>Технологическое присоединение </h3>энергопринимающих
                  устройств потребителей к электросетям -
                  приоритетное направление работы компании. С целью оптимизации
                  процесса подачи заявок и оформления договоров на
                  технологическое присоединение на территории области создана
                  широкая сеть клиентских офисов компании, а также успешно
                  работает Портал потребителя www.moetp.ru.
                </div>
              </li>
            </ul>
          </div>
          <div className="vacancies-main__item">
            <h2 className="vacancies-main__title branch-post__caption">
              РАЗВИТИЕ КОМПАНИИ
            </h2>
            <ul className="vacancies-main__list development">
              <li className="vacancies-main__list-item">
                <div>
                  <div className="development__year-area">
                    <p className="development__year">2005</p>
                  </div>
                </div>
                <div>
                  <h3>Создание АО «МОСОБЛЭНЕРГО»</h3>
                  <p>
                    АО «Мособлэнерго» было создано в 2005 году на основании
                    постановления Правительства Московской области, которому
                    принадлежат 100% акций компании.
                  </p>
                </div>
              </li>
              <li className="vacancies-main__list-item">
                <div>
                  <div className="development__year-area">
                    <p className="development__year">2013</p>
                  </div>
                </div>
                <div>
                  <h3>Консолидация электросетей</h3>
                  <p>
                    В 2013 году компания приступила к реализации Дорожной карты
                    по консолидации электросетевых активов Подмосковья путём
                    принятия на баланс имущества ТСО.
                  </p>
                </div>
              </li>
              <li className="vacancies-main__list-item">
                <div>
                  <div className="development__year-area">
                    <p className="development__year">2019</p>
                  </div>
                </div>
                <div>
                  <h3>Филиальная сеть</h3>
                  <p>
                    1 января 2019 года проведена оптимизация структуры компании.
                    Было образовано 10 укрупненных филиалов, в которые вошли
                    подразделения в городах Подмосковья.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
