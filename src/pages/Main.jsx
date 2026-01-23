import React, { useEffect, useState } from "react";
import sun from "../img/sun.svg";
import pobeda from "../img/Pobeda80_logo_main.png";
import { addressServer } from "../config";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Flex, Image, Typography } from "antd";
import upTarif from '../img/main/upTarif.png'
import styles from './main.module.css'

const { Title, Text, Paragraph } = Typography

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
  return (
    <>
      <div
        className="marquee-line marquee3k is-init"
        style={{ backgroundColor: "#E37021",marginBottom:0 }}
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
      <div 
      className={styles.containeruptarif}
      // style={{
      //   // backgroundColor: "blue", 
      //   color: "white", 
      //   padding: 20,
      //   // background: "linear-gradient(138deg,#0061aa 0%, #008ed4 50%, #0061aa 100%)" 
      //   background: "#0061AA",
      //   background: "linear-gradient(138deg, #0061AA 0 %, #008ED4 50 %, #0061AA 100 %)"
      //   // background:"linear-gradient(138.4deg, #38bafe 26.49%, #2d73bc 79.45%)" 
      // }}
      >
        {/* <div className="container">
          <div level={3} style={{ color: "white",  textAlign: "center" }} className={styles.titleText}>Повышение тарифов с 1 января 2026 года</div>
          <Flex wrap="wrap" gap={40} justify="center" align="center">
            <Flex justify="center" align="center" className={styles.item} >
              <Image src={upTarif} preview={false} style={{ maxWidth: 300 }} />
            </Flex>
            <div className={styles.item}>
              <div className={styles.standartText} >
                Стоимость технологического присоединения к электрическим сетям в 2026 году:
              </div>
              <div className={styles.standartText} >
                Для физических лиц до 15 кВт по 3 категории(быт) плата составит
              </div>
              <div className={styles.bigText} >
                23 859,53*₽ за 1 кВт
              </div>
                <div className={styles.standartText} >с НДС (в случае наличия работ «последней мили» со стороны сетевой организации)</div>

              <div className={styles.bigText}>
                357 892,95₽ за 15 кВт
              </div>
                <div className={styles.standartText}>с НДС</div>

            </div>
          <div className={styles.smallText}>
            Оцените свои финансовые возможности. Подайте заявку на технологическое присоединение только убедившись в наличии необходимых средств.<br />
            *Согласно Распоряжения Комитета по ценам и тарифам Московской области №300-Р от 28.11.2025
          </div>
          </Flex>
        </div> */}
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
