import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import { ConfigProvider, DatePicker, Modal, Spin } from "antd";
import locale from "antd/es/locale/ru_RU";
import { LeftOutlined, PlayCircleFilled, RightOutlined } from "@ant-design/icons";
import Lightbox from "yet-another-react-lightbox";
import { Counter, Download, Fullscreen, Slideshow, Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import TopImage from "../components/TopImage";
import { addressServer } from "../config";
import heroImage from "../img/5d1dda82e3641ae19df5a51619ffb49c.jpg";
import vkIcon from "../img/34512673ce61b0db299f7e2405ac60e9.svg";
import okIcon from "../img/7ad387832d629a52c87195d9cb795e3c.svg";
import telegramIcon from "../img/639bae9c47ff56a3f33bc8f8b49a4e9b.svg";
import maxIcon from "../img/max_white.svg";
import styles from "./News.module.css";

export const NEWS_SECTIONS = [
  { key: "news", title: "Новости" },
  { key: "tv", title: "Мособлэнерго ТВ" },
  { key: "channels", title: "Видеосюжеты телеканалов" },
  { key: "photos", title: "Фотобанк" },
];

const SOCIAL_LINKS = [
  { title: "MAX", url: "https://max.ru/id5032137342_gos", icon: maxIcon },
  { title: "VK", url: "https://vk.com/mosoblenergo", icon: vkIcon },
  { title: "OK", url: "https://ok.ru/mosoblenergo", icon: okIcon },
  { title: "Telegram", url: "https://t.me/mosoblenergo", icon: telegramIcon },
  { title: "Отключения MAX", url: "https://max.ru/mosoblenergo24", icon: maxIcon },
  { title: "Отключения VK", url: "https://vk.com/mosoblenergo24", icon: vkIcon },
  { title: "Отключения OK", url: "https://ok.ru/mosoblenergo24", icon: okIcon },
  { title: "Отключения Telegram", url: "https://t.me/mosoblenergo24", icon: telegramIcon },
];

export const demoItems = [];

dayjs.locale("ru");

function getMediaUrl(file) {
  const item = Array.isArray(file) ? file[0] : file;
  const raw =
    item?.url ||
    item?.formats?.large?.url ||
    item?.formats?.medium?.url ||
    item?.formats?.small?.url;
  if (!raw) return "";
  return raw.startsWith("http") ? raw : `${addressServer}${raw}`;
}

function getMediaList(value) {
  const list = Array.isArray(value) ? value : value?.data || [];
  return list.map((item) => getMediaUrl(item?.attributes || item)).filter(Boolean);
}

function getRutubeVideoId(url) {
  if (!url || !url.includes("rutube.ru")) return "";
  const match = url.match(/rutube\.ru\/(?:video|shorts|play\/embed)\/([a-zA-Z0-9]+)/);
  return match?.[1] || "";
}

export function normalizeNewsItem(raw) {
  const item = raw?.attributes
    ? { id: raw.id, documentId: raw.documentId, ...raw.attributes }
    : raw;
  const dateValue = item.date || item.dateEvent || item.publishedAt || item.createdAt;
  const date = dateValue ? new Date(dateValue).toLocaleDateString("ru-RU") : "";
  const section = item.section || item.category || item.type || "news";
  const image = getMediaUrl(item.main_photo || item.mainPhoto || item.image || item.cover || item.preview);
  const photos = getMediaList(item.photo_file || item.photos || item.images || item.gallery);
  const videoUrl = item.url_Rutube || item.url_rutube || item.urlRutube || item.video_url || item.videoUrl || "";
  const id = item.documentId || item.id;

  return {
    id,
    linkId: id,
    section,
    title: item.title || item.name || item.shortDescription || "",
    date,
    dateKey: dateValue ? dayjs(dateValue).format("YYYY-MM-DD") : "",
    sort: Number.isFinite(Number(item.sort)) ? Number(item.sort) : 9999,
    timestamp: dateValue ? new Date(dateValue).getTime() : 0,
    shortDescription: item.shortDescription || item.previewText || item.descriptionShort || "",
    description: item.description || item.text || item.content || item.shortDescription || "",
    image,
    photos,
    videoUrl,
  };
}

function getRutubeEmbedUrl(url) {
  const id = getRutubeVideoId(url);
  return id ? `https://rutube.ru/play/embed/${id}/` : "";
}

async function fetchNews() {
  const response = await axios.get(`${addressServer}/api/news?populate=*&pagination[pageSize]=200`);
  const rows = response.data?.data;
  return Array.isArray(rows) ? rows.map(normalizeNewsItem) : [];
}

function getSortedItems(rows) {
  return [...rows].sort((a, b) => {
    const timeA = Number.isFinite(Number(a.timestamp)) ? Number(a.timestamp) : 0;
    const timeB = Number.isFinite(Number(b.timestamp)) ? Number(b.timestamp) : 0;
    if (timeA !== timeB) return timeB - timeA;
    const sortA = Number.isFinite(Number(a.sort)) ? Number(a.sort) : 9999;
    const sortB = Number.isFinite(Number(b.sort)) ? Number(b.sort) : 9999;
    if (sortA !== sortB) return sortA - sortB;
    return 0;
  });
}

function MediaThumb({ item, alt }) {
  if (item.image) {
    return <img src={item.image} alt={alt} className={styles.cardImage} loading="lazy" />;
  }
  if (item.videoUrl) {
    return <span className={styles.emptyMedia}>Видео</span>;
  }
  return <span className={styles.emptyMedia}>Нет изображения</span>;
}

function NewsCard({ item, variant = "media", onPhotoClick, onVideoClick }) {
  const isPoster = variant === "poster";
  const isPhoto = variant === "photo";
  const isMedia = !isPoster && !isPhoto;
  const linkId = item.linkId || item.id;
  const alt =
    item.title ||
    item.shortDescription ||
    NEWS_SECTIONS.find((section) => section.key === item.section)?.title ||
    "Новость";
  const content = (
    <>
      <span className={styles.cardImageWrap}>
        <MediaThumb item={item} alt={alt} />
        {isMedia && item.videoUrl && <PlayCircleFilled className={styles.playIcon} />}
      </span>
      {isPoster && item.title && <span className={styles.cardTitle}>{item.title}</span>}
      {!isPoster && !isPhoto && item.date && <span className={styles.cardDate}>{item.date}</span>}
      {!isPoster && !isPhoto && item.shortDescription && (
        <span className={styles.cardText}>{item.shortDescription}</span>
      )}
    </>
  );

  if (isPhoto) {
    return (
      <button type="button" className={`${styles.card} ${styles.cardPhoto} ${styles.cardButton}`} onClick={onPhotoClick}>
        {content}
      </button>
    );
  }

  if (isMedia) {
    return (
      <button
        type="button"
        className={`${styles.card} ${styles.cardButton} ${!item.videoUrl ? styles.cardDisabled : ""}`}
        onClick={() => item.videoUrl && onVideoClick(item)}
        disabled={!item.videoUrl}
      >
        {content}
      </button>
    );
  }

  return (
    <Link className={`${styles.card} ${isPoster ? styles.cardPoster : ""}`} to={`/news2/${linkId}`}>
      {content}
    </Link>
  );
}

function NewsRail({ title, items, variant, action, minItemsForArrows = 0, onPhotoClick, onVideoClick }) {
  const railRef = useRef(null);
  const showArrows = items.length > minItemsForArrows;
  const scroll = (direction) => {
    const node = railRef.current;
    if (!node) return;
    node.scrollBy({ left: direction * Math.round(node.clientWidth * 0.85), behavior: "smooth" });
  };

  if (!items.length) return null;

  return (
    <section className={`${styles.section} ${variant === "photo" ? styles.photoSection : ""}`}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.socialTitle}>{title}</h2>
        {action}
      </div>
      <div className={styles.railArea}>
        {showArrows && (
          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={() => scroll(-1)}
            aria-label="Прокрутить влево"
          >
            <LeftOutlined />
          </button>
        )}
        <div
          ref={railRef}
          className={`${styles.rail} ${variant === "poster" ? styles.railPoster : ""} ${
            variant === "photo" ? styles.railPhoto : ""
          } ${variant === "media" ? styles.railMedia : ""}`}
        >
          {items.map((item, index) => (
            <NewsCard
              key={item.id}
              item={item}
              variant={variant}
              onPhotoClick={() => onPhotoClick(index)}
              onVideoClick={onVideoClick}
            />
          ))}
        </div>
        {showArrows && (
          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={() => scroll(1)}
            aria-label="Прокрутить вправо"
          >
            <RightOutlined />
          </button>
        )}
      </div>
    </section>
  );
}

