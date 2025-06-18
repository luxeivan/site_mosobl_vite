import React, { useEffect, useState } from "react";
import { DelayInput } from "react-delay-input";
import { chargingAddressServer } from "../../config";
// import xlsxPic from "../../img/xlsx.svg";
import { utils, writeFileXLSX } from "xlsx";
import { motion } from "framer-motion";
import TopImage from "../../components/TopImage";
import img2fde80ac63c76cbc7aa002fb91d2bd94 from "../../img/2fde80ac63c76cbc7aa002fb91d2bd94.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Territory() {
  const [loadingAllTerritory, setLoadingAllTerritory] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputCity, setInputCity] = useState();
  const [inputStreet, setInputStreet] = useState();
  // const [listFilials, setListFilials] = useState([])
  const [listCity, setListCity] = useState([]);
  const [listStreet, setListStreet] = useState([]);
  const [selectCity, setSelectCity] = useState();
  const [selectStreet, setSelectStreet] = useState();

  useEffect(() => {
    if (inputCity && inputCity.length > 2) {
      setLoading(true);
      axios
        .get(chargingAddressServer + `/api/allFilials?locality=${inputCity}`)
        .then((response) => {
          // console.log(response.data)
          setListCity(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log("An error occurred:", error);
        });
    }
    if (inputCity < 3) {
      setListCity([]);
    }
  }, [inputCity]);

  useEffect(() => {
    if (inputStreet !== "") {
      setListStreet(
        listCity.filter((item) => {
          // console.log(inputStreet)
          if (item.street) {
            return item.street?.toLowerCase().includes(inputStreet?.toLowerCase())
          }
          return false
        }
        )
      );
    } else {
      setListStreet(listCity);
    }
  }, [inputStreet]);

  const getFilialLink = (filial) => {
    if (filial == "Домодедовский") {
      return (
        <Link className="description_link-to-filial" to="/filials/1">
          {filial}
        </Link>
      );
    }
    if (filial == "Красногорский") {
      return (
        <Link className="description_link-to-filial" to="/filials/2">
          {filial}
        </Link>
      );
    }
    if (filial == "Раменский") {
      return (
        <Link className="description_link-to-filial" to="/filials/3">
          {filial}
        </Link>
      );
    }
    if (filial == "Коломенский") {
      return (
        <Link className="description_link-to-filial" to="/filials/4">
          {filial}
        </Link>
      );
    }
    if (filial == "Одинцовский") {
      return (
        <Link className="description_link-to-filial" to="/filials/5">
          {filial}
        </Link>
      );
    }
    if (filial == "Павлово-Посадский") {
      return (
        <Link className="description_link-to-filial" to="/filials/6">
          {filial}
        </Link>
      );
    }
    if (filial == "Сергиево-Посадский") {
      return (
        <Link className="description_link-to-filial" to="/filials/7">
          {filial}
        </Link>
      );
    }
    if (filial == "Щёлковский") {
      return (
        <Link className="description_link-to-filial" to="/filials/8">
          {filial}
        </Link>
      );
    }
    if (filial == "Мытищинский") {
      return (
        <Link className="description_link-to-filial" to="/filials/9">
          {filial}
        </Link>
      );
    }
    if (filial == "Краснознаменский") {
      return (
        <Link className="description_link-to-filial" to="/filials/10">
          {filial}
        </Link>
      );
    }
    return filial;
  };
  const getXlsxFile = () => {
    setLoadingAllTerritory(true);
    axios
      .get("https://nopowersupply.mosoblenergo.ru/station/api/allFilials")
      .then((data) => {
        //console.log(res.data)
        if (data.data) {
          const wb = utils.book_new();
          const ws = utils.json_to_sheet(data.data);
          ws["!cols"] = [
            { wch: 5 },
            { wch: 20 },
            { wch: 20 },
            { wch: 20 },
            { wch: 20 },
            { wch: 20 },
            { wch: 20 },
            { wch: 20 },
            { wch: 20 },
          ];
          utils.book_append_sheet(wb, ws, "Таблица1");
          writeFileXLSX(wb, "Территория обслуживания Мособлэнерго.xlsx");
          setLoadingAllTerritory(false);
        }
      });
  };
  // useEffect(() => {
  //   // console.log(selectCity)
  // }, [selectCity])
  // useEffect(() => {
  //   console.log(selectCity)
  // }, [selectCity])
  // useEffect(() => {
  //   console.log(loading)
  // }, [loading])
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage
        image={img2fde80ac63c76cbc7aa002fb91d2bd94}
        title={"Территория обслуживания сетевой организации"}
      />
      <div className="page-grid__content" id="content">
        <div className="row-docs-age border-bottom">
          <p className="row-docs-age__caption line-bottom">
            Список адресов, обслуживаемых АО «Мособлэнерго»:
          </p>
          {/* <p>Если в списках</p> */}
          <div className="search-territory">
            <div className="search-territory__item ">
              <div className="search-city">
                <p>Введите населенный пункт:</p>
                <DelayInput
                  className="search-city__city-input"
                  delayTimeout={1000}
                  value={inputCity}
                  onClick={(event) => {
                    setInputCity("");
                    setInputStreet("");
                    setSelectCity();
                    setSelectStreet();
                    setListCity([]);
                  }}
                  onChange={(event) => {
                    setInputCity(event.target.value);
                    setSelectCity();
                    setSelectStreet();
                  }}
                />
                {loading && !selectCity && (
                  <div className="search-city__city-list">Загрузка...</div>
                )}
                {!loading && !selectCity && listCity.length > 0 && (
                  <div className="search-city__city-list">
                    <ul>
                      {listCity
                        .filter(
                          (value, index, self) =>
                            self.findIndex(
                              (Emp) => Emp.locality === value.locality && Emp.cityDistrict === value.cityDistrict
                            ) === index
                        )
                        .map((item, index) => {
                          // console.log(item)
                          return (
                            <li
                              key={index}
                              data-locality={item.locality}
                              data-citydistrict={item.cityDistrict}
                              className="search-city__city-item"
                              onClick={(event) => {
                                setInputCity(
                                  event.currentTarget.dataset.locality
                                );
                                setSelectCity({
                                  locality: event.currentTarget.dataset.locality,
                                  cityDistrict: event.currentTarget.dataset.citydistrict
                                }
                                );
                                setListStreet(listCity);
                              }}
                            >
                              {item.locality}{" "}
                              <span className="search-city__city-district">
                                ({item.cityDistrict})
                              </span>
                            </li>
                          )
                        }
                        )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="search-territory__item">
              {selectCity && listCity.length > 0 && (
                <>
                  <div className="search-street">
                    <p>Выберите улицу:</p>
                    <DelayInput
                      className="search-city__city-input"
                      delayTimeout={100}
                      value={inputStreet}
                      onClick={(event) => {
                        setInputStreet("");
                        setSelectStreet();
                      }}
                      onChange={(event) => {
                        setInputStreet(event.target.value);
                        setSelectStreet();
                      }}
                    />
                    {loading && !selectStreet && (
                      <div className="search-city__city-list">Загрузка...</div>
                    )}
                    {!loading && !selectStreet && listCity.length > 0 && (
                      <div className="search-city__city-list">
                        <ul>
                          {listStreet &&
                            listStreet
                              .filter((item) => item.locality == selectCity.locality && item.cityDistrict == selectCity.cityDistrict)
                              .map((item, index) => {
                                // console.log(item)
                                return (
                                  <li
                                    key={index}
                                    data-street={item.street}
                                    data-citydistrict={item.cityDistrict}
                                    className="search-city__city-item"
                                    onClick={(event) => {
                                      setInputStreet(
                                        event.target.dataset.street
                                      );
                                      setSelectStreet({
                                        street: item.street,
                                        cityDistrict: item.cityDistrict,
                                        id: item.id
                                      }
                                      );
                                    }}
                                  >
                                    {item.street}
                                  </li>
                                );
                              })}
                        </ul>
                      </div>
                    )}
                    {/* <select
                    name="street"
                    id="street"
                    className="search-city__sity-list"
                    onChange={(event) => {
                      if (event.target.value) {
                        setSelectStreet(event.target.value)
                      } else {
                        setSelectStreet()
                      }
                    }}
                    >
                    <option value="" >
                    ----
                    </option>
                    {listCity &&
                      listCity.filter(item => item.locality == selectCity).map((item, index) => {
                        return (
                          <option key={index} value={item.street}>
                          {item.street}
                          </option>
                          );
                        })}
                      </select> */}
                  </div>
                </>
              )}
            </div>
            <div className="search-territory__item">
              {selectStreet && listCity.length > 0 && (
                <>
                  <ul className="description">
                    <li className="description__item">
                      <strong>Номера домов: </strong>
                      {
                        listCity.find((item) => {
                          // console.log(item)
                          return (item.id == selectStreet.id)
                        }).houseNumbers
                      }
                    </li>
                    {/* <li className="description__item"><strong>Обслуживающий филиал: </strong>{listCity.find(item => item.street == selectStreet).addressingApplications}</li> */}
                    {/* <li className="description__item"><strong>Производственное отделение: </strong>{listCity.find(item => item.street == selectStreet).po}</li> */}
                    <li className="description__item">
                      <strong>Филиал: </strong>
                      {getFilialLink(listCity.find((item) => item.id == selectStreet.id).filial)}
                      ,{" "}
                      {listCity.find((item) => item.id == selectStreet.id).po}
                    </li>
                    <li className="description__item">
                      <strong>Городской округ: </strong>
                      {
                        listCity.find((item) => item.id == selectStreet.id)?.cityDistrict
                      }
                    </li>
                    {listCity.find((item) => item.id == selectStreet.id)
                      .note && (
                        <li className="description__item">
                          <strong>Примечание: </strong>
                          {
                            listCity.find((item) => item.id == selectStreet.id)
                              .note
                          }
                        </li>
                      )}
                  </ul>
                </>
              )}
            </div>
          </div>
          <button
            className="planned-notification__link"
            onClick={getXlsxFile}
            disabled={loadingAllTerritory}
            style={{ width: "300px" }}
          >
            {!loadingAllTerritory
              ? "Скачать полный список адресов"
              : "Загрузка..."}
          </button>
          {/* <a className="doc-line" href={`${addressServer}/uploads/4327781bb104dac248633e279f302619_29561a75e9.xlsx?updated_at=2022-11-03T07:14:20.680Z`} download="" rel="noopener noreferrer" target="_blank" >
            <div className="doc-line__wrap-icon">
              <img src={xlsxPic} alt="icon xlsx" />
            </div>
            <div className="doc-line__wrap-text">
              <span className="doc-line__name">Перечень потребителей АО "Мособлэнерго"</span>
              <span className="doc-line__file-info">xlsx, 663КБ</span>
            </div>
          </a> */}
        </div>
        <div className="text-area ">
          <p>
            Обеспечив географию присутствия наших филиалов в большинстве
            муниципальных образований Подмосковья, «Мособлэнерго» всего за
            несколько лет стало одной из крупнейших электросетевых компаний
            области.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
