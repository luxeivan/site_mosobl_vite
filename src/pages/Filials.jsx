import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";
import { addressServer } from "../config";
import { motion } from "framer-motion";
import TopImage from "../components/TopImage";
import loading from "../img/loading.png";
const mapState = {
  center: [55.76, 37.64],
  zoom: 8,
  behaviors: ["disable('scrollZoom')", "drag"],
};
// const filials = [
//   { name: "Сергиев Посад", coordinates: [56.284814, 38.124429],location: "Московская область, г. Сергиев Посад, Московское шоссе, д. 40" },
//   { name: "Щелково", coordinates: [55.912773, 37.996608],location: "Московская область, г. Щелково, ул. Советская, д. 23" },
//   { name: "Мытищи", coordinates: [55.939716, 37.766783],location: "Московская область, г. Мытищи, ул. Угольная, д. 1" },
//   { name: "Павловский Посад", coordinates: [55.773687, 38.712879],location: "Московская область, г. Павловский Посад, Интернациональный переулок, д. 26" },
//   { name: "Раменское", coordinates: [55.572533, 38.219605],location: "Московская область, г. Раменское, ул. Махова, д. 6" },
//   { name: "Красногорск", coordinates: [55.819317, 37.350566],location: "Московская область, г. Красногорск, Коммунальный квартал, д. 1" },
//   { name: "Одинцово", coordinates: [55.671605, 37.290792],location: "143006, Московская область, г. Одинцово, ул. Союзная, д. 9" },
//   { name: "Краснознаменск", coordinates: [55.596401, 37.040405],location: "143090, Московская область, г.о.Краснознаменск, ул. Краснознамённая, 14а" },
//   { name: "Домодедово", coordinates: [55.444584, 37.751287],location: "142001, Московская область, г. Домодедово, мкр. Северный, ул. Дачная, д.2" },
//   { name: "Коломна", coordinates: [55.095735, 38.772249],location: "140407, Московская область, г. Коломна, ул. Красногвардейская, д. 36" },
// ];

export default function Filials() {
  const [filials, setFilials] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `${addressServer}/api/filialies?populate=proizvodstvennye_otdeleniyas`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setFilials(data.data);
        // console.log(data.data)
      })
      .catch((err) => {
        console.log(err);
        setFilials([]);
      });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage title={"Информация о компании"} />
      <div className="page-grid__content" id="content">
        <div className="branch-post">
          <h4 className="branch-post__caption">Аппарат управления</h4>
          <span className="branch-post__adrees">
            Московская область, Красногорский район, 26 км автодороги Балтия,
            Бизнес Центр "RigaLand", строение 6, подъезд 4{" "}
          </span>
          <span className="branch-post__tel">8 (495) 780-39-62 </span>
          <a className="branch-post__email" href="tel:mail@mosoblenergo.ru">
            mail@mosoblenergo.ru
          </a>
          <span className="branch-post__text">
            Пн-Чт - <b>8:00 до 17:00</b>{" "}
          </span>
          <span className="branch-post__text">
            Пт - <b>8:00 до 15:45</b>{" "}
          </span>
        </div>
        <h4 className="branch-post__caption">Филиалы</h4>
        <div className="branches">
          {isLoading ? (
            <div className="isLoading">
              <img className="isLoading__img" src={loading} />
            </div>
          ) : (
            <div className="branches__grid">
              {filials &&
                filials.map((item,index) => (
                  <Link className="post-branches" to={`/filials/${item.documentId}`} key={index}>
                    <div className="post-branches__up">
                      <span className="post-branches__title">{item.name}</span>
                    </div>
                    <div className="post-branches__down">
                      <ul className="post-branches__list">
                        {item.proizvodstvennye_otdeleniyas.map((item,index) => (
                          <li className="post-branches__item" key={index}>
                            <svg className="post-branches__icon" stroke="#e37021" viewBox="0 0 20 20">
                              <path fill="none" xmlns="http://www.w3.org/2000/svg" d="M6.40039 10.0004L9.10039 12.7004L13.6004 6.40039" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
                              <path
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="post-branches__text">{item.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                ))}
            </div>
          )}
        </div>
      </div>
      <YMaps>
        <Map
          state={mapState}
          className="yandex-map"
          modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
        >
          <ZoomControl />
          {filials.map((item, index) => (
            <Placemark
              key={index}
              geometry={{
                type: "Point",
                coordinates: [item.latitude, item.longitude],
              }}
              properties={{
                balloonContent: `<div className="ballon-down">${item.name}<br>
                  <a href="/filials/${item.documentId}" className="yandex-map__button">
                    Подробнее
                  </a>
                </div>`,
                hintContent: item.address,
              }}
              options={{
                preset: "islands#greenDotIconWithCaption",
                iconLayout: "default#image",
                iconImageHref: `${addressServer}/uploads/Point1_0971a3cd12.svg?updated_at=2022-10-26T13:39:22.952Z`,
              }}
            />
          ))}
        </Map>
      </YMaps>
    </motion.div>
  );
}
