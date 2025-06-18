import React from "react";
import { Typography, Steps, Card, List, Space } from "antd";
import { CheckCircleTwoTone, BookOutlined, SolutionOutlined, SmileOutlined, DollarCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export default function GrowthChart() {

  const spoSteps = [
    {
      title: "Заключение договора",
      description: "• после 9 или 11 класса\n• стипендия",
      icon: <BookOutlined style={{ color: "#1890ff" }} />,
    },
    {
      title: "Практика",
      description: `• по достижению 18 лет можно трудоустроиться (срочный трудовой договор)\n• стипендия`,
      icon: <SmileOutlined style={{ color: "#1890ff" }} />,
    },
  ];

  const higherEdSteps = [
    {
      title: "Заключение договора",
      description: "• после 11 класса или СПО\n• стипендия",
      icon: <BookOutlined style={{ color: "#1890ff" }} />,
    },
    {
      title: "Практика",
      description: "• зарплата",
      icon: <DollarCircleOutlined style={{ color: "#faad14" }} />,
    },
  ];


  const employmentList = [
    "Работа рядом с домом;",
    "Гарантии и компенсации",
    "Обеспечение спецодеждой (лето/зима).",
    "ДМС в лучших клиниках, включая стоматологическое обеспечение.",
    "Возможность совмещения работы и учёбы.",
  ];

  return (
    <div style={{ marginTop: 20 }}>
      <Title level={4} style={{ textAlign: "center", marginBottom: 20 }}>
        Среднее профессиональное образование
      </Title>
      <Steps direction="horizontal" current={spoSteps.length} style={{ marginBottom: 40 }}>
        {spoSteps.map((item, index) => (
          <Steps.Step
            key={index}
            title={item.title}
            icon={item.icon}
            description={
              <Text style={{ whiteSpace: "pre-line" }}>{item.description}</Text>
            }
          />
        ))}
      </Steps>

      <Title level={4} style={{ textAlign: "center", marginBottom: 20 }}>
        Высшее образование
      </Title>
      <Steps direction="horizontal" current={higherEdSteps.length} style={{ marginBottom: 40 }}>
        {higherEdSteps.map((item, index) => (
          <Steps.Step
            key={index}
            title={item.title}
            icon={item.icon}
            description={
              <Text style={{ whiteSpace: "pre-line" }}>{item.description}</Text>
            }
          />
        ))}
      </Steps>

      <Title level={4} style={{ textAlign: "center", marginBottom: 20 }}>
        Трудоустройство
      </Title>
      
      <Card
        style={{
          maxWidth: 600,
          margin: "0 auto",
          borderRadius: 10,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <List
          dataSource={employmentList}
          renderItem={(item) => (
            <List.Item style={{ border: "none" }}>
              <Space align="start">
                <CheckCircleTwoTone twoToneColor="#52c41a" style={{ marginRight: 4 }} />
                <Text>{item}</Text>
              </Space>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
}