import React from "react";
import { Typography, Flex, Card, List } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import backgroundImg from "../../../img/vacancies/job/back.png";

const { Title } = Typography;

export default function Advantages() {
  const advantages = [
    "Твое здоровье — наша забота! Предлагаем добровольное медицинское страхование, включая стоматологическое обеспечение.",
    "Чтобы развиваться и расти вместе, даем возможности для повышения квалификации, прохождения переподготовки, а также для обучения по целевому договору.",
    "Участие в корпоративных спортивных мероприятиях — наше традиционное упражнение.",
    "Годовой бонус, отраслевая выплата, ежегодная выплата к отпуску и дополнительные выплаты по коллективному договору для поддержки важных моментов в жизни.",
  ];

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
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <Flex vertical align="start" style={{ gap: 12 }}>
        <Title
          level={4}
          style={{
            margin: 0,
            color: "#fff",
            textShadow: "0 1px 2px rgba(0,0,0,0.6)",
          }}
        >
          Наши преимущества
        </Title>
        <List
          dataSource={advantages}
          renderItem={(item) => (
            <List.Item
              style={{
                border: "none",
                color: "#fff",
                textShadow: "0 1px 2px rgba(0,0,0,0.6)",
              }}
            >
              <CheckCircleTwoTone
                twoToneColor="#52c41a"
                style={{ marginRight: 8 }}
              />
              {item}
            </List.Item>
          )}
        />
      </Flex>
    </Card>
  );
}

