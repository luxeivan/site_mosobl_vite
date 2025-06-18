import React, { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import TopImage from "../../components/TopImage";
import back from "../../img/20years/back.svg";
import logo from "../../img/20years/logo.png";
import pdfFile from "../../img/20years/book.pdf";
import pdfURL from "../../img/20years/book.pdf?url";
import styles from "./TwentyYears.module.css";
import { addressServer } from "../../config";

import { Flex, Typography, Modal } from "antd";
import HTMLFlipBook from "react-pageflip";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import axios from "axios";

const { Title, Paragraph, Link } = Typography;

const PAGES = 17;

// const archiveReq = require.context(
//   "../../img/20years/Archive",
//   true,
//   /\.(jpe?g|png|webp)$/i
// );

// const archiveMap = archiveReq.keys().reduce((acc, path) => {
//   const [, branch, file] = path.match(/^\.\/([^/]+)\/(.+)$/);
//   const prettyName = file
//     .replace(/\.(jpe?g|png|webp)$/i, "")
//     .replace(/_/g, " ")
//     .replace(/\s{2,}/g, " ")
//     .trim();
//   (acc[branch] = acc[branch] || []).push({
//     src: archiveReq(path),
//     caption: prettyName,
//   });
//   return acc;
// }, {});

export default function TwentyYears() {
  const [open, setOpen] = useState(false);
  const [lbOpen, setLbOpen] = useState(false);
  const [lbSlides, setLbSlides] = useState([]);
  const [lbIndex, setLbIndex] = useState(0);
  const [pdfLbOpen, setPdfLbOpen] = useState(false);
  const [photos, setPhotos] = useState(false);

  // const branchNames = useMemo(
  //   () => Object.keys(archiveMap).sort((a, b) => a.localeCompare(b, "ru")),
  //   []
  // );
  useEffect(() => {
    axios.get(`${addressServer}/api/twentyyear?populate[0]=filial&populate[1]=filial.photos`)
      .then(res => {
        console.log(res.data);
        setPhotos(res.data.data.filial)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage title="20 лет «МосОблЭнерго»" />

      {/* шапка */}
      <Flex justify="space-between" align="center" className={styles.flex}>
        <img src={back} className={`${styles.img} ${styles.reverse}`} alt="" />
        <img src={logo} className={styles.logo} alt="20 лет МосОблЭнерго" />
        <img src={back} className={styles.img} alt="" />
        <div className={styles.line}>20 лет во благо Подмосковья!</div>
      </Flex>

      {/* Памятная книга */}
      <section className={styles.bookIntro}>
        <Title level={2} className={styles.sectionTitle}>
          Памятная книга
        </Title>
        <Paragraph className={styles.bigParagraph}>
          Специально к юбилею АО «Мособлэнерго» выпустило памятную книгу,
          посвященную истории развития компании и ее филиалов. История АО
          «Мособлэнерго» — это гораздо больше, чем 20 лет. Электросети городов
          Подмосковья, профессиональные коллективы которых по сей день хранят
          уникальные воспоминания за более чем 85 лет работы, сегодня стали
          частью нашей большой компании. Бесценные рассказы ветеранов отрасли и
          самые яркие вехи истории электросетевых предприятий легли в основу
          нашей памятной книги.
        </Paragraph>
        {/* <Link onClick={() => setOpen(true)}>Читать онлайн</Link> */}
        <Link onClick={() => setOpen(true)}>Читать онлайн (листалка)</Link>

        <Link
          style={{ marginLeft: 24 }}
          onClick={() => {
            // mobile & desktop одинаково: новая вкладка/окно
            window.open(pdfURL, "_blank", "noopener,noreferrer");
          }}
        >
          Читать онлайн PDF
        </Link>
      </section>

      {/* Архив */}
      <section className={styles.bookIntro}>
        <Title level={2} className={styles.sectionTitle}>
          Архивные материалы
        </Title>
        <Paragraph className={styles.bigParagraph}>
          В процессе работы над исследованием мы обнаружили уникальные архивные
          документы первых электросетевых предприятий городов Подмосковья, в том
          числе и довоенной эпохи – приказы, письма, распоряжения, десятки
          фотографий и свидетельств, воспоминаний и исторических фактов,
          свершившихся в различные периоды становления и развития отрасли. К
          сожалению, вместить в одну книгу подробную историю каждой электросети,
          которая теперь стала частью «Мособлэнерго», физически невозможно,
          поэтому мы постарались выбрать и включить в книгу основные события.
          Для всех, кто хотел бы более подробно погрузиться в историю
          электросетей Подмосковья мы разместили здесь всю найденную информацию
        </Paragraph>
      </section>

      {/* галереи по филиалам */}
      {photos && photos.map((filial) => (
        <section key={filial.id} className={styles.branchSection}>
          <Title level={3}>{filial.nameFilial}</Title>
          <div className={styles.gallery}>
            {filial.photos.map(({ url, name }, idx) => (
              <figure key={idx} className={styles.galleryItem}>
                {/* <img src={src} alt={caption} /> */}
                <img
                  src={`${addressServer}${url}`}
                  alt={name}
                  onClick={() => {
                    setLbSlides(filial.photos.map(({ url }) => ({ src: `${addressServer}${url}` })));
                    setLbIndex(idx);
                    setLbOpen(true);
                  }}
                  style={{ cursor: "zoom-in" }}
                />

                <figcaption>{name.replace(".jpg", "").replace(".png", "")}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}


      {/* overlay-книга */}
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}>
          <div
            className={styles.bookWrapper}
            onClick={(e) => e.stopPropagation()}
          >
            <HTMLFlipBook
              width={700}
              height={1000}
              minWidth={300}
              maxWidth={700}
              minHeight={400}
              maxHeight={1000}
              showCover
              usePortrait
              autoCenter
              mobileScrollSupport
              className={styles.book}
            >
              {photos && photos[0].photos.map((photo,index) =>

                <div key={index} className={styles.page}>
                  <img
                    src={`${addressServer}${photo.url}`}
                    alt={`Страница ${index + 1}`}
                    className={styles.pageImg}
                  />
                </div>
              )}
              {/* {Array.from({ length: PAGES }, (_, i) => (
                <div key={i} className={styles.page}>
                  <img
                    src={`${addressServer}/20years/pages/page-${i + 1
                      }.jpg`}
                    alt={`Страница ${i + 1}`}
                    className={styles.pageImg}
                  />
                </div>
              ))} */}
            </HTMLFlipBook>
          </div>
        </div>
      )}

      {/* Архив увеличение*/}
      {lbOpen && (
        <Lightbox
          open
          close={() => setLbOpen(false)}
          slides={lbSlides}
          index={lbIndex}
        />
      )}

      {/* Книга в pdf */}
      {pdfLbOpen && (
        <Lightbox
          open
          close={() => setPdfLbOpen(false)}
          slides={[{ src: pdfFile }]}
          render={{
            slide: ({ slide }) => (
              <iframe
                src={slide.src}
                title="Памятная книга PDF"
                style={{ width: "100%", height: "100%", border: 0 }}
              />
            ),
          }}
        />
      )}
    </motion.div>
  );
}

