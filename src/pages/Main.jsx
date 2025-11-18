import React, { useEffect, useState } from "react";
import sun from "../img/sun.svg";
import pobeda from "../img/Pobeda80_logo_main.png";
import { addressServer } from "../config";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Flex, Card, Typography, Image, Button } from "antd";
import Container1600 from "../components/Container1600";
import styles from "./Main.module.css"
import disconnect from "../img/main/disconnect.png"
import newPortal from "../img/main/newPortal.png"
import moreServices from "../img/main/moreServices.png"
import scammers from "../img/main/scammers.png"

export default function Main() {
  const [publication, setPublication] = useState([]);
  useEffect(() => {
    fetch(`${addressServer}/api/main-page-menus?populate=*`)
      .then((response) => response.json())
      .then((data) => setPublication(data.data))
      .catch((err) => {
        console.log(err);
        setPublication([]);
      });
  }, []);
  const mainCardList = [
    {
      title: "Новый портал потребителя",
      text: "Заработал новый портал потребителя на котором можно ознакомится с нашими услугами а так же подать заявку на их получение.",
      image: newPortal,
      backgroundColor: "#D0DCF4",
      buttonName: "Перейти на портал",
      url: "https://portal.mosoblenergo.ru",
      urlBlank: true,
    },
    {
      title: "Внеплановые отключения",
      text: "Cервис информирования населения о перерывах электроснабжения – плановых работах и технологических нарушениях в сетях (внеплановых отключениях).",
      image: disconnect,
      backgroundColor: "#EDE8F6",
      buttonName: "Узнать об отключениях",
      url: "/plannedOutages",
      urlBlank: false,
    },
    {
      title: "Дополнительные услуги",
      text: "Согласовать топосъемку Согласовать рабочую и проектную документацию Получить технические условия на параллельное следование и пересечение ",
      image: moreServices,
      backgroundColor: "#E2E8F0",
      buttonName: "Подробнее",
      url: "https://uslugi.mosreg.ru/services/20809?step=110530&target=66979&applicant=15267",
      urlBlank: true,
    },
    {
      title: "Случаи мошенничества",
      text: "Мы никогда не запрашиваем  персональные данные по телефону. Передача персональных данных возможна только в личном кабинете или в офисе при подаче заявок.",
      image: scammers,
      backgroundColor: "#D0F4F2",
      buttonName: false,
      url: "/",
      urlBlank: false,
    },
  ]
  return (
    <>
      <Container1600>
        <Flex gap={20} justify="center" style={{ margin: "20px 0" }} wrap={"wrap"}>
          {mainCardList.map((item, index) =>
            <Card
              className={styles.card}
              style={{ backgroundColor: item.backgroundColor }}
              key={index}
            >
              <Flex vertical style={{ height: "100%" }}>
                <Typography.Title level={4}>{item.title}</Typography.Title>
                <Typography.Paragraph>{item.text}</Typography.Paragraph>
                <Flex style={{ flex: 1 }} vertical justify="flex-end">
                  <Image style={{ flex: 1 }} preview={false} src={item.image} />
                  {item.buttonName &&
                    <Flex justify="center" style={{ marginTop: 10 }}>
                      <Link to={item.url} target={item.urlBlank ? "_blank" : undefined}>
                        <Button style={{ backgroundColor: "#e37021" }}><Typography.Text style={{ color: "white" }}>{item.buttonName}</Typography.Text></Button>
                      </Link>
                    </Flex>
                  }
                </Flex>
              </Flex>
            </Card>
          )}

        </Flex>
      </Container1600>
      <div
        className="marquee-line marquee3k is-init"
        style={{ backgroundColor: "#E37021" }}
        data-speed="1"
      >

        {/* <img
          src={pobeda}
          alt="80 лет Победа!"
          className="pobeda-logo"
          style={{
            position: "absolute",
            top: "8rem",
            right: "6rem",
            width: "clamp(90px, 12vw, 180px)",
            height: "auto",
            zIndex: 10,
            pointerEvents: "none",
          }}
        /> */}

        <div className="items-wrap">
          <div className="items marquee">
            <img className="" src={sun} />

            <span className="marquee__text">
              Внимание! Для предотвращения угроз информационной безопасности АО
              «Мособлэнерго» осуществляет блокировку доставки и приема писем от
              доменов-отправителей, страной происхождения которых являются США и
              страны Европейского союза - gmail.com, outlook.com, yahoo.com.
            </span>
          </div>
          <div aria-hidden="true" className="items marquee">
            <img className="" src={sun} />
            <span className="marquee__text">
              Внимание! Для предотвращения угроз информационной безопасности АО
              «Мособлэнерго» осуществляет блокировку доставки и приема писем от
              доменов-отправителей, страной происхождения которых являются США и
              страны Европейского союза - gmail.com, outlook.com, yahoo.com.
            </span>
          </div>
        </div>
      </div>

      <motion.main
        className="page-grid__content"
        id="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section className="grid-posts" style={{ position: "relative" }}>
          <div className="container">
            <div className="grid-posts__wrapper">
              {publication &&
                publication.map((item, index) => (
                  <div className="post-block" key={item.id}>
                    {item.url && item.url.includes("http") ? (
                      <a className="post-block__wrapper" href={item.url}>
                        {index < 4 ? (
                          <div>
                            <div className="post-block__bg"></div>
                            <div className="post-block__bg-image"></div>
                          </div>
                        ) : (
                          false
                        )}
                        <picture className="post-block__image-hover">
                          <source
                            srcSet={addressServer + item.image.url}
                            type="image/webp"
                          />
                          <img
                            src={addressServer + item.image.url}
                            alt="ПЛАНОВЫЕ ОТКЛЮЧЕНИЯ"
                          />
                        </picture>
                        <div className="post-block__wrap-img">
                          <img
                            className="post-block__img"
                            src={addressServer + item.pic.url}
                            alt="icon"
                          />
                        </div>
                        <div className="post-block__wrap-text">
                          <div className="post-block__up">
                            <h4 className="post-block__caption">
                              {item.title}
                            </h4>
                          </div>
                          <div className="post-block__down">
                            <p className="post-block__text">
                              {item.description}
                            </p>
                            <button className="block-btn">
                              <span className="block-btn__text">Смотреть</span>
                              <div className="block-btn__wrap-svg">
                                <svg className="block-btn__arrow">
                                  <use href="/local/templates/vg/assets/img/arrow-link.svg#arrow-link"></use>
                                </svg>
                              </div>
                            </button>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <Link className="post-block__wrapper" to={item.url}>
                        {index < 4 ? (
                          <div>
                            <div className="post-block__bg"></div>
                            <div className="post-block__bg-image"></div>
                          </div>
                        ) : (
                          false
                        )}
                        <picture className="post-block__image-hover">
                          <source
                            srcSet={addressServer + item.image.url}
                            type="image/webp"
                          />
                          <img
                            src={addressServer + item.image.url}
                            alt="ПЛАНОВЫЕ ОТКЛЮЧЕНИЯ"
                          />
                        </picture>
                        <div className="post-block__wrap-img">
                          <img
                            className="post-block__img"
                            src={addressServer + item.pic.url}
                            alt="icon"
                          />
                        </div>
                        <div className="post-block__wrap-text">
                          <div className="post-block__up">
                            <h4 className="post-block__caption">
                              {item.title}
                            </h4>
                          </div>
                          <div className="post-block__down">
                            <p className="post-block__text">
                              {item.description}
                            </p>
                            <button className="block-btn">
                              <span className="block-btn__text">Смотреть</span>
                              <div className="block-btn__wrap-svg">
                                <svg className="block-btn__arrow">
                                  <use href="/local/templates/vg/assets/img/arrow-link.svg#arrow-link"></use>
                                </svg>
                              </div>
                            </button>
                          </div>
                        </div>
                      </Link>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </section>
      </motion.main>
    </>
  );
}

// import React, { useEffect, useState } from "react";
// import sun from "../img/sun.svg";
// import pobeda from "../img/Pobeda80_logo_main.png";
// import { addressServer } from "../config";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function Main() {
//   const [publication, setPublication] = useState([]);
//   useEffect(() => {
//     fetch(`${addressServer}/api/main-page-menus?populate=*`)
//       .then((response) => response.json())
//       .then((data) => setPublication(data.data))
//       .catch((err) => {
//         console.log(err);
//         setPublication([]);
//       });
//   }, []);
//   return (
//     <>
//       <div
//         className="marquee-line marquee3k is-init"
//         style={{ backgroundColor: "#E37021" }}
//         data-speed="1"
//       >
//         <div className="items-wrap">
//           <div className="items marquee">
//             <img className="" src={sun} />
//             <span className="marquee__text">
//               Внимание! Для предотвращения угроз информационной безопасности АО
//               «Мособлэнерго» осуществляет блокировку доставки и приема писем от
//               доменов-отправителей, страной происхождения которых являются США и
//               страны Европейского союза - gmail.com, outlook.com, yahoo.com.
//             </span>
//           </div>
//           <div aria-hidden="true" className="items marquee">
//             <img className="" src={sun} />
//             <span className="marquee__text">
//               Внимание! Для предотвращения угроз информационной безопасности АО
//               «Мособлэнерго» осуществляет блокировку доставки и приема писем от
//               доменов-отправителей, страной происхождения которых являются США и
//               страны Европейского союза - gmail.com, outlook.com, yahoo.com.
//             </span>
//           </div>
//         </div>
//       </div>

//       <motion.main
//         className="page-grid__content"
//         id="content"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <section className="grid-posts">
//           <div className="container">
//             <div className="grid-posts__wrapper">
//               {publication &&
//                 publication.map((item, index) => (
//                   <div className="post-block" key={item.id}>
//                     {item.url && item.url.includes("http") ? (
//                       <a className="post-block__wrapper" href={item.url}>
//                         {index < 4 ? (
//                           <div>
//                             <div className="post-block__bg"></div>
//                             <div className="post-block__bg-image"></div>
//                           </div>
//                         ) : (
//                           false
//                         )}
//                         <picture className="post-block__image-hover">
//                           <source
//                             srcSet={addressServer + item.image.url}
//                             type="image/webp"
//                           />
//                           {/* <source srcSet={imgc369cfb9b079726e4c79af4b2d7aff07} type="image/jpeg" /> */}
//                           <img
//                             src={addressServer + item.image.url}
//                             alt="ПЛАНОВЫЕ ОТКЛЮЧЕНИЯ"
//                           />
//                         </picture>
//                         <div className="post-block__wrap-img">
//                           <img
//                             className="post-block__img"
//                             src={addressServer + item.pic.url}
//                             alt="icon"
//                           />
//                         </div>
//                         <div className="post-block__wrap-text">
//                           <div className="post-block__up">
//                             <h4 className="post-block__caption">
//                               {item.title}
//                             </h4>
//                           </div>
//                           <div className="post-block__down">
//                             <p className="post-block__text">
//                               {item.description}
//                             </p>
//                             <button className="block-btn">
//                               <span className="block-btn__text">Смотреть</span>
//                               <div className="block-btn__wrap-svg">
//                                 <svg className="block-btn__arrow">
//                                   <use href="/local/templates/vg/assets/img/arrow-link.svg#arrow-link"></use>
//                                 </svg>
//                               </div>
//                             </button>
//                           </div>
//                         </div>
//                       </a>
//                     ) : (
//                       <Link className="post-block__wrapper" to={item.url}>
//                         {index < 4 ? (
//                           <div>
//                             <div className="post-block__bg"></div>
//                             <div className="post-block__bg-image"></div>
//                           </div>
//                         ) : (
//                           false
//                         )}
//                         <picture className="post-block__image-hover">
//                           <source
//                             srcSet={addressServer + item.image.url}
//                             type="image/webp"
//                           />
//                           {/* <source srcSet={imgc369cfb9b079726e4c79af4b2d7aff07} type="image/jpeg" /> */}
//                           <img
//                             src={addressServer + item.image.url}
//                             alt="ПЛАНОВЫЕ ОТКЛЮЧЕНИЯ"
//                           />
//                         </picture>
//                         <div className="post-block__wrap-img">
//                           <img
//                             className="post-block__img"
//                             src={addressServer + item.pic.url}
//                             alt="icon"
//                           />
//                         </div>
//                         <div className="post-block__wrap-text">
//                           <div className="post-block__up">
//                             <h4 className="post-block__caption">
//                               {item.title}
//                             </h4>
//                           </div>
//                           <div className="post-block__down">
//                             <p className="post-block__text">
//                               {item.description}
//                             </p>
//                             <button className="block-btn">
//                               <span className="block-btn__text">Смотреть</span>
//                               <div className="block-btn__wrap-svg">
//                                 <svg className="block-btn__arrow">
//                                   <use href="/local/templates/vg/assets/img/arrow-link.svg#arrow-link"></use>
//                                 </svg>
//                               </div>
//                             </button>
//                           </div>
//                         </div>
//                       </Link>
//                     )}
//                   </div>
//                 ))}
//             </div>
//           </div>
//         </section>
//       </motion.main>
//     </>
//   );
// }
