import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TopImage from "../../components/TopImage";
import back from "../../img/20years/back.svg";
import logo from "../../img/20years/logo.png";
import pdfFile from "../../img/20years/book.pdf";
import pdfURL from "../../img/20years/book.pdf?url";
import styles from "./TwentyYears.module.css";
import { addressServer } from "../../config";

import { Flex, Typography, Grid } from "antd";
import HTMLFlipBook from "react-pageflip";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import axios from "axios";

const { Title, Paragraph, Link } = Typography;
const { useBreakpoint } = Grid;

export default function TwentyYears() {
  const [open, setOpen] = useState(false);
  const [lbOpen, setLbOpen] = useState(false);
  const [lbSlides, setLbSlides] = useState([]);
  const [lbIndex, setLbIndex] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [slides, setSlides] = useState([]);
  const screens = useBreakpoint();

  // Загружаем страницы книги из single-type Book
  useEffect(() => {
    axios
      .get(`${addressServer}/api/twentyyear?populate=Book`)
      .then((res) => {
        const mediaArray = res.data.data.Book || [];
        const mapped = mediaArray.map((file) => ({
          src: `${addressServer}${file.url}`,
        }));
        setSlides(mapped);
      })
      .catch((err) => {
        console.error("Error loading book pages:", err);
      });
  }, []);

  // Загружаем архивные фотографии филиалов
  useEffect(() => {
    axios
      .get(
        `${addressServer}/api/twentyyear?populate[0]=filial&populate[1]=filial.photos`
      )
      .then((res) => {
        setPhotos(res.data.data.filial || []);
      })
      .catch((err) => {
        console.error("Error loading filial photos:", err);
      });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage title="20 лет «МосОблЭнерго»" />

      {/* Шапка */}
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

        {screens.md && (
          <Link onClick={() => setOpen(true)}>Читать онлайн (листалка)</Link>
        )}
        <Link
          style={{ marginLeft: screens.md ? 24 : 0 }}
          onClick={() => window.open(pdfURL, "_blank", "noopener,noreferrer")}
        >
          Читать онлайн PDF
        </Link>
      </section>

      {/* Оверлей-листалка */}
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}>
          <button
            className={styles.closeButton}
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            aria-label="Закрыть"
          >
            ✕
          </button>
          <div
            className={styles.bookWrapper}
            onClick={(e) => e.stopPropagation()}
          >
            <HTMLFlipBook
              width={900}
              height={1200}
              minWidth={500}
              maxWidth={900}
              minHeight={600}
              maxHeight={1200}
              showCover
              usePortrait
              autoCenter
              mobileScrollSupport
              className={styles.book}
            >
              {slides.map((slide, i) => (
                <div key={i} className={styles.page}>
                  <img
                    src={slide.src}
                    alt={`Страница ${i + 1}`}
                    className={styles.pageImg}
                  />
                </div>
              ))}
            </HTMLFlipBook>
          </div>
        </div>
      )}

      {/* Архивные материалы */}
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
          электросетей Подмосковья мы разместили здесь всю найденную информацию.
        </Paragraph>
      </section>

      {/* Галереи по филиалам */}
      {photos.map((filial) => (
        <section key={filial.id} className={styles.branchSection}>
          <Title level={3}>{filial.nameFilial}</Title>
          <div className={styles.gallery}>
            {filial.photos.map(({ url, name }, idx) => (
              <figure key={idx} className={styles.galleryItem}>
                <img
                  src={`${addressServer}${url}`}
                  alt={name}
                  onClick={() => {
                    setLbSlides(
                      filial.photos.map(({ url }) => ({
                        src: `${addressServer}${url}`,
                      }))
                    );
                    setLbIndex(idx);
                    setLbOpen(true);
                  }}
                  className={styles.galleryImg}
                />
                <figcaption>{name.replace(/\.(jpe?g|png)$/i, "")}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}

      {/* Lightbox для архива */}
      {lbOpen && (
        <Lightbox
          open
          close={() => setLbOpen(false)}
          slides={lbSlides}
          index={lbIndex}
        />
      )}
    </motion.div>
  );
}
