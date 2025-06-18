import React, { useState } from "react";
import { Card, Typography, Button, Modal, Space } from "antd";
import {
  CheckSquareTwoTone,
  SolutionOutlined,
  ReadOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import ModalJob from "./Modal/ModalJob"; // Импортируем созданный компонент
import ModalPracrice from "./Modal/ModalPracrice";
import ModalStudy from "./Modal/ModalStudy";

const { Title, Text } = Typography;

export default function DownBlock() {
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (type) => {
    setOpenModal(type);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  return (
    <Card
      style={{
        margin: 10,
        padding: 20,
        borderRadius: 10,
        border: "2px solid #d9d9d9",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Title
        level={1}
        style={{ margin: 0, textAlign: "center", width: "100%" }}
      >
        Выберите направление:
      </Title>

      <Space
        style={{
          marginTop: 20,
          justifyContent: "center",
          width: "100%",
          gap: "24px",
        }}
        wrap
      >
        <Button
          type="primary"
          icon={<SolutionOutlined style={{ fontSize: 18 }} />}
          onClick={() => handleOpenModal("job")}
          className="hh-button"
          style={{ padding: "10px 24px" }}
        >
          Ищу работу
        </Button>
        <Button
          type="primary"
          icon={<UserSwitchOutlined style={{ fontSize: 18 }} />}
          onClick={() => handleOpenModal("practice")}
          className="hh-button"
          style={{ padding: "10px 24px" }}
        >
          Ищу практику
        </Button>
        <Button
          type="primary"
          icon={<ReadOutlined style={{ fontSize: 18 }} />}
          onClick={() => handleOpenModal("education")}
          className="hh-button"
          style={{ padding: "10px 24px" }}
        >
          Ищу обучение
        </Button>
      </Space>

      {/* Модалки */}
      <ModalJob visible={openModal === "job"} onCancel={handleCloseModal} />

      <ModalPracrice
        visible={openModal === "practice"}
        onCancel={handleCloseModal}
      />

      <ModalStudy
        visible={openModal === "education"}
        onCancel={handleCloseModal}
      />

      {/* <Modal
        title="Ищу обучение"
        visible={openModal === "education"}
        onCancel={handleCloseModal}
        footer={null}
      >
        <Text>Форма для тех, кто ищет обучение...</Text>
      </Modal> */}
    </Card>
  );
}

// import React, { useState } from "react";
// import { Card, Typography, Button, Modal, Space } from "antd";
// import {
//   CheckSquareTwoTone,
//   SolutionOutlined,
//   ReadOutlined,
//   UserSwitchOutlined,
// } from "@ant-design/icons";

// const { Title, Text } = Typography;

// export default function DownBlock() {
//   const [openModal, setOpenModal] = useState(null);

//   const handleOpenModal = (type) => {
//     setOpenModal(type);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(null);
//   };

//   return (
//     <Card
//       style={{
//         margin: 10,
//         padding: 20,
//         borderRadius: 10,
//         border: "2px solid #d9d9d9",
//         boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
//         position: "relative",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <Title
//         level={3}
//         style={{ margin: 0, textAlign: "center", width: "100%" }}
//       >
//         Выберите направление:
//       </Title>

//       <Space
//         style={{
//           marginTop: 20,
//           justifyContent: "center",
//           width: "100%",
//           gap: "24px",
//         }}
//         wrap
//       >
//         <Button
//           type="primary"
//           icon={<SolutionOutlined style={{ fontSize: 18 }} />}
//           onClick={() => handleOpenModal("job")}
//           className="hh-button"
//           style={{ padding: "10px 24px" }}
//         >
//           Ищу работу
//         </Button>
//         <Button
//           type="primary"
//           icon={<UserSwitchOutlined style={{ fontSize: 18 }} />}
//           onClick={() => handleOpenModal("practice")}
//           className="hh-button"
//           style={{ padding: "10px 24px" }}
//         >
//           Ищу практику
//         </Button>
//         <Button
//           type="primary"
//           icon={<ReadOutlined style={{ fontSize: 18 }} />}
//           onClick={() => handleOpenModal("education")}
//           className="hh-button"
//           style={{ padding: "10px 24px" }}
//         >
//           Ищу обучение
//         </Button>
//       </Space>

//       {/* Модалки */}
//       <Modal
//         title="Ищу работу"
//         visible={openModal === "job"}
//         onCancel={handleCloseModal}
//         footer={null}
//       >
//         <Text>Форма для тех, кто ищет работу...</Text>
//       </Modal>

//       <Modal
//         title="Ищу практику"
//         visible={openModal === "practice"}
//         onCancel={handleCloseModal}
//         footer={null}
//       >
//         <Text>Форма для тех, кто ищет практику...</Text>
//       </Modal>

//       <Modal
//         title="Ищу обучение"
//         visible={openModal === "education"}
//         onCancel={handleCloseModal}
//         footer={null}
//       >
//         <Text>Форма для тех, кто ищет обучение...</Text>
//       </Modal>
//     </Card>
//   );
// }

// import React, { useState } from "react";
// import { Card, Typography, Button, Modal, Space } from "antd";
// import { CheckSquareTwoTone } from "@ant-design/icons";

// const { Title, Text } = Typography;

// export default function DownBlock() {
//   const [openModal, setOpenModal] = useState(null);

//   const handleOpenModal = (type) => {
//     setOpenModal(type);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(null);
//   };

//   return (
//     <Card
//       style={{
//         margin: 10,
//         padding: 20,
//         borderRadius: 10,
//         border: "2px solid #d9d9d9",
//         boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
//         position: "relative",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <Title
//         level={3}
//         style={{ margin: 0, textAlign: "center", width: "100%" }}
//       >
//         Выберите направление:
//       </Title>

//       <Space
//         style={{ marginTop: 20, justifyContent: "center", width: "100%" }}
//         wrap
//       >
//         <Button
//           type="primary"
//           icon={<CheckSquareTwoTone twoToneColor="#52c41a" />}
//           onClick={() => handleOpenModal("job")}
//           className="hh-button"
//         >
//           Ищу работу
//         </Button>
//         <Button
//           type="primary"
//           icon={<CheckSquareTwoTone twoToneColor="#52c41a" />}
//           onClick={() => handleOpenModal("practice")}
//           className="hh-button"
//         >
//           Ищу практику
//         </Button>
//         <Button
//           type="primary"
//           icon={<CheckSquareTwoTone twoToneColor="#52c41a" />}
//           onClick={() => handleOpenModal("education")}
//           className="hh-button"
//         >
//           Ищу обучение
//         </Button>
//       </Space>

//       {/* Модалки */}
//       <Modal
//         title="Ищу работу"
//         visible={openModal === "job"}
//         onCancel={handleCloseModal}
//         footer={null}
//       >
//         {/* Здесь будет форма или контент для "Ищу работу" */}
//         <Text>Форма для тех, кто ищет работу...</Text>
//       </Modal>

//       <Modal
//         title="Ищу практику"
//         visible={openModal === "practice"}
//         onCancel={handleCloseModal}
//         footer={null}
//       >
//         {/* Здесь будет форма или контент для "Ищу практику" */}
//         <Text>Форма для тех, кто ищет практику...</Text>
//       </Modal>

//       <Modal
//         title="Ищу обучение"
//         visible={openModal === "education"}
//         onCancel={handleCloseModal}
//         footer={null}
//       >
//         {/* Здесь будет форма или контент для "Ищу обучение" */}
//         <Text>Форма для тех, кто ищет обучение...</Text>
//       </Modal>
//     </Card>
//   );
// }

// import React from "react";
// import { Card, Typography } from "antd";

// const { Title, Text } = Typography;

// export default function DownBlock() {
//   return (
//     <Card
//       style={{
//         margin: 10,
//         padding: 20,
//         borderRadius: 10,
//         border: "2px solid #d9d9d9",
//         boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
//         position: "relative",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <Title
//         level={3}
//         style={{ margin: 0, textAlign: "center", width: "100%" }}
//       >
//         Все вакансии
//       </Title>
//     </Card>
//   );
// }
