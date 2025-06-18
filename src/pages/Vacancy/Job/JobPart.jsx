import React from "react";
import { Typography, Flex } from "antd";
import QrCodeHH from "./QrCodeHH";
import Advantages from "./Advantages";

const { Title } = Typography;

export default function JobPart() {
  return (
    <Flex vertical align="center" justify="center">
      <Title level={1} style={{ textAlign: "center" }}>
        Работа
      </Title>
      <QrCodeHH />
      <Advantages />
    </Flex>
  );
}
