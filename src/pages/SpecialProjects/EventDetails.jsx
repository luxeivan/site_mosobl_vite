import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Spin, Typography, Flex } from "antd";
import axios from "axios";
import TopImage from "../../components/TopImage";
import MarkDownText from "../../components/MarkDownText/MarkDownText";
import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";
import Lightbox from "yet-another-react-lightbox";
import {
  Fullscreen,
  Download,
  Zoom,
  Slideshow,
  Counter,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import styles from "./EventDetails.module.css";

import { addressServer } from "../../config";

const { Paragraph } = Typography;


export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(-1);

  const layout = "columns";
  const spacing = 20;
  const padding = 10;
  const width = 100;

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          `${addressServer}/api/speczialnye-proekties/${id}?populate=*`
        );
        const eventItem = response.data.data;

        const eventData = {
          id: eventItem.id,
          title: eventItem.title,
          date: eventItem.dateEvent
            ? new Date(eventItem.dateEvent).toLocaleDateString()
            : false,
          description: eventItem.description,
          mainPhoto: `${addressServer}${eventItem.mainPhoto.url}`,
          images: eventItem.photos?.map((photo) => ({
            src: `${addressServer}${photo.url}`,
            width: photo.width,
            height: photo.height,
          })),
        };


        setEvent(eventData);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id]);

  if (loading) {
    return <Spin size="large" style={{ display: "block", margin: "0 auto" }} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage image={event.mainPhoto} title={event.title} />
      <div className="container" style={{ padding: 20 }}>
        <Flex wrap gap={20}>
          <div className={styles.flexElem}>
            {event.date && (
              <Paragraph type="secondary">Дата события: {event.date}</Paragraph>
            )}

            <MarkDownText>{event.description}</MarkDownText>
          </div>
          <div className={styles.flexElem}>
            <ColumnsPhotoAlbum
              photos={event.images}
              columns={document.documentElement.scrollWidth > 1000 ? 3 : 2}
              onClick={({ index }) => setIndex(index)}
            />
          </div>
        </Flex>
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={event.images}
        fullscreen={true}
        plugins={[Fullscreen, Download, Zoom, Slideshow, Counter]}
      />
    </motion.div>
  );
}
