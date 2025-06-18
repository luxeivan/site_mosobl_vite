import React, { useEffect, useState } from "react";
import qs from "qs";
import { DateTime } from "luxon";
import dayjs from "dayjs";
import axios from "axios";
import { DatePicker, ConfigProvider } from "antd";
import locale from "antd/es/locale/ru_RU";
// import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";

import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";

export default function Disconnect() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [listDisconnect, setListDisconnect] = useState();
  const [currentOpenRow, setCurrentOpenRow] = useState();

  const query = qs.stringify(
    {
      populate: {
        uzel_podklyucheniya: { populate: { uliczas: true, gorod: true } },
      },
      filters: {
        $or: [
          {
            $and: [
              {
                begin: {
                  $gte: dayjs(currentDate).startOf("day").valueOf(),
                },
              },
              {
                begin: {
                  $lte: dayjs(currentDate).endOf("day").valueOf(),
                },
              },
            ],
          },
          {
            $and: [
              {
                end: {
                  $gte: dayjs(currentDate).startOf("day").valueOf(),
                },
              },
              {
                end: {
                  $lte: dayjs(currentDate).endOf("day").valueOf(),
                },
              },
            ],
          },
        ],
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  useEffect(() => {
    axios
      .get(
        "https://nopowersupply.mosoblenergo.ru/back/api/otklyuchenies?" +
          query +
          "&pagination[pageSize]=100000"
      )
      .then((response) => {
        const newarray = response.data.data.reduce((objectsByKeyValue, obj) => {
          const value =
            obj.attributes.uzel_podklyucheniya.data.attributes.gorod.data
              .attributes.name;
          objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(
            obj
          );
          return objectsByKeyValue;
        }, {});

        setListDisconnect(newarray);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentDate]);

  const addGO = (name) => {
    if (name.match(/г\s/gm)) {
      return name.match(/г\s/gm).length > 1 ||
        name.match(/деревня\s/gm) ||
        name.match(/рп\s/gm) ||
        name.match(/дп\s/gm) ||
        name.match(/поселок\s/gm) ||
        name.match(/село\s/gm)
        ? "г.о." + name.slice(1)
        : name;
    } else {
      return name;
    }
  };
  // console.log(DateTime.now())
  return (
    <div className="disconnect">
      <span style={{ fontWeight: 700 }}>Дата отключений: </span>
      <ConfigProvider locale={locale}>
        <DatePicker
          onChange={(value, mode) => {
            console.log(value, mode);
            setCurrentDate(value);
          }}
          defaultValue={currentDate}
          // value={currentDate}
          // showLeadingZeros={true}
          // clearIcon={null}
          allowClear={false}
          format={"DD.MM.YYYY"}
        />
      </ConfigProvider>

      <YMaps>
        <Map
          state={{
            center: [55.754475, 37.621869],
            zoom: 8,
            behaviors: ["scrollZoom", "drag"],
          }}
          className="yandex-map"
          modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
          style={{ width: "100%", height: "400px", position: "relative" }}
        >
          <ZoomControl />
          {listDisconnect &&
            Object.keys(listDisconnect).length !== 0 &&
            Object.entries(listDisconnect).map((item, index) => {
              return (
                <Placemark
                  onClick={(event) => {
                    event.preventDefault();
                    const element = document.getElementById(`City-${index}`);
                    element.click();
                    window.scrollTo({
                      top:
                        element.getBoundingClientRect().top +
                        window.pageYOffset -
                        85,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                  key={index}
                  geometry={{
                    type: "Point",
                    coordinates: [
                      item[1][0].attributes.uzel_podklyucheniya.data.attributes
                        .gorod.data.attributes.fias.data.geo_lat,
                      item[1][0].attributes.uzel_podklyucheniya.data.attributes
                        .gorod.data.attributes.fias.data.geo_lon,
                    ],
                  }}
                  properties={{
                    iconContent: `${addGO(item[0])}`,
                    hintContent: `${addGO(item[0])}`,
                  }}
                  options={{
                    preset: "islands#redStretchyIcon",
                  }}
                />
              );
            })}
        </Map>
      </YMaps>

      <div className="disconnect__area">
        {listDisconnect && Object.keys(listDisconnect).length !== 0 && (
          <ul className="disconnect__list">
            {Object.entries(listDisconnect).map((item, index) => {
              return (
                <div key={index} className="accordion-row">
                  <div
                    id={`City-${index}`}
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
                    <span className="accordion-row__text city">
                      {addGO(item[0])}
                    </span>
                  </div>
                  <div className="accordion-row__drop-down">
                    <div className="accordion-row__wrapper1">
                      <div className="text-area1 disconnect__for-desktop">
                        <ul className="street__list">
                          <li className="street__item street-row">
                            <div className="street-table__th">Улицы</div>
                            <div className="street-table__th">Комментарий</div>
                            <div className="street-table__th">Начало</div>
                            <div className="street-table__th">Окончание</div>
                          </li>
                          {item[1].map((item, index) => {
                            const begin = DateTime.fromISO(
                              item.attributes.begin
                            ).toLocal().c;
                            const end = DateTime.fromISO(
                              item.attributes.end
                            ).toLocal().c;
                            return (
                              <li
                                key={index}
                                className="street__item street-row"
                              >
                                <div className="street-table__td street-table">
                                  <ul>
                                    {item.attributes.uzel_podklyucheniya.data.attributes.uliczas.data.map(
                                      (item, index) => (
                                        <li
                                          className="street-table__item"
                                          type="none"
                                          style={{ listStyle: "none" }}
                                          key={index}
                                        >
                                          <b>{addGO(item.attributes.name)}</b> -{" "}
                                          {item.attributes.comment}
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                                <div
                                  className="street-table__td"
                                  style={{ wordBreak: "break-word" }}
                                >
                                  {item.attributes.comment}
                                </div>
                                <div className="street-table__td">
                                  {begin.day < 10 ? "0" + begin.day : begin.day}
                                  .
                                  {begin.month < 10
                                    ? "0" + begin.month
                                    : begin.month}
                                  .{begin.year}{" "}
                                  {begin.hour < 10
                                    ? "0" + begin.hour
                                    : begin.hour}
                                  :
                                  {begin.minute < 10
                                    ? "0" + begin.minute
                                    : begin.minute}
                                </div>
                                <div className="street-table__td">
                                  {end.day < 10 ? "0" + end.day : end.day}.
                                  {end.month < 10 ? "0" + end.month : end.month}
                                  .{end.year}{" "}
                                  {end.hour < 10 ? "0" + end.hour : end.hour}:
                                  {end.minute < 10
                                    ? "0" + end.minute
                                    : end.minute}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      <div className="text-area1 disconnect__for-mobile">
                        <ul className="street__list">
                          <li className="street__item street-row">
                            <div className="street-table__th">Улицы</div>
                            <div className="street-table__th">Комментарий</div>
                            <div className="street-table__th">Время</div>
                          </li>
                          {item[1].map((item, index) => {
                            const begin = DateTime.fromISO(
                              item.attributes.begin
                            ).toLocal().c;
                            const end = DateTime.fromISO(
                              item.attributes.end
                            ).toLocal().c;
                            return (
                              <li
                                key={index}
                                className="street__item street-row"
                              >
                                <div className="street-table__td street-table">
                                  <ul>
                                    {item.attributes.uzel_podklyucheniya.data.attributes.uliczas.data.map(
                                      (item, index) => (
                                        <li
                                          className="street-table__item"
                                          type="none"
                                          style={{ listStyle: "none" }}
                                          key={index}
                                        >
                                          <b>{item.attributes.name}</b> -{" "}
                                          {item.attributes.comment}
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                                <div className="street-table__td">
                                  {item.attributes.comment}
                                </div>
                                <div className="street-table__td">
                                  <b>Начало:</b>
                                  <br />
                                  {begin.day < 10 ? "0" + begin.day : begin.day}
                                  .
                                  {begin.month < 10
                                    ? "0" + begin.month
                                    : begin.month}
                                  .{begin.year}{" "}
                                  {begin.hour < 10
                                    ? "0" + begin.hour
                                    : begin.hour}
                                  :
                                  {begin.minute < 10
                                    ? "0" + begin.minute
                                    : begin.minute}
                                  <br />
                                  <b>Окончание:</b>
                                  <br />
                                  {end.day < 10 ? "0" + end.day : end.day}.
                                  {end.month < 10 ? "0" + end.month : end.month}
                                  .{end.year}{" "}
                                  {end.hour < 10 ? "0" + end.hour : end.hour}:
                                  {end.minute < 10
                                    ? "0" + end.minute
                                    : end.minute}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      <div className="open-map">
                        <button
                          type="button"
                          className="open-map__button"
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
                                  item[1][0].attributes.uzel_podklyucheniya.data
                                    .attributes.gorod.data.attributes.fias.data
                                    .geo_lat,
                                  item[1][0].attributes.uzel_podklyucheniya.data
                                    .attributes.gorod.data.attributes.fias.data
                                    .geo_lon,
                                ],
                                zoom: 10,
                                behaviors: ["disable('scrollZoom')", "drag"],
                              }}
                              className="yandex-map"
                              modules={[
                                "geoObject.addon.balloon",
                                "geoObject.addon.hint",
                              ]}
                            >
                              <ZoomControl />
                              {item[1].map((item, index) => {
                                return item.attributes.uzel_podklyucheniya.data.attributes.uliczas.data.map(
                                  (item, index) => {
                                    return (
                                      <Placemark
                                        key={index}
                                        geometry={{
                                          type: "Point",
                                          coordinates: [
                                            item.attributes.fias.data.geo_lat,
                                            item.attributes.fias.data.geo_lon,
                                          ],
                                        }}
                                        properties={{
                                          iconContent: "X",
                                          hintContent:
                                            item.attributes.fias.value,
                                        }}
                                        options={{
                                          preset: "islands#redDotIcon",
                                        }}
                                      />
                                    );
                                  }
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
          </ul>
        )}
        {listDisconnect && Object.keys(listDisconnect).length === 0 && (
          <h2>Отключений на эту дату нет</h2>
        )}
      </div>
    </div>
  );
}
