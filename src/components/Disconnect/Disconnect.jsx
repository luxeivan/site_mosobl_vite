import React, { useEffect, useRef, useState } from "react";
import { DateTime } from "luxon";
import dayjs from "dayjs";
import axios from "axios";
import { DatePicker, ConfigProvider } from "antd";
import locale from "antd/es/locale/ru_RU";
// import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";

// Временно отключено по задаче 2026-08-11: карта плановых и кнопки "Показать на карте".
// import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";

export default function Disconnect() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [calendarMonth, setCalendarMonth] = useState(dayjs());
  const [listDisconnect, setListDisconnect] = useState();
  // const [currentOpenRow, setCurrentOpenRow] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState("");
  const [plannedDays, setPlannedDays] = useState([]);
  const outagesCacheRef = useRef(new globalThis.Map());
  const plannedDaysCacheRef = useRef(new globalThis.Map());


  const plannedOutagesUrl =
    import.meta.env.VITE_JTN_PLANNED_OUTAGES_URL || "https://jtv.mosoblenergo.ru/services/site/planned-outages";

  useEffect(() => {
    let isCancelled = false;
    const selectedDate = dayjs(currentDate).format("YYYY-MM-DD");
    const cacheKey = `${plannedOutagesUrl}:${selectedDate}`;
    const cachedRows = outagesCacheRef.current.get(cacheKey);

    // setCurrentOpenRow();
    setLoadError("");

    if (cachedRows) {
      setListDisconnect(cachedRows);
      setIsLoading(false);
      return () => {
        isCancelled = true;
      };
    }

    setIsLoading(true);
    setListDisconnect();

    axios
      .get(plannedOutagesUrl, {
        params: { date: selectedDate },
      })
      .then((response) => {
        if (isCancelled) return;
        // Старый источник плановых до перехода на МКиМО/ЖТН:
        // https://nopowersupply.mosoblenergo.ru/back/api/otklyuchenies
        const rows = Array.isArray(response?.data?.data) ? response.data.data : [];
        const newarray = rows.reduce((objectsByKeyValue, obj) => {
          const value = getCityName(obj);
          if (!value) return objectsByKeyValue;
          objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(
            obj
          );
          return objectsByKeyValue;
        }, {});

        outagesCacheRef.current.set(cacheKey, newarray);
        setListDisconnect(newarray);
      })
      .catch((err) => {
        console.log(err);
        if (isCancelled) return;
        setLoadError("Не удалось загрузить плановые отключения");
        setListDisconnect({});
      })
      .finally(() => {
        if (!isCancelled) {
          setIsLoading(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [currentDate, plannedOutagesUrl]);

  useEffect(() => {
    let isCancelled = false;
    const selectedMonth = dayjs(calendarMonth).format("YYYY-MM");
    const cacheKey = `${plannedOutagesUrl}:days:${selectedMonth}`;
    const cachedDays = plannedDaysCacheRef.current.get(cacheKey);

    if (cachedDays) {
      setPlannedDays(cachedDays);
      return () => {
        isCancelled = true;
      };
    }

    axios
      .get(`${plannedOutagesUrl}/days`, {
        params: { month: selectedMonth },
      })
      .then((response) => {
        if (isCancelled) return;
        const days = Array.isArray(response?.data?.data)
          ? response.data.data
          : [];
        plannedDaysCacheRef.current.set(cacheKey, days);
        setPlannedDays(days);
      })
      .catch((err) => {
        console.log(err);
        if (!isCancelled) setPlannedDays([]);
      });

    return () => {
      isCancelled = true;
    };
  }, [calendarMonth, plannedOutagesUrl]);

  const getCityAttributes = (item) =>
    item?.attributes?.uzel_podklyucheniya?.data?.attributes?.gorod?.data
      ?.attributes || {};

  const getStreetRows = (item) =>
    item?.attributes?.uzel_podklyucheniya?.data?.attributes?.uliczas?.data || [];

  const getCityName = (item) => getCityAttributes(item)?.name || "";

  const getCityCoordinates = (item) => {
    const fias = getCityAttributes(item)?.fias?.data || {};
    return [Number(fias.geo_lat) || 55.754475, Number(fias.geo_lon) || 37.621869];
  };

  const formatLocalDateTime = (value) => {
    const date = DateTime.fromISO(value || "");
    if (!date.isValid) return "";
    const local = date.toLocal().c;
    const dd = local.day < 10 ? "0" + local.day : local.day;
    const mm = local.month < 10 ? "0" + local.month : local.month;
    const hh = local.hour < 10 ? "0" + local.hour : local.hour;
    const min = local.minute < 10 ? "0" + local.minute : local.minute;
    return `${dd}.${mm}.${local.year} ${hh}:${min}`;
  };

  const plannedDaysSet = new Set(plannedDays);

  const renderCalendarCell = (date, info) => {
    if (info.type !== "date") return info.originNode;
    const dateKey = date.format("YYYY-MM-DD");
    const hasOutage = plannedDaysSet.has(dateKey);
    const originClassName = info.originNode?.props?.className || "";

    return React.cloneElement(
      info.originNode,
      {
        className: hasOutage
          ? `${originClassName} planned-outages-calendar-cell planned-outages-calendar-cell--active`
          : `${originClassName} planned-outages-calendar-cell`,
      },
      date.date()
    );
  };

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
            const nextDate = value || dayjs();
            setCurrentDate(nextDate);
            setCalendarMonth(nextDate);
          }}
          onPanelChange={(value) => {
            setCalendarMonth(value || currentDate || dayjs());
          }}
          value={currentDate}
          // showLeadingZeros={true}
          // clearIcon={null}
          allowClear={false}
          format={"DD.MM.YYYY"}
          cellRender={renderCalendarCell}
        />
      </ConfigProvider>

      {/*
        Временно отключено по задаче 2026-08-11: большая карта плановых отключений.

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
                const coordinates = getCityCoordinates(item[1][0]);
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
                      coordinates,
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
      */}

      <div className="disconnect__area">
        {isLoading && (
          <div className="disconnect__status">
            Загружаем плановые отключения...
          </div>
        )}
        {!isLoading && loadError && (
          <div className="disconnect__status disconnect__status--error">
            {loadError}
          </div>
        )}
        {!isLoading &&
          listDisconnect &&
          Object.keys(listDisconnect).length !== 0 && (
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
                              const begin = formatLocalDateTime(
                                item.attributes.begin
                              );
                              const end = formatLocalDateTime(
                                item.attributes.end
                              );
                              return (
                                <li
                                  key={index}
                                  className="street__item street-row"
                                >
                                  <div className="street-table__td street-table">
                                    <ul>
                                      {getStreetRows(item).map(
                                        (item, index) => (
                                          <li
                                            className="street-table__item"
                                            type="none"
                                            style={{ listStyle: "none" }}
                                            key={index}
                                          >
                                            <b>{addGO(item.attributes.name)}</b>
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
                                    {begin}
                                  </div>
                                  <div className="street-table__td">
                                    {end}
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
                              const begin = formatLocalDateTime(
                                item.attributes.begin
                              );
                              const end = formatLocalDateTime(
                                item.attributes.end
                              );
                              return (
                                <li
                                  key={index}
                                  className="street__item street-row"
                                >
                                  <div className="street-table__td street-table">
                                    <ul>
                                      {getStreetRows(item).map(
                                        (item, index) => (
                                          <li
                                            className="street-table__item"
                                            type="none"
                                            style={{ listStyle: "none" }}
                                            key={index}
                                          >
                                            <b>{item.attributes.name}</b>
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
                                    {begin}
                                    <br />
                                    <b>Окончание:</b>
                                    <br />
                                    {end}
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>

                        {/*
                        Временно отключено по задаче 2026-08-11: кнопка "Показать на карте"
                        и вложенная карта выбранного города.

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
                                  center: getCityCoordinates(item[1][0]),
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
                                {item[1].map((outage) => {
                                  const fallbackCoordinates =
                                    getCityCoordinates(outage);
                                  return getStreetRows(outage).map(
                                    (street, index) => {
                                      const fias = street?.attributes?.fias || {};
                                      return (
                                        <Placemark
                                          key={index}
                                          geometry={{
                                            type: "Point",
                                            coordinates: [
                                              Number(fias?.data?.geo_lat) ||
                                                fallbackCoordinates[0],
                                              Number(fias?.data?.geo_lon) ||
                                                fallbackCoordinates[1],
                                            ],
                                          }}
                                          properties={{
                                            iconContent: "X",
                                            hintContent:
                                              fias?.value ||
                                              street?.attributes?.name,
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
                      */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </ul>
          )}
        {!isLoading &&
          !loadError &&
          listDisconnect &&
          Object.keys(listDisconnect).length === 0 && (
            <h2>Отключений на эту дату нет</h2>
          )}
      </div>
    </div>
  );
}
