import React from "react";
import { motion } from "framer-motion";
import TopImage from "../../../components/TopImage";
import { Card, Typography, Row, Col, Button } from "antd";
import styles from "./Universities.module.css";

import univer1 from "../../../img/vacancies/practice/univerlogo/univer1.png";
import univer2 from "../../../img/vacancies/practice/univerlogo/univer2.png";
import univer3 from "../../../img/vacancies/practice/univerlogo/uniber3.jpg";
import univer4 from "../../../img/vacancies/practice/univerlogo/univer4.png";
import univer5 from "../../../img/vacancies/practice/univerlogo/univer5.png";
import univer6 from "../../../img/vacancies/practice/univerlogo/univer6.png";
import univer7 from "../../../img/vacancies/practice/univerlogo/univer7.png";
import univer8 from "../../../img/vacancies/practice/univerlogo/univer8.png";
import univer9 from "../../../img/vacancies/practice/univerlogo/univer9.jpg";
import univer10 from "../../../img/vacancies/practice/univerlogo/univer10.png";
import univer11 from "../../../img/vacancies/practice/univerlogo/univer11.png";
import univer12 from "../../../img/vacancies/practice/univerlogo/univer12.png";
import univer13 from "../../../img/vacancies/practice/univerlogo/univer13.png";
import univer14 from "../../../img/vacancies/practice/univerlogo/univer14.png";

const { Title, Text } = Typography;

const universities = [
  {
    name: "ФГБОУ ВО «Национальный исследовательский университет «Московский энергетический институт»",
    logo: univer1,
    link: "http://mpei.ru",
    description: "Ведущий технический университет в области энергетики.",
  },
  {
    name: "ФГБОУ ВО «Воронежский государственный университет инженерных технологий»",
    logo: univer2,
    link: "https://vsuet.ru/",
    description:
      "Специализируется на подготовке кадров для инженерных технологий.",
  },

  {
    name: "ГБПОУ МО «Егорьевский техникум»",
    logo: univer4,
    link: "https://xn----ctbchbcvnduig0aqru4a2j.xn--p1ai/",
    description:
      "Образовательное учреждение, готовящее специалистов среднего звена по различным направлениям.",
  },
  {
    name: "ГБПОУ МО «Воскресенский колледж»",
    logo: univer5,
    link: "http://xn--b1aecfrgavb2a.xn--p1ai/",
    description:
      "Предлагает программы среднего профессионального образования в различных сферах.",
  },
  {
    name: "ГБПОУ МО «Ступинский техникум им. А.Т. Туманова»",
    logo: univer6,
    link: "https://xn--80aynec.xn--p1ai/",
    description:
      "Готовит квалифицированных специалистов для промышленных предприятий и других отраслей.",
  },
  {
    name: "ГБПОУ МО «Колледж «Подмосковье»",
    logo: univer7,
    link: "https://klincollege.ru/",
    description:
      "Предоставляет образовательные услуги в сфере среднего профессионального образования.",
  },
  {
    name: "ГБПОУ МО «Дмитровский техникум»",
    logo: univer8,
    link: "https://dmitrovt.ru/",
    description:
      "Образовательное учреждение, специализирующееся на подготовке специалистов в различных областях.",
  },
  {
    name: "ГБПОУ МО «Орехово-Зуевский железнодорожный техникум имени В.И. Бондаренко»",
    logo: univer9,
    link: "https://ozgt.ru/",
    description:
      "Готовит специалистов для железнодорожного транспорта и других отраслей.",
  },
  {
    name: "ГБПОУ МО «Павлово-Посадский техникум»",
    logo: univer10,
    link: "https://www.pp-teh.ru/",
    description:
      "Предлагает программы среднего профессионального образования по различным направлениям.",
  },
  {
    name: "ГАПОУ МО «МЦК— Техникум имени С.П. Королева»",
    logo: univer11,
    link: "https://www.tspk-mo.ru/",
    description:
      "Специализируется на подготовке специалистов в области космических технологий и смежных дисциплин.",
  },
  {
    name: "ГБПОУ МО «Орехово-Зуевский техникум»",
    logo: univer12,
    link: "https://oztech.ru/",
    description:
      "Образовательное учреждение, предлагающее программы среднего профессионального образования.",
  },
  {
    name: "ГБПОУ МО «Щелковский колледж»",
    logo: univer13,
    link: "https://schelcol.ru/",
    description:
      "Предоставляет образовательные услуги в сфере среднего профессионального образования по различным направлениям.",
  },
  {
    name: "ГБПОУ МО «Шатурский энергетический техникум»",
    logo: univer14,
    link: "https://xn--r1alp.xn--p1ai/",
    description:
      "Специализируется на подготовке специалистов для энергетической отрасли и смежных сфер.",
  },
  {
    name: "ГБПОУ г. Москвы «Колледж современных технологий имени Героя Советского Союза М.Ф. Панова»",
    logo: univer3,
    link: "https://kst.mskobr.ru/",
    description:
      "Предоставляет современные образовательные программы в области технологий и инженерии.",
  },
];

export default function Universities() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.pageContainer} // Добавим класс к обертке
    >
      <TopImage title={"Учебные заведения"} />

      <div style={{ padding: 20 }}>
        <Title
          level={1}
          style={{ textAlign: "center", marginBottom: 40 }}
          className={styles.fadeInDown}
        >
          Учебные заведения-партнёры
        </Title>
        <Row gutter={[16, 16]} justify="center" className={styles.fadeInUp}>
          {universities.map((uni, index) => (
            <Col
              xs={24}
              sm={12}
              md={8}
              key={index}
              className={styles.fadeInLeft}
            >
              <Card
                style={{
                  padding: 20,
                  borderRadius: 10,
                  border: "2px solid #d9d9d9",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                cover={
                  <img
                    src={uni.logo}
                    alt={uni.name}
                    style={{ maxHeight: 200, objectFit: "contain" }}
                  />
                }
              >
                <Title level={4}>{uni.name}</Title>
                <Text>{uni.description}</Text>
                <div style={{ textAlign: "center", marginTop: 20 }}>
                  <Button
                    type="primary"
                    href={uni.link}
                    target="_blank"
                    className="hh-button"
                    style={{ padding: "10px 24px" }}
                  >
                    Перейти на сайт
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </motion.div>
  );
}
