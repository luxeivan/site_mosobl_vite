import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";
import { addressServer } from "../config";
import man from "../img/man.svg";
import { motion } from 'framer-motion'
import TopImage from "../components/TopImage";
const mapState = { center: [55.76, 37.64], zoom: 8, behaviors: ["disable('scrollZoom')", "drag"] };
export default function Filial() {
  const [filial, setFilial] = useState({});
  const params = useParams();
  // console.log(params);

  useEffect(() => {
    fetch(`${addressServer}/api/filialies/${params.id}?populate[0]=proizvodstvennye_otdeleniyas&populate[1]=kontakties&populate[2]=proizvodstvennye_otdeleniyas.kontakties&populate[3]=work_schedule&populate[4]=proizvodstvennye_otdeleniyas.work_schedule`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log("data",data)
        setFilial(data.data)
      })
      .catch((err) => {
        console.log(err);
        setFilial({});
      });
  }, []);
  const handlerRowUp = (event) => {
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
  };
  // console.log(filial)
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <TopImage title={"Информация о компании"} />
      <div className="page-grid__content" id="content">
        {/* <div>
        <Link to="/filials" className="button__back">
          Назад
        </Link>
      </div> */}
        {/* <h1 className="page-title">{filial && filial.name}</h1> */}

        <section className="inner-post">
          <div className="container">
            <div className="inner-post__up">
              <div className="breadcrumbs scroll-end">
                <Link to="/filials" className="button__back">
                  Назад
                </Link>
              </div>{" "}
              <h1 className="inner-post__title inner-post__margin">{filial && filial.name}</h1>
              <span className="inner-post__date inner-post__margin">{filial && filial.address} </span>
              <div style={{ display: "flex", flexDirection: "column", marginLeft: 20, marginTop: 10, marginBottom: 10 }}>

                {filial && filial.work_schedule?.map((item, index) => <p key={index}><span className="inner-post__date ">{item.days} - </span><span style={{ fontWeight: 700, marginLeft: 0 }} className="inner-post__date inner-post__margin">{item.times}</span></p>)}
              </div>
              <p className="inner-post__date inner-post__margin">{filial && filial.email && <span className="inner-post__date">Email: <a className="inner-post__date" href={`mailto:${filial.email}`}>{filial.email}</a></span>} </p>
            </div>
            <div className="inner-post__middle">
              <div className="branches">
                <div className="branches__grid-sm branches__grid-sm--border branches__grid-sm--change">
                  {filial &&
                    filial.kontakties?.map((item, index) => (
                      <div key={index} className="positions-post">
                        <div className="positions-post__wrapper">
                          <div className="positions-post__up">
                            <div className="positions-post__wrap-image">
                              <img src={man} alt="Man" title="" />
                            </div>
                          </div>
                          <div className="positions-post__down">
                            <div className="positions-post__row-name">
                              <h4 className="positions-post__name">{item.post}</h4>
                            </div>
                            <div className="positions-post__wrap-text">
                              <span>
                                тел.:
                                <a className="positions-post__tel" href={`tel:${item.tel}`}>
                                  {item.tel}
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {filial &&
                filial.proizvodstvennye_otdeleniyas?.map((item, index) => (
                  <div key={index} className="accordion-row">
                    <div className="accordion-row__up" onClick={handlerRowUp}>
                      <span className="accordion-row__text">{item.name}</span>
                      <div className="accordion-row__wrap-arrow">
                        {/* <svg className="accordion-row__arrow">
                            <use href="/local/templates/vg/assets/img/arrow-nav.svg#arrow-nav"></use>
                          </svg> */}
                      </div>
                    </div>
                    <div className="accordion-row__drop-down">
                      <div className="accordion-row__wrapper">
                        <div className="text-area">
                          <p style={{ marginBottom: 10 }}>
                            Адрес: <em>{item.address}</em>
                          </p>
                          <div>
                            {item.work_schedule?.map((item, index) =>
                              <p style={{ marginBottom: 0 }} key={index}>{item.days} - <em>{item.times}</em></p>
                            )}
                          </div>
                          {item && item.email && <div> <p>Email: <a className="inner-post__date" href={`mailto:${item.email}`}>{item.email}</a></p>  </div>}
                        </div>
                        <div className="accordion-row__grid">
                          {item.kontakties?.map((item, index) => (
                            <div key={index} className="positions-post">
                              <div className="positions-post__wrapper">
                                <div className="positions-post__down">
                                  <div className="positions-post__row-name">
                                    <h4 className="positions-post__name">{item.post}</h4>
                                  </div>
                                  <div className="positions-post__wrap-text">
                                    <span>
                                      тел.:{" "}
                                      <a className="positions-post__tel" href={`tel:${item.tel}`}>
                                        {item.tel}
                                      </a>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* <div className="inner-post__down">
            <a className="block-btn" href="/filialy/">
              <div className="block-btn__wrap-svg">
                <svg className="block-btn__arrow">
                  <use href="/local/templates/vg/assets/img/arrow-link.svg#arrow-link"></use>
                </svg>
              </div>
              <span className="block-btn__text">назад к списку</span>
            </a>
          </div>*/}
          </div>
        </section>
      </div>
      <YMaps className="YMaps">
        <Map state={mapState} className="yandex-map" modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}>
          <ZoomControl />
          {filial &&
            filial.proizvodstvennye_otdeleniyas?.map((item, index) => (
              <Placemark
                key={index}
                geometry={{
                  type: "Point",
                  coordinates: [item.latitude, item.longitude],
                }}
                properties={{
                  balloonContent: `<div class="ballon-down">${item.name}</div>`,
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