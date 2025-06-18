import { motion } from "framer-motion";
import React from "react";
// import { Link } from "react-router-dom";
import TopImage from "../../components/TopImage";
import { addressServer } from "../../config";
import imge52d6b93112691c58929068e092b99f2 from "../../img/e52d6b93112691c58929068e092b99f2.jpg";
// import img1 from "../../img/charging/1.jpg";
// import img2 from "../../img/charging/2.jpg";
// import img3 from "../../img/charging/3.jpg";
// import img4 from "../../img/charging/4.jpg";
// import img5 from "../../img/charging/5.jpg";
// import img6 from "../../img/charging/6.jpg";
// import img7 from "../../img/charging/7.jpg";
// import img8 from "../../img/charging/8.jpg";
import ElectricChargingStations from "../../components/ElectricChargingStations";

export default React.memo(function ChargingStations() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage
        image={imge52d6b93112691c58929068e092b99f2}
        title={"Зарядные станции для электромобилей"}
      />
      <div className="page-grid__content" id="content">
        <div className="text-area">
          <ElectricChargingStations />
          <h3 className="charging__title">
            Технические характеристики электрических зарядных станций АО
            «Мособлэнерго»:
          </h3>
          <ul style={{ margin: "0 auto", maxWidth: "1200px" }}>
            <li>
              <p>Мощность от 3,5 до 22 кВт</p>
            </li>
            <li>
              <p>Номинальный ток зарядки от 16 до 32 А</p>
            </li>
            <li>
              <p>Напряжение 220~400 В, однофазный/трехфазных ток – 50/60 Гц</p>
            </li>
            <li>
              <p>Класс защиты от проникновения: IP54</p>
            </li>
            <li>
              <p>
                Класс защиты от механических воздействий: IK8 Температура
                эксплуатации: от -30 °C до +40 °C Управление энергопотреблением:
                мониторинг потребления (по приложению)
              </p>
            </li>
          </ul>
          <h3 className="charging__title">Типы разъемов:</h3>
          <ul style={{ margin: "0 auto", maxWidth: "1200px" }}>
            <li>
              <p>Shuko (стандартная евро розетка)</p>
            </li>
            <li>
              <p>Type2 (MENNEKES)</p>
            </li>
          </ul>
          <div>
            <br />
          </div>
          <h3 className="charging__title">
            Зарядка автомобиля никогда не была настолько проста
          </h3>
          {/* <p style={{ textAlign: "center" }}>
              <img alt="быстрый способ зарядить автомобиль" src={`${addressServer}/uploads/24b2a02a593a04f610f047315a9c21f0_2c1a9efef7.jpg?updated_at=2022-11-14T11:45:15.654Z`} title="Слайд1.jpg" />
            </p> */}
          <div className="charging-app">
            <div className="charging-app__item">
              <h4 className="charging-app__title">1. Регистрация</h4>
              <img
                className="charging-app__img"
                src={
                  addressServer +
                  "/uploads/1_Registracziya_718f4f32c4.png?updated_at=2023-07-31T06:34:10.423Z"
                }
                alt="1. Регистрация"
              />
            </div>
            <div className="charging-app__item">
              <h4 className="charging-app__title">2. Выбор станции</h4>
              <img
                className="charging-app__img"
                src={
                  addressServer +
                  "/uploads/2_Vybor_stanczii_114ea0584e.png?updated_at=2023-07-31T06:34:11.965Z"
                }
                alt="2. Выбор станции"
              />
            </div>
            <div className="charging-app__item">
              <h4 className="charging-app__title">3. Привязка карты</h4>
              <img
                className="charging-app__img"
                src={
                  addressServer +
                  "/uploads/3_Privyazka_karty_f3ea621b1f.png?updated_at=2023-07-31T06:34:10.679Z"
                }
                alt="3. Привязка карты"
              />
            </div>
            <div className="charging-app__item">
              <h4 className="charging-app__title">4. Зарядка</h4>
              <img
                className="charging-app__img"
                src={
                  addressServer +
                  "/uploads/4_Zaryadka_3c5ec28cf2.png?updated_at=2023-07-31T06:34:11.999Z"
                }
                alt="4. Зарядка"
              />
            </div>
            <div className="charging-app__item">
              <h4 className="charging-app__title">5. Уведомления</h4>
              <img
                className="charging-app__img"
                src={
                  addressServer +
                  "/uploads/5_Uvedomleniya_79d3dfb7d1.png?updated_at=2023-07-31T06:34:12.115Z"
                }
                alt="5. Уведомления"
              />
            </div>
            <div className="charging-app__item">
              <h4 className="charging-app__title">6. Информация о станции </h4>
              <img
                className="charging-app__img"
                src={
                  addressServer +
                  "/uploads/6_Informacziya_o_stanczii_47927d3aa1.png?updated_at=2023-07-31T06:34:12.261Z"
                }
                alt="6. Информация"
              />
            </div>
            <div className="charging-app__item">
              <h4 className="charging-app__title">7. Выбор режима зарядки</h4>
              <img
                className="charging-app__img"
                src={
                  addressServer +
                  "/uploads/7_Vybor_rezhima_zaryadki_736cfe9034.png?updated_at=2023-07-31T06:34:11.662Z"
                }
                alt="7. Режим зарядки"
              />
            </div>
            <div className="charging-app__item">
              <h4 className="charging-app__title">8. Меню</h4>
              <img
                className="charging-app__img"
                src={
                  addressServer +
                  "/uploads/8_Menyu_a78731c4eb.png?updated_at=2023-07-31T06:34:12.044Z"
                }
                alt="8. Меню"
              />
            </div>
          </div>
          <h3 className="charging__title">
            ФОТОГРАФИИ ЭЗС УСТАНОВЛЕННЫЕ В «УМНЫХ ОПОРАХ» МОЩНОСТЬЮ 3,5 КВТ
          </h3>
          <p style={{ textAlign: "center" }}>
            <img
              style={{ display: "inline", maxWidth: "100%" }}
              alt="Фотографии ЭЗС установленные в «Умных опорах» мощностью 3,5 кВт.jpg"
              src={`${addressServer}/uploads/0f0e752c1bfd77fadde51f5442e9f82e_bb9c8150a5.jpg?updated_at=2022-11-14T11:45:14.960Z`}
            />
          </p>
          <h3 className="charging__title">
            ФОТОГРАФИИ ОТДЕЛЬНОСТОЯЩИХ ЭЗС 3,5 КВТ
          </h3>
          <p style={{ textAlign: "center" }}>
            <img
              style={{ display: "inline", maxWidth: "100%" }}
              alt="Фотографии отдельностоящих ЭЗС 3,5 кВт.jpg"
              src={`${addressServer}/uploads/7fec8b6dd87ab98a2c9daaaef4d71c94_73156842c3.jpg?updated_at=2022-11-14T11:45:15.167Z`}
            />
          </p>
          <h3 className="charging__title">
            ФОТОГРАФИИ ОТДЕЛЬНОСТОЯЩИХ ЭЗС 22 КВТ
          </h3>
          <p style={{ textAlign: "center" }}>
            <img
              style={{ display: "inline", maxWidth: "100%" }}
              alt="Фотографии отдельностоящих ЭЗС 22 кВт.jpg"
              src={`${addressServer}/uploads/85efa49946a258785d2db9365a2f0805_ac74800947.jpg?updated_at=2022-11-14T11:45:15.345Z`}
            />
          </p>
        </div>
        {/* <div className="row-docs-age">
          <a
            className="doc-line"
            href={`${addressServer}/uploads/919923874bb18cac550bea753d1095fc_8f6a99680c.docx?updated_at=2022-11-14T11:45:14.274Z`}
            download=""
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="doc-line__wrap-icon">
              <img src={docx} alt="icon docx" />
            </div>
            <div className="doc-line__wrap-text">
              <span className="doc-line__name">Часто задаваемые вопросы</span>
              <span className="doc-line__file-info">docx, 16 кб</span>
            </div>
          </a>
        </div> */}
      </div>
    </motion.div>
  );
});
