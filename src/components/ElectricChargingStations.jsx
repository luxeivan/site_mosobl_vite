import axios from "axios";
import React, { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";
import { chargingAddressServer } from "../config";
import chargingIco from "../img/Chargingico.png";
import chargingIco22 from "../img/Chargingico22.png";
import chargingIco150 from "../img/Chargingico150.png";
import chargingIco_dis from "../img/Chargingico_dis.png";
import qrPlaymarket from "../img/qr_plugme_playmarket.svg";
import qrAppstore from "../img/qr_plugme_appstore.svg";
import Playmarket from "../img/playmarket.png";
import Appstore from "../img/appstore.png";
import plugme from "../img/plugme.webp";
import Cookies from "js-cookie";

import { utils, writeFileXLSX } from "xlsx";

const iconImageSize = [130 / 4, 221 / 4];
let tempArray = [];

export default React.memo(function ElectricChargingStations() {
  const [loadingAllStation, setLoadingAllStation] = useState(false);
  // const [listStation, setListStation] = useState([]);
  const [listAllStation, setAllListStation] = useState([]);
  const [listAllStationWithStatus, setAllListStationWithStatus] = useState([]);
  const [allStationForListCity, setAllStationForListCity] = useState([]);
  const [currentOpenRow, setCurrentOpenRow] = useState();
  const [copy, setCopy] = useState([]);
  const [filter, setFilter] = useState({
    power3_5: true,
    power22: true,
    power150: true,
    unavailable: true,
  });
  // function getStation(page = 1) {
  //   axios
  //     .get(
  //       `${chargingAddressServer}/api/gorodskoj-okrugs?populate=*&pagination[page]=${page}&pagination[pageSize]=100`
  //     )
  //     .then((res) => {
  //       setListStation((prev) => prev.concat(res.data.data));
  //       setCopy((prev) => prev.concat(res.data.data));
  //       //console.log(res.data)
  //       if (
  //         res.data.meta.pagination.pageCount !== res.data.meta.pagination.page
  //       ) {
  //         getStation(res.data.meta.pagination.page + 1);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  async function getAllStation(page = 1) {
    await axios
      .get(
        `${chargingAddressServer}/api/ezses?populate=*&pagination[page]=${page}&pagination[pageSize]=100`
      )
      .then(async (res) => {
        //await setAllListStation((prev) => prev.concat(res.data.data));
        //console.log('0: ',res.data.data);
        tempArray = tempArray.concat(res.data.data);
        //console.log('1: ',tempArray);
        if (
          res.data.meta.pagination.pageCount !== res.data.meta.pagination.page
        ) {
          await getAllStation(res.data.meta.pagination.page + 1);
        } else {
          // console.log('2: ',tempArray);
          setAllListStation(tempArray);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //--------PLUGME API START--------------
  // const getPlugmeToken = async () => {
  //   const res = await axios.post(
  //     "https://plugme.ru/oauth2/token",
  //     {
  //       client_id: process.env.REACT_APP_PLUGME_CLIENT_ID,
  //       client_secret: process.env.REACT_APP_PLUGME_CLIENT_SECRET,
  //       grant_type: "client_credentials",
  //       scope: "plugme",
  //     },
  //     {
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //     }
  //   );
  //   //console.log(res.data.access_token)
  //   Cookies.set("plugmetoken", res.data.access_token, { expires: 1 });
  //   getChargePoint();
  // };

  const getPlugmeToken = async () => {
    try {
      const res = await axios.post(
        "https://plugme.ru/oauth2/token",
        {
          client_id: process.env.REACT_APP_PLUGME_CLIENT_ID,
          client_secret: process.env.REACT_APP_PLUGME_CLIENT_SECRET,
          grant_type: "client_credentials",
          scope: "plugme",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      Cookies.set("plugmetoken", res.data.access_token, { expires: 1 });
      getChargePoint();
    } catch (error) {
      setAllListStationWithStatus(listAllStation.map((station) => {
        return { ...station, statecode: "available" }
      }))
      console.error("Ошибка при получении токена PlugMe: ", error);
    }
  };

  const getChargePoint = async () => {
    //console.log(Cookies.get('plugmetoken'))
    try {
      const res = await axios.post(
        "https://plugme.ru/api/v1/charge_point/list",
        {},
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("plugmetoken")}`,
          },
        }
      );
      //console.log(res.data)
      const statusArray = listAllStation.map((station) => {
        if (station.attributes.idStation) {
          const result = res.data.find(
            (plugmeStation) =>
              station.attributes.idStation === plugmeStation.label
          );
          //console.log(station.attributes.idStation)
          if (result) {
            if (!result.connected) {
              return { ...station, statecode: "not available" };
            }
            return {
              ...station,
              statecode: result.statecode,
              statelabel: result.statelabel,
            };
          } else {
            return { ...station, statecode: "available" };
          }
        } else {
          return { ...station, statecode: "available" };
        }
      });
      setAllListStationWithStatus(statusArray);
      //console.log(statusArray)
    } catch (error) {
      console.error(error);
    }
  };
  //--------PLUGME API END--------------
  useEffect(() => {
    getAllStation();
    //getStation();
  }, []);
  useEffect(() => {
    if (listAllStation.length > 0) {
      if (Cookies.get("plugmetoken")) {
        getChargePoint();
      } else {
        getPlugmeToken();
      }
    }
    //console.log(listAllStation)
  }, [listAllStation]);
  useEffect(() => {
    // const temp = Object.groupBy(listAllStationWithStatus,({attributes})=>attributes.gorodskoj_okrug.data.attributes.city)
    let temp = listAllStationWithStatus.reduce((acc, obj) => {
      let property = "Без названия";
      if (obj.attributes.gorodskoj_okrug.data) {
        property = obj.attributes.gorodskoj_okrug.data.attributes.city;
      }
      acc[property] = acc[property] || [];
      acc[property].push(obj);
      return acc;
    }, {});
    const newarr = [];
    for (const key in temp) {
      if (temp.hasOwnProperty(key)) {
        newarr.push({ city: key, ezs: temp[key] });
      }
    }
    setAllStationForListCity(newarr);
    setCopy(newarr);
  }, [listAllStationWithStatus]);

  const handlerSearch = useCallback(
    (event) => {
      let copyObj = JSON.parse(JSON.stringify(copy));
      if (copyObj) {
        copyObj = copyObj.filter((element, index) =>
          element.city.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setAllStationForListCity(copyObj);
      }
    },
    [copy]
  );

  const handlerClear = useCallback((event) => {
    const searchInput = document.querySelector(
      ".informationDisclosures_search"
    );
    if (searchInput) {
      searchInput.value = "";
      searchInput.click();
    }
  }, []);

  // const handlerSearch = (event) => {
  //   let copyObj = JSON.parse(JSON.stringify(copy));
  //   if (copyObj) {
  //     copyObj = copyObj.filter((element, index) =>
  //       element.city.toLowerCase().includes(event.target.value.toLowerCase())
  //     );
  //     setAllStationForListCity(copyObj);
  //   }
  // };

  // const handlerClear = (event) => {
  //   document.querySelector(".informationDisclosures_search").value = "";
  //   document.querySelector(".informationDisclosures_search").click();
  // };

  const getXlsxFile = () => {
    setLoadingAllStation(true);
    const arrayStation = listAllStation.map((item) => {
      return {
        Адрес: item.attributes.address,
        "Режим зарядки": item.attributes.charging_mode,
        "Тип разьема": item.attributes.connector_type,
        Статус: item.attributes.disabled ? "Временно отключена" : "Работает",
        Широта: item.attributes.latitude,
        Долгота: item.attributes.longitude,
        "Метод установки": item.attributes.method_of_installation,
        "Мобильное приложение": item.attributes.mobile_applications,
        "Кол-во разьемов": item.attributes.number_of_connectors,
        "Режим работы": item.attributes.operating_mode,
        Мощность: item.attributes.power,
        "Тех. поддержка": item.attributes.support_phone_number,
      };
    });
    const wb = utils.book_new();
    const ws = utils.json_to_sheet(arrayStation);
    ws["!cols"] = [{ wch: 50 }];
    utils.book_append_sheet(wb, ws, "Таблица1");
    writeFileXLSX(wb, "ЭЗС Мособлэнерго.xlsx");
    setLoadingAllStation(false);
  };

  const changePower3_5 = (event) => {
    setFilter({ ...filter, power3_5: !filter.power3_5 });
  };
  const changePower22 = (event) => {
    setFilter({ ...filter, power22: !filter.power22 });
  };
  const changePower150 = (event) => {
    setFilter({ ...filter, power150: !filter.power150 });
  };
  const changeUnavailable = (event) => {
    setFilter({ ...filter, unavailable: !filter.unavailable });
  };

  return (
    <>
      {/* <h2>Карта электрических зарядных станций</h2> */}

      <div className="qr-plugme-comp">
        <div className="qr-plugme-comp__text-area">
          <div className="qr-plugme-comp__title-area">
            <img src={plugme} alt="текст" />
            <h3 style={{ textTransform: "inherit" }}>
              PlugMe - зарядные станции
            </h3>
          </div>
          <p>Мобильное приложение для управления ЭЗС АО «Мособлэнерго»</p>

          <p>
            Круглосуточная техническая поддержка:{" "}
            <a href="tel:+78002509779" className="qr-plugme-comp__tel">
              +7 (800) 250-97-79
            </a>
          </p>
        </div>
        <div className="qr-plugme-comp__qr-area">
          <div className="qr-plugme-comp__qr">
            <a
              type="button"
              className="qr-plugme-comp__link"
              href="https://play.google.com/store/apps/details?id=com.plugme"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={Playmarket} alt="Playmarket" />
            </a>
            <img src={qrPlaymarket} alt="qr" className="qr-plugme-comp__img" />
          </div>
          <div className="qr-plugme-comp__qr">
            <a
              type="button"
              className="qr-plugme-comp__link"
              href="https://apps.apple.com/ru/app/plugme-%D0%B7%D0%B0%D1%80%D1%8F%D0%B4%D0%BD%D1%8B%D0%B5-%D1%81%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D0%B8/id1541521419"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={Appstore} alt="Appstore" />
            </a>
            <img src={qrAppstore} alt="qr" className="qr-plugme-comp__img" />
          </div>
        </div>
      </div>

      {listAllStationWithStatus.length > 0 ? (
        <>
          <h3 style={{ marginBottom: "5px" }}>Отображать на карте:</h3>
          <div
            style={{ display: "flex", marginBottom: "-15px", flexWrap: "wrap" }}
          >
            <div
              className="form-check"
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "20px",
              }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                onChange={changePower3_5}
                checked={filter.power3_5}
                id="power3_5"
                style={{ width: "20px", height: "20px", marginRight: "10px" }}
              />
              <label
                className="form-check-label"
                htmlFor="power3_5"
                style={{ display: "flex", alignItems: "center" }}
              >
                <h4 style={{ marginBottom: "0" }}>- 3,5 кВт: </h4>
                <img style={{ width: `25px` }} src={chargingIco} alt="текст" />
              </label>
            </div>
            <div
              className="form-check"
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "20px",
              }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                onChange={changePower22}
                checked={filter.power22}
                id="power22"
                style={{ width: "20px", height: "20px", marginRight: "10px" }}
              />
              <label
                className="form-check-label"
                htmlFor="power22"
                style={{ display: "flex", alignItems: "center" }}
              >
                <h4 style={{ marginBottom: "0" }}>- 22 кВт: </h4>
                <img
                  style={{ width: `25px` }}
                  src={chargingIco22}
                  alt="текст"
                />
              </label>
            </div>
            <div
              className="form-check"
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "20px",
              }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                onChange={changePower150}
                checked={filter.power150}
                id="power150"
                style={{ width: "20px", height: "20px", marginRight: "10px" }}
              />
              <label
                className="form-check-label"
                htmlFor="power150"
                style={{ display: "flex", alignItems: "center" }}
              >
                <h4 style={{ marginBottom: "0" }}>- 150 кВт: </h4>
                <img
                  style={{ width: `25px` }}
                  src={chargingIco150}
                  alt="текст"
                />
              </label>
            </div>
            <div
              className="form-check"
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "20px",
              }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                onChange={changeUnavailable}
                checked={filter.unavailable}
                id="unavailable"
                style={{ width: "20px", height: "20px", marginRight: "10px" }}
              />
              <label
                className="form-check-label"
                htmlFor="unavailable"
                style={{ display: "flex", alignItems: "center" }}
              >
                <h4 style={{ marginBottom: "0" }}>- временно недоступна: </h4>
                <img
                  style={{ width: `25px` }}
                  src={chargingIco_dis}
                  alt="текст"
                />
              </label>
            </div>
          </div>
          <YMaps>
            <Map
              state={{
                center: [55.754475, 37.621869],
                zoom: 8,
                behaviors: ["scrollZoom", "drag"],
              }}
              className="yandex-map"
              modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
            >
              <ZoomControl />
              {listAllStationWithStatus
                .filter((item) => {
                  if (item.statecode != "available" && !filter.unavailable)
                    return false;
                  if (item.attributes.disabled && !filter.unavailable)
                    return false;
                  if (item.attributes.power == 22 && filter.power22)
                    return true;
                  if (item.attributes.power == 3.5 && filter.power3_5)
                    return true;
                  if (item.attributes.power == 150 && filter.power150)
                    return true;
                  return false;
                })
                .map((item, index) => {
                  return (
                    <Placemark
                      // onClick={(event) => {
                      //     event.preventDefault()
                      //     console.log(item.attributes.address)
                      // }}
                      key={index}
                      geometry={{
                        type: "Point",
                        coordinates: [
                          item.attributes.latitude,
                          item.attributes.longitude,
                        ],
                      }}
                      properties={{
                        balloonContent: `<div className="ballon-down">
                                                            <b>Адрес:</b> ${item.attributes
                            .address
                          }<br>
                                                            <b>Мощность:</b> ${item.attributes
                            .power
                          } кВт/ч<br>
                                                            <b>Тип разьема:</b> ${item.attributes
                            .connector_type
                          }<br>
                                                            <b>Режим зарядки:</b> ${item.attributes
                            .charging_mode
                          }<br>
                                                            <b>Способ монтажа:</b> ${item.attributes
                            .method_of_installation
                          }<br>
                                                            <b>Мобильное приложение:</b> ${item.attributes
                            .mobile_applications
                          }<br>
                                                            <b>Тех. поддержка:</b> ${item.attributes
                            .support_phone_number
                          }<br>
                                                            <b>Режим работы:</b> ${item.attributes
                            .operating_mode
                          }<br>
                                                            ${item.attributes
                            .disabled ||
                            item.statecode !=
                            "available"
                            ? "<h4 style='color: red; margin-bottom: 0'>ВРЕМЕННО НЕДОСТУПНА</h4>"
                            : ""
                          }
                                                            </div>`,
                        //iconContent: "X",
                        //hintContent: "Ну давай уже тащи",
                        //balloonContent: 'А эта — новогодняя',
                        iconContent: "12",
                        hintContent: `${item.attributes.address}`,
                      }}
                      options={{
                        iconLayout: "default#image",
                        // Своё изображение иконки метки.
                        iconImageHref: (() => {
                          if (item.attributes.disabled || item.statecode != "available") {
                            return chargingIco_dis
                          }else if(item.attributes.power == 22){
                            return chargingIco22
                          }else if(item.attributes.power == 150){
                            return chargingIco150
                          }else {
                            return chargingIco
                          }
                        })(),
                        // item.attributes.power == 22
                        //   ? item.attributes.disabled ||
                        //     item.statecode != "available"
                        //     ? chargingIco_dis
                        //     : chargingIco22
                        //   : item.attributes.disabled ||
                        //     item.statecode != "available"
                        //     ? chargingIco_dis
                        //     : chargingIco,
                        // Размеры метки.
                        iconImageSize,
                        // Смещение левого верхнего угла иконки относительно
                        // её "ножки" (точки привязки).
                        //iconImageOffset: [-5, -38],
                        //preset: "islands#orangeAutoIcon",
                        // preset: "islands#icon",
                        // preset: "islands#greenDotIconWithCaption",
                        // iconLayout: "default#image",
                        // iconColor: "red",
                        //iconImageHref: noPlug,
                      }}
                    />
                  );
                })}
            </Map>
          </YMaps>
        </>
      ) : (
        <>
          <div className="loader-area">
            <span class="loader"></span>
          </div>
        </>
      )}
      {copy.length > 0 && (
        <>
          <input
            type="text"
            className="informationDisclosures_search"
            placeholder="Поиск по городу"
            onChange={handlerSearch}
            onClick={handlerSearch}
          />
          <button className="button__clear" onClick={handlerClear}>
            Очистить
          </button>
        </>
      )}
      {/*--------------------------------------------------------------------------------------------------------------*/}
      {allStationForListCity.map((item, index) => {
        if (item.ezs.length === 0) return null;

        return (
          <div className="accordion-row" key={index}>
            <div
              className="accordion-row__up"
              onClick={(event) => {
                document.querySelectorAll(".accordion-row");
                event.currentTarget
                  .closest(".accordion-row")
                  .classList.toggle("open-accordion");
                event.currentTarget.classList.toggle("active");
                const drop = event.currentTarget
                  .closest(".accordion-row")
                  .querySelector(".accordion-row__drop-down");
                if (drop.style.maxHeight == "") {
                  drop.style.maxHeight = `${drop.scrollHeight + 1200}px`;
                } else {
                  drop.style.maxHeight = "";
                }
              }}
            >
              <span className="accordion-row__text">{item.city}</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес</th>
                        <th>GPS-координаты</th>
                        <th>Мощность (кВт*ч)</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                        <th>Способ монтажа</th>
                        <th>Количество коннекторов</th>
                        <th>Статус</th>
                        {/* <th>Мобильное приложения для управления ЭЗС</th>
                                            <th>Телефон технической поддержки</th>
                                            <th>Режим работы технической поддержки «PlugMe»</th> */}
                      </tr>
                      {item.ezs.map((item, index) => (
                        <tr key={index}>
                          <td>{item.attributes.address}</td>
                          <td>
                            {item.attributes.latitude}{" "}
                            {item.attributes.longitude}
                          </td>
                          <td
                            style={(() => {
                              if (item.attributes.power == 22) {
                                return {
                                  backgroundColor: "rgba(0,0,255,1)",
                                  color: "#fff",
                                  textAlign: "center",
                                }
                              } else if (item.attributes.power == 150) {
                                return {
                                  backgroundColor: "rgba(218,132,64,1)",
                                  color: "#000",
                                  textAlign: "center",
                                }
                              } else {
                                return {
                                  backgroundColor: "rgba(0,255,0,1)",
                                  color: "#000",
                                  textAlign: "center",
                                }
                              }
                            })()
                              // item.attributes.power == 22
                              //   ? {
                              //       backgroundColor: "rgba(0,0,255,1)",
                              //       color: "#fff",
                              //       textAlign: "center",
                              //     }
                              //   : {
                              //       backgroundColor: "rgba(0,255,0,1)",
                              //       color: "#000",
                              //       textAlign: "center",
                              //     }
                            }
                          >
                            {item.attributes.power}
                          </td>
                          <td>{item.attributes.connector_type}</td>
                          <td>{item.attributes.charging_mode}</td>
                          <td>{item.attributes.method_of_installation}</td>
                          <td>{item.attributes.number_of_connectors}</td>
                          <td
                            style={
                              item.attributes.disabled ||
                                item.statecode != "available"
                                ? {
                                  backgroundColor: "rgba(255,0,0,1)",
                                  color: "#fff",
                                  textAlign: "center",
                                }
                                : { textAlign: "center" }
                            }
                          >
                            {item.attributes.disabled ||
                              item.statecode != "available"
                              ? "Временно недоступна"
                              : "Доступна"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="open-map">
                  <button
                    type="button"
                    className="open-map__button charging-open-map__button"
                    onClick={(event) => {
                      if (currentOpenRow === index) {
                        setCurrentOpenRow();
                      } else {
                        setCurrentOpenRow(index);
                      }
                    }}
                  >
                    {currentOpenRow === index
                      ? "Скрыть карту"
                      : "Показать на карте"}
                  </button>
                </div>
                {currentOpenRow === index && (
                  <>
                    <YMaps>
                      <Map
                        state={{
                          center: [
                            item.ezs[0].attributes.latitude,
                            item.ezs[0].attributes.longitude,
                          ],
                          zoom: 11,
                          behaviors: ["disable('scrollZoom')", "drag"],
                        }}
                        className="yandex-map"
                        modules={[
                          "geoObject.addon.balloon",
                          "geoObject.addon.hint",
                        ]}
                      >
                        <ZoomControl />
                        {item.ezs.map((item, index) => {
                          return (
                            <Placemark
                              key={index}
                              geometry={{
                                type: "Point",
                                coordinates: [
                                  item.attributes.latitude,
                                  item.attributes.longitude,
                                ],
                              }}
                              properties={{
                                balloonContent: `<div className="ballon-down">
                                                            <b>Адрес:</b> ${item.attributes
                                    .address
                                  }<br>
                                                            <b>Мощность:</b> ${item.attributes
                                    .power
                                  } кВт/ч<br>
                                                            <b>Тип разьема:</b> ${item.attributes
                                    .connector_type
                                  }<br>
                                                            <b>Режим зарядки:</b> ${item.attributes
                                    .charging_mode
                                  }<br>
                                                            <b>Мобильное приложение:</b> ${item.attributes
                                    .mobile_applications
                                  }<br>
                                                            <b>Тех. поддержка:</b> ${item.attributes
                                    .support_phone_number
                                  }<br>
                                                            <b>Режим работы:</b> ${item.attributes
                                    .operating_mode
                                  }<br>
                                                            ${item.attributes
                                    .disabled ||
                                    item.statecode !=
                                    "available"
                                    ? "<h4 style='color: red; margin-bottom: 0'>ВРЕМЕННО НЕДОСТУПНА</h4>"
                                    : ""
                                  }
                                                            </div>`,
                                //iconContent: "X",
                                //hintContent: "Ну давай уже тащи",
                                //balloonContent: 'А эта — новогодняя',
                                iconContent: "12",
                                hintContent: `${item.attributes.address}`,
                              }}
                              options={{
                                iconLayout: "default#image",
                                // Своё изображение иконки метки.
                                 iconImageHref: (() => {
                          if (item.attributes.disabled || item.statecode != "available") {
                            return chargingIco_dis
                          }else if(item.attributes.power == 22){
                            return chargingIco22
                          }else if(item.attributes.power == 150){
                            return chargingIco150
                          }else {
                            return chargingIco
                          }
                        })(),
                                // Размеры метки.
                                iconImageSize,
                                // Смещение левого верхнего угла иконки относительно
                                // её "ножки" (точки привязки).
                                //iconImageOffset: [-5, -38],
                                //preset: "islands#orangeAutoIcon",
                                // preset: "islands#icon",
                                // preset: "islands#greenDotIconWithCaption",
                                // iconLayout: "default#image",
                                // iconColor: "red",
                                //iconImageHref: noPlug,
                              }}
                            />
                          );
                        })}
                      </Map>
                    </YMaps>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
      <button
        className="planned-notification__link"
        onClick={getXlsxFile}
        disabled={loadingAllStation}
        style={{ display: "block", width: "300px", margin: "30px auto" }}
      >
        {!loadingAllStation ? "Скачать полный список ЭЗС" : "Загрузка..."}
      </button>
    </>
  );
});
