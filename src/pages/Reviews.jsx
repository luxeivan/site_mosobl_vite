import React from "react";
import { motion } from "framer-motion";
import TopImage from "../components/TopImage";
import tllblog_header1 from "../img/tllblog_header1.jpg";

export default function Reviews() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage image={tllblog_header1} title={"Отзывы"} />
      <div className="page-grid__content" id="content">
        <div
          style={{
            maxWidth: "760px",
            height: "1300px",
            overflow: "hidden",
            position: "relative",
            margin: "0 auto",
          }}
        >
          <iframe
            style={{
              width: "100%",
              height: "100%",
              border: "1px solid #e6e6e6",
              borderRadius: "8px",
              boxSizing: "border-box",
            }}
            src="https://yandex.ru/maps-reviews-widget/1168677397?comments"
          ></iframe>
          <a
            href="https://yandex.ru/maps/org/mosoblenergo/1168677397/"
            rel="noopener noreferrer"
            target="_blank"
            style={{
              boxSizing: "border-box",
              textDecoration: "none",
              color: "#b3b3b3",
              fontSize: "10px",
              fontFamily: "YS Text,sans-serif",
              padding: "0 20px",
              position: "absolute",
              bottom: "8px",
              width: "100%",
              textAlign: "center",
              left: "0",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "block",
              maxHeight: "14px",
              whiteSpace: "nowrap",
              padding: "0 16px",
              boxSizing: "border-box",
            }}
          >
            МОСОБЛЭНЕРГО на карте Москвы и Московской области — Яндекс Карты
          </a>
        </div>
      </div>
    </motion.div>
  );
}
