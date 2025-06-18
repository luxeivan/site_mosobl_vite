import React from "react";
import { motion } from "framer-motion";
import TopImage from "../../components/TopImage";
import { Row, Col, Typography, Card, Button } from "antd";
import styles from "./VacanciesTwo.module.css";

import IMG_0463 from "../../img/vacancies/new/IMG_0463.WEBP";
import IMG_0487 from "../../img/vacancies/new/IMG_0487.JPG";
import IMG_0488 from "../../img/vacancies/new/IMG_0488.JPG";
import IMG_0489 from "../../img/vacancies/new/IMG_0489.JPG";
import IMG_0494 from "../../img/vacancies/new/IMG_0494.WEBP";
import IMG_PILL from "../../img/vacancies/new/Успешные выпуск2.png";
import IMG_MEN from "../../img/vacancies/new/Чувачок.png";

const { Title, Paragraph, Text } = Typography;

const professions = [
  {
    title: "Электромонтер",
    img: IMG_0463,
    description: (
      <>
        <Text strong>Кто такой электромонтер?</Text>
        <br />
        Плюсы профессии и чем мы поможем?
      </>
    ),
  },
  {
    title: "Диспетчер",
    img: IMG_0488,
    description: (
      <>
        <Text strong>Кто такой диспетчер?</Text>
        <br />
        Плюсы профессии и чем мы поможем?
      </>
    ),
  },
  {
    title: "Релейщик",
    img: IMG_0487,
    description: (
      <>
        <Text strong>Кто такой релейщик?</Text>
        <br />
        Плюсы профессии и чем мы поможем?
      </>
    ),
  },
  {
    title: "Водитель спецтехники",
    img: IMG_0489,
    description: (
      <>
        <Text strong>Кто такой водитель спецтехники?</Text>
        <br />
        Плюсы профессии и чем мы поможем?
      </>
    ),
  },
];

export default function VacanciesTwo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Шапка */}
      <TopImage image={IMG_0494} title="КАРЬЕРА" />

      {/* Истории успешной карьеры */}
      <div className={styles.container}>
        <section className={styles.storySection}>
          <Title level={2} className={styles.sectionTitle}>
            ИСТОРИИ УСПЕШНОЙ КАРЬЕРЫ
          </Title>
          
          <Row gutter={[40, 20]} align="top">
            <Col xs={24} md={14}>
              <Paragraph className={styles.bigParagraph}>
                Специально к юбилею АО «Мособлэнерго» выпустила памятную книгу,
                посвященную истории развития компании и ее филиалов. История АО
                «Мособлэнерго» - это гораздо больше, чем 20 лет. Электросети
                Подмосковья, профессиональные коллективы которых по сей день хранят
                уникальные воспоминания за более чем 65 лет работы, сегодня стали
                частью нашей большой компании. Бесценные рассказы ветеранов отрасли
                и самые яркие вехи истории электросетевых предприятий легли в основу
                нашей памятной книги.
              </Paragraph>
              
              <div className={styles.pillWrapper}>
                <img
                  src={IMG_PILL}
                  alt="Успешные выпускники"
                  className={styles.pillImage}
                />
              </div>
            </Col>
            
            <Col xs={24} md={10} className={styles.menCol}>
              <img
                src={IMG_MEN}
                alt="Карьерный рост"
                className={styles.menImage}
              />
            </Col>
          </Row>
        </section>

        {/* Наши профессии */}
        <section className={styles.profsSection}>
          <Title level={3} className={styles.profTitle}>
            КЕМ ТЫ МОЖЕШЬ СТАТЬ В «МОСОБЛЭНЕРГО»?
          </Title>
          
          <Row gutter={[24, 24]}>
            {professions.map((prof) => (
              <Col xs={24} sm={12} lg={6} key={prof.title}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt={prof.title}
                      src={prof.img}
                      className={styles.profImage}
                    />
                  }
                  className={styles.profCard}
                >
                  <Card.Meta
                    title={<Title level={4}>{prof.title}</Title>}
                    description={prof.description}
                  />
                  <Button type="link" className={styles.profLink}>
                    Подробнее →
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      </div>
    </motion.div>
  );
}

//НЕ ТРОГАЕМ
// import React from "react";
// import { motion } from "framer-motion";
// import { Splitter, Grid, Space, Card, Typography } from "antd";
// import TopImage from "../../components/TopImage";
// import vacan_img from "../../img/d21248be80705e7a80efdf5efde73cc5.jpg";
// import styles from "./Vacancies.module.css";

// import JobPart from "./Job/JobPart";
// import PracticePart from "./Practice/PracticePart";
// import DownBlock from "./DownBlock/DownBlock";

// const { Title, Text } = Typography;

// const { useBreakpoint } = Grid;

// export default function VacanciesTwo() {
//   const screens = useBreakpoint();
//   const isMobile = !screens.md; // md ~ 768px, если ширина < 768, считаем мобильной

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <TopImage title={"Моя карьера"} />

//       {/* <div className="page-grid__content" id="content">
//         {isMobile ? (
//           <Space direction="vertical" style={{ width: "100%" }}>
//             <JobPart />
//             <PracticePart />
//           </Space>
//         ) : (
//           <>
//             <Splitter style={{ height: "auto" }}>
//               <Splitter.Panel
//                 defaultSize="50%"
//                 min="30%"
//                 max="70%"
//                 className={styles.right}
//               >
//                 <JobPart />
//               </Splitter.Panel>
//               <Splitter.Panel className={styles.left}>
//                 <PracticePart />
//               </Splitter.Panel>
//             </Splitter>
//           </>
//         )}
//       </div> */}
//     </motion.div>
//   );
// }