function SocialBlock() {
  return (
    <section className={styles.socialBlock}>
      <div>
        <h2 className={styles.socialTitle}>Социальные сети</h2>
        <p className={styles.socialText}>
          Актуальная информация о работе компании и отключениях публикуется в официальных социальных сетях.
        </p>
      </div>
      <div className={styles.socialLinks}>
        {SOCIAL_LINKS.map((link) => (
          <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className={styles.socialLink}>
            <span className={styles.socialIconWrap}>
              <img src={link.icon} alt="" className={styles.socialIcon} />
            </span>
            <span>{link.title}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function News2() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [videoItem, setVideoItem] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(-1);
  const [selectedNewsDate, setSelectedNewsDate] = useState(null);

  useEffect(() => {
    let alive = true;
    fetchNews()
      .then((rows) => {
        if (alive) setItems(rows);
      })
      .catch((error) => {
        console.error("Ошибка загрузки новостей:", error);
        if (alive) setItems([]);
      })
      .finally(() => {
        if (alive) setLoading(false);
      });
    return () => {
      alive = false;
    };
  }, []);

  const itemsBySection = useMemo(() => {
    return NEWS_SECTIONS.reduce((acc, section) => {
      acc[section.key] = getSortedItems(items.filter((item) => item.section === section.key));
      return acc;
    }, {});
  }, [items]);

  const photoItems = useMemo(() => {
    return getSortedItems(itemsBySection.photos || []).flatMap((item) => {
      const photos = item.photos?.length ? item.photos : [item.image].filter(Boolean);
      return photos.map((image, index) => ({ ...item, id: `${item.id}-photo-${index}`, image }));
    });
  }, [itemsBySection]);

  const lightboxSlides = useMemo(() => photoItems.map((item) => ({ src: item.image })), [photoItems]);
  const newsItems = itemsBySection.news || [];
  const newsDateKeys = useMemo(() => new Set(newsItems.map((item) => item.dateKey).filter(Boolean)), [newsItems]);
  const latestNewsDate = useMemo(() => {
    const latestTimestamp = Math.max(...newsItems.map((item) => item.timestamp || 0));
    return Number.isFinite(latestTimestamp) && latestTimestamp > 0 ? dayjs(latestTimestamp) : null;
  }, [newsItems]);
  const weekNewsItems = useMemo(() => {
    if (!latestNewsDate) return newsItems;
    const weekStart = latestNewsDate.subtract(6, "day").startOf("day").valueOf();
    const weekEnd = latestNewsDate.endOf("day").valueOf();
    return newsItems.filter((item) => item.timestamp >= weekStart && item.timestamp <= weekEnd);
  }, [latestNewsDate, newsItems]);
  const visibleNewsItems = selectedNewsDate
    ? newsItems.filter((item) => item.dateKey === selectedNewsDate.format("YYYY-MM-DD"))
    : weekNewsItems;
  const channelVideoItems = useMemo(
    () => (itemsBySection.channels || []).filter((item) => item.videoUrl),
    [itemsBySection],
  );
  const videoEmbedUrl = getRutubeEmbedUrl(videoItem?.videoUrl);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <TopImage image={heroImage} title="Новости компании" paddingTop={170} paddingBottom={92} />

      <div className={styles.press}>
        <div className="container">
          <div className={styles.pressGrid}>
            <div>
              {/* <h2 className={styles.pressTitle}>Пресс-центр АО «Мособлэнерго»</h2> */}
              <h2 className={styles.socialTitle}>Пресс-центр АО «Мособлэнерго»</h2>
              <p className={styles.pressText}>
                АО «Мособлэнерго» открыто к сотрудничеству со СМИ: мы предоставим журналистам информационные
                материалы о деятельности компании, а также поможем организовать интервью или получить комментарии от
                руководителей и ведущих специалистов.
              </p>
            </div>
            <div className={styles.pressContacts}>
              <p className={styles.pressPhone}>
                Почтовый адрес: 143421, Московская область, г.о. Красногорск, тер. Автодорога Балтия, км 26-й, д. 5 стр. 5/3, помещ. 2, ком. 1
              </p>
              <p className={styles.pressPhone}>Наш телефон: +7 (495) 780-39-62, факс: +7 (495) 780-39-60</p>
              <p className={styles.pressPhone}>Наша почта: smi@mosoblenergo.ru</p>
              <p className={styles.pressPhone}>
                Обращаем Ваше внимание, что контакты Пресс-центра предназначены только для представителей СМИ. По всем
                остальным вопросам обращайтесь на «Горячую линию» АО «Мособлэнерго»:
              </p>
              <p>
                <a href="tel:+74959950099" className={styles.pressPhone}>
                  +7 (495) 99-500-99
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        {loading ? (
          <Spin size="large" className={styles.loader} />
        ) : (
          <>
            <NewsRail
              title="Новости"
              items={visibleNewsItems}
              variant="poster"
              minItemsForArrows={5}
              action={
                <ConfigProvider locale={locale}>
                  <DatePicker
                    className={styles.newsCalendar}
                    value={selectedNewsDate}
                    onChange={setSelectedNewsDate}
                    disabledDate={(current) => current && !newsDateKeys.has(current.format("YYYY-MM-DD"))}
                    cellRender={(current, info) => {
                      if (info.type !== "date") return info.originNode;
                      const hasNews = newsDateKeys.has(current.format("YYYY-MM-DD"));
                      return (
                        <span className={hasNews ? styles.newsCalendarDateActive : ""}>
                          {current.date()}
                        </span>
                      );
                    }}
                    format="DD.MM.YYYY"
                    placeholder="Дата публикации"
                  />
                </ConfigProvider>
              }
            />
            {selectedNewsDate && !visibleNewsItems.length && (
              <p className={styles.newsEmpty}>На выбранную дату новостей нет.</p>
            )}
            <NewsRail
              title="Мособлэнерго ТВ"
              items={itemsBySection.tv || []}
              variant="media"
              minItemsForArrows={3}
              onVideoClick={setVideoItem}
            />
            <NewsRail
              title="Видеосюжеты телеканалов"
              items={channelVideoItems}
              variant="media"
              minItemsForArrows={3}
              onVideoClick={setVideoItem}
            />
            <NewsRail title="Фотобанк" items={photoItems} variant="photo" onPhotoClick={setPhotoIndex} />
            <p className={styles.photoNotice}>
              Использование фотографий допускается с указанием имени правообладателя – АО «Мособлэнерго».
            </p>
            <SocialBlock />
          </>
        )}
      </div>

      <Modal
        open={Boolean(videoItem)}
        onCancel={() => setVideoItem(null)}
        footer={null}
        closeIcon={null}
        width="min(1100px, 92vw)"
        centered
        destroyOnClose
      >
        <div className={styles.modalHeader}>
          <span className={styles.modalTitle}>{videoItem?.title || videoItem?.shortDescription || "Видео"}</span>
          <button type="button" className={styles.modalClose} onClick={() => setVideoItem(null)}>
            Закрыть
          </button>
        </div>
        {videoEmbedUrl ? (
          <iframe
            className={styles.modalVideo}
            src={videoEmbedUrl}
            title={videoItem?.title || "Видео"}
            allow="clipboard-write; autoplay"
            allowFullScreen
          />
        ) : (
          videoItem?.videoUrl && (
            <a href={videoItem.videoUrl} className={styles.videoLink} target="_blank" rel="noreferrer">
              Открыть видео
            </a>
          )
        )}
      </Modal>

      <Lightbox
        open={photoIndex >= 0}
        index={photoIndex}
        close={() => setPhotoIndex(-1)}
        slides={lightboxSlides}
        plugins={[Fullscreen, Download, Zoom, Slideshow, Counter]}
      />
    </motion.div>
  );
}
