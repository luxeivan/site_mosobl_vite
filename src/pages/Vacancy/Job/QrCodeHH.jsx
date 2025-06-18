import React from "react";
import { Typography, Button, Flex, Image, Card } from "antd";
import qr_rabota_ru from "../../../img/QR_HH.png";

const { Title, Text } = Typography;

export default function QrCodeHH() {
  return (
    <Card
      style={{
        margin: 10,
        marginRight: "5%",
        padding: 20,
        borderRadius: 10,
        border: "2px solid #d9d9d9",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <Title level={2} style={{ textAlign: "center", width: "100%" }}>
        Все вакансии
      </Title>
      <Flex
        justify="center"
        align="center"
        wrap
        style={{ marginTop: 20, gap: 16 }}
      >
        <Flex vertical style={{ gap: 12, minWidth: 200 }}>
          <Title level={4} style={{ textAlign: "center", marginBottom: 20 }}>
            Сканируйте QR или нажмите кнопку:
          </Title>
          <Button
            type="primary"
            // href="https://hh.ru/employer/221874"
            href="https://hh.ru/employer/221874/vacancies?page=1"
            className="hh-button"
          >
            Перейти на hh.ru
          </Button>
        </Flex>
        <Image src={qr_rabota_ru} alt="QR Code hh.ru" width={250} />
      </Flex>
    </Card>
  );
}
