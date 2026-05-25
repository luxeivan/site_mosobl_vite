import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { Spin, Typography } from "antd";
import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";
import Lightbox from "yet-another-react-lightbox";
import { Counter, Download, Fullscreen, Slideshow, Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import axios from "axios";
import TopImage from "../components/TopImage";
import MarkDownText from "../components/MarkDownText/MarkDownText";
import { addressServer } from "../config";
import { demoItems, normalizeNewsItem } from "./News2";
import heroImage from "../img/5d1dda82e3641ae19df5a51619ffb49c.jpg";
import styles from "./News.module.css";

const { Paragraph } = Typography;

function getRutubeEmbedUrl(url) {
  if (!url || !url.includes("rutube.ru")) return "";
  const match = url.match(/rutube\.ru\/(?:video|play\/embed)\/([a-zA-Z0-9]+)/);
  return match ? `https://rutube.ru/play/embed/${match[1]}` : "";
}

async function fetchNewsItem(id) {
  const candidates = [
    `/api/news/${id}?populate=*`,
    `/api/novostis/${id}?populate=*`,
    `/api/press-czentr-novostis/${id}?populate=*`,
  ];

  for (const endpoint of candidates) {
    try {
      const response = await axios.get(`${addressServer}${endpoint}`);
      if (response.data?.data) return normalizeNewsItem(response.data.data);
    } catch {
      // Если Strapi-коллекция еще не подключена, ниже покажем аккуратную заглушку.
    }
  }

  return demoItems.find((item) => String(item.linkId || item.id) === String(id)) || null;
}

export default function NewsDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    fetchNewsItem(id).then((row) => {
      if (!alive) return;
      setItem(row);
      setLoading(false);
    });
    return () => {
      alive = false;
    };
  }, [id]);

  const photos = useMemo(() => {
    const rows = item?.photos?.length ? item.photos : item?.image ? [item.image] : [];
    return rows.map((src) => ({ src, width: 1200, height: 800 }));
  }, [item]);

  if (loading) {
    return <Spin size="large" style={{ display: "block", margin: "80px auto" }} />;
  }

  if (!item) {
    return (
      <div className="container" style={{ padding: "80px 0" }}>
        <Link to="/news2" className={styles.backLink}>
          Назад к новостям
        </Link>
        <h1 className={styles.detailTitle}>Новость не найдена</h1>
      </div>
    );
  }

  const pageTitle = item.title || (item.section === "photos" ? "Фотобанк" : "Новости компании");
  const videoEmbedUrl = getRutubeEmbedUrl(item.videoUrl);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <TopImage image={heroImage} title={pageTitle} paddingTop={150} paddingBottom={80} />
      <div className={`container ${styles.detail}`}>
        <Link to="/news2" className={styles.backLink}>
          Назад к новостям
        </Link>

        <div className={photos.length || item.videoUrl ? styles.detailBody : styles.detailBodySingle}>
          <div>
            {item.date && <Paragraph type="secondary">Дата публикации: {item.date}</Paragraph>}

            {item.description && (
              <div className={styles.detailText}>
                <MarkDownText>{item.description}</MarkDownText>
              </div>
            )}
          </div>

          {(photos.length > 0 || item.videoUrl) && (
            <div className={styles.detailMedia}>
              {item.videoUrl && (
                videoEmbedUrl ? (
                  <iframe
                    className={styles.video}
                    src={videoEmbedUrl}
                    title={item.title || "Видео"}
                    allow="clipboard-write; autoplay"
                    allowFullScreen
                  />
                ) : (
                  <a href={item.videoUrl} className={styles.videoLink} target="_blank" rel="noreferrer">
                    Открыть видео
                  </a>
                )
              )}

              {photos.length === 1 && (
                <button type="button" className={styles.detailImageButton} onClick={() => setIndex(0)}>
                  <img src={photos[0].src} alt={item.title || "Новость"} className={styles.detailImage} />
                </button>
              )}

              {photos.length > 1 && (
                <div className={styles.gallery}>
                  <ColumnsPhotoAlbum
                    photos={photos}
                    columns={document.documentElement.scrollWidth > 1000 ? 2 : 1}
                    onClick={({ index }) => setIndex(index)}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos}
        fullscreen
        plugins={[Fullscreen, Download, Zoom, Slideshow, Counter]}
      />
    </motion.div>
  );
}
