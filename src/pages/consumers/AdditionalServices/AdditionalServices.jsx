import React, { useEffect, useState } from "react";
import { Typography, Collapse, Table, Button } from "antd";
import axios from "axios";
import pdfIcon from "../../../img/pdf.svg";
import docxIcon from "../../../img/docx.svg";
import { addressServer } from "../../../config";
import { motion } from "framer-motion";
import TopImage from "../../../components/TopImage";
import imgTop from "../../../img/4c2c362e8d8fa557788c556795d32fae.jpg";
import styles from "./AdditionalServices.module.css";
import MarkDownText from "../../../components/MarkDownText/MarkDownText";
import { Link } from "react-router";

const { Paragraph } = Typography;

// Функция для отображения иконок на основе расширения файла
const getIconByExtension = (ext) => {
  const extension = ext.replace(".", "").toLowerCase();
  switch (extension) {
    case "pdf":
      return <img src={pdfIcon} alt="PDF" className={styles.icon} />;
    case "doc":
    case "docx":
      return <img src={docxIcon} alt="DOCX" className={styles.icon} />;
    default:
      return null;
  }
};

const AdditionalServices = () => {
  const [services, setServices] = useState([]);
  const [priceData, setPriceData] = useState([]);
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [priceFileData, setPriceFileData] = useState(null);

  // Получение всех данных цен
  const fetchAllPriceData = async () => {
    let page = 1;
    const pageSize = 100;
    let totalPages = 1;
    let allData = [];

    try {
      do {
        const response = await axios.get(
          `https://www.mosoblenergo.ru/back/api/prajs-dop-uslugs?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
        );
        const data = response.data.data;
        allData = allData.concat(data);

        const pagination = response.data.meta.pagination;
        totalPages = pagination.pageCount;
        page++;
      } while (page <= totalPages);

      return allData;
    } catch (error) {
      console.error("Ошибка при получении данных цен:", error);
      throw error;
    }
  };
  // console.log(services)
  // Получение всех данных услуг
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(
          "https://www.mosoblenergo.ru/back/api/dopolnitelnye-uslugi?populate[0]=section&populate[1]=section.documents&populate[2]=price&populate[3]=section.sectionName"
        );
        const data1 = response1.data.data;
        const servicesData = data1.section;
        const descriptionData = data1.description;
        const priceFileData = data1.price?.data || null;

        const allPriceData = await fetchAllPriceData();

        setServices(servicesData);
        setPriceData(allPriceData);
        setDescription(descriptionData);
        setPriceFileData(priceFileData);
        setIsLoading(false);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Функция для рендера контента
  const renderContent = (content) => {
    return <MarkDownText>{content}</MarkDownText>;
  };

  // Функция для рендера таблицы прайсов
  const renderPriceTable = (sectionName) => {
    const filteredData = priceData.filter(
      (item) => item.sectionName?.name === sectionName
    );

    if (filteredData.length === 0) {
      return null;
    }

    // Сортировка данных по полю 'sort'
    filteredData.sort((a, b) => a.sort - b.sort);

    // Формируем dataSource
    const dataSource = filteredData.map((item, index) => {
      const { attributes } = item;

      if (item.isSubSection) {
        return {
          key: `subsection-${index}`,
          isSubSectionHeader: true,
          subSectionName: item.subSectionName,
          filesDoc: item.filesDoc,
        };
      } else {
        return {
          key: index,
          code: item.code,
          name: item.name,
          unit: item.unit,
          price: item.price,
          isSubSectionHeader: false,
          rowSpanCode:
            item.rowSpanCode !== null ? item.rowSpanCode : 1,
          rowSpanName:
            item.rowSpanName !== null ? item.rowSpanName : 1,
          rowSpanUnit:
            item.rowSpanUnit !== null ? item.rowSpanUnit : 1,
          rowSpanPrice:
            item.rowSpanPrice !== null ? item.rowSpanPrice : 1,
        };
      }
    });

    // Формируем колонки таблицы
    const columns = [
      {
        title: "Код",
        dataIndex: "code",
        key: "code",
        render: (text, record) => {
          // console.log(record)
          if (record.isSubSectionHeader) {
            return {
              children: (
                <div>
                  <strong>{record.subSectionName}</strong>
                  {record.filesDoc?.data && (
                    <ul className={styles.list}>
                      {record.filesDoc.data.map((doc, idx) => (
                        <li key={idx}>
                          <a
                            href={`${addressServer}${doc.url}`}
                            className={styles.documentLink}
                          >
                            {getIconByExtension(doc.ext)}
                            {doc.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ),
              props: {
                colSpan: 4,
              },
            };
          }
          return text;
        },
        onCell: (record) => ({
          rowSpan: record.rowSpanCode,
        }),
      },
      {
        title: "Наименование услуги",
        dataIndex: "name",
        key: "name",
        onCell: (record) => ({
          rowSpan: record.rowSpanName,
          colSpan: record.isSubSectionHeader ? 0 : false,
        }),
      },
      {
        title: "Ед. измерения",
        dataIndex: "unit",
        key: "unit",
        onCell: (record) => ({
          rowSpan: record.rowSpanUnit,
          colSpan: record.isSubSectionHeader ? 0 : false,
        }),
      },
      {
        title: "Цена, руб. с НДС",
        dataIndex: "price",
        key: "price",
        onCell: (record) => ({
          rowSpan: record.rowSpanPrice,
          colSpan: record.isSubSectionHeader ? 0 : false,
        }),
      },
    ];

    return (
      <div className={styles["wrap-table"]}>
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          rowClassName={(record) =>
            record.isSubSectionHeader ? styles.subSectionRow : ""
          }
          bordered
          tableLayout="fixed"
        />
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="page-grid__content" id="content">
        <p>Загрузка...</p>
      </div>
    );
  }

  const items = services.map((section, index) => ({
    key: index.toString(),
    label: (
      <div className="accordion-row__up">
        <span className="accordion-row__text">{section.title}</span>
      </div>
    ),
    children: (
      <>
        {/* Контактная информация */}
        <Paragraph style={{ fontSize: 18 }}>
          По вопросам оказания дополнительных услуг свяжитесь с нами: тел.:{" "}
          <a href="tel:+74957803962" style={{ fontSize: 18 }}>
            <b>8 (495) 780-39-62</b>
          </a>{" "}
          доб. 3327, доб. 1096; e-mail:{" "}
          <a href="mailto:uslugi@mosoblenergo.ru" style={{ fontSize: 18 }}>
            <b>uslugi@mosoblenergo.ru</b>
          </a>
        </Paragraph>

        {/* Документы */}
        {section.documents && (
          <ul className={styles.list}>
            {section.documents.map((doc, idx) => (
              <li key={idx}>
                <a
                  href={`${addressServer}${doc.url}`}
                  className={styles.documentLink}
                >
                  {getIconByExtension(doc.ext)}
                  {doc.name}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Контент секции */}
        {section.content && renderContent(section.content)}

        {/* Таблица прайсов */}
        {renderPriceTable(section.sectionName.name)}
      </>
    ),
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage image={imgTop} title={"Дополнительные услуги"} more={
        <div>

          <div
            // style={{ position: "absolute", top: -120, left: 0, zIndex: 1000, backgroundColor: "white", padding: 10, borderRadius: 10, margin: 20, }}
            style={{
              backgroundColor: "#fffc",
              padding: 20,
              borderRadius: 10,
              // margin: "0 auto",
              marginTop: 40,
              marginBottom: 20,
              // border: "1px solid #d9d9d9",
              // maxWidth: "50%"
            }}
            className={styles.more}
          >
            <Typography.Paragraph>
              <b>Согласовать топографическую съемку</b> для подтверждения наличия/отсутствия инженерных сетей на территории земельного участка в электронном виде Вы можете посредством сервиса <b>«ВсеСети» на Портале государственных и муниципальных услуг</b> Московской области.
            </Typography.Paragraph>
            <div style={{ textAlign: "center" }}>
              <a href="https://uslugi.mosreg.ru/services/20809?step=110530&target=66979&applicant=15267" target="_blank" className="creditRating__link block-btn">

                Перейти на "ВсеСети"
              </a>
            </div>
          </div>
          <div style={{ marginTop: 20, textAlign: "center" }} className={`${styles.more} block-btn`}>
            <Link className={styles.more_link} style={{ width: "100%", textAlign: "center",  }} to={"/passportscommercialservices"}>Паспорта коммерческих услуг, оказываемых АО «МОСОБЛЭНЕРГО»</Link>
          </div>
        </div>
      }
        paddingTop={270}
        paddingBottom={100}
      />
      <div
        className="page-grid__content"
        id="content"
      // style={{ position: "relative" }}
      >

        <Collapse
          accordion
          className={styles.accordion}
          items={items}
          expandIcon={() => null}
        />

        {/* Описание внизу страницы */}

        {description && (
          <div className={styles.description}>
            <MarkDownText>{description}</MarkDownText>
          </div>
        )}

        {/* Ссылка на скачивание прейскуранта */}
        {priceFileData && (
          <div className="row-docs-age">
            <a
              className="doc-line"
              href={`${addressServer}${priceFileData.url}`}
              download
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="doc-line__wrap-icon">
                {getIconByExtension(priceFileData.ext)}
              </div>
              <div className="doc-line__wrap-text">
                <span className="doc-line__name">
                  {priceFileData.name || "Скачать файл"}
                </span>
                <span className="doc-line__file-info">
                  {priceFileData.ext.replace(".", "")},{" "}
                  {Math.round(priceFileData.size / 1024)} МБ
                </span>
              </div>
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AdditionalServices;
