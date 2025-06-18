import React, { useState } from "react";
import {
  Modal,
  Form,
  Input,
  Button,
  message,
  Typography,
  Upload,
  Checkbox,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;

export default function ModalJob({ visible, onCancel }) {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const handleFinish = (values) => {
    console.log("Полученные данные с формы:", values);
    console.log("Файл(ы) резюме:", fileList);
    message.success("Данные успешно отправлены!");
    form.resetFields();
    setFileList([]);
    onCancel();
  };

  // Общая функция для добавления звездочки к названию поля
  const labelWithStar = (text) => (
    <span>
      {text} <span style={{ color: "red" }}>*</span>
    </span>
  );

  const beforeUpload = (file) => {
    // Отключаем автоматическую загрузку, просто сохраняем файл в state
    setFileList([file]);
    return false;
  };

  return (
    <Modal visible={visible} onCancel={onCancel} footer={null} destroyOnClose>
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item
          name="firstName"
          label={labelWithStar("Имя")}
          rules={[{ required: true, message: "Введите ваше имя" }]}
        >
          <Input placeholder="Иван" />
        </Form.Item>

        <Form.Item
          name="lastName"
          label={labelWithStar("Фамилия")}
          rules={[{ required: true, message: "Введите вашу фамилию" }]}
        >
          <Input placeholder="Иванов" />
        </Form.Item>

        <Form.Item
          name="email"
          label={labelWithStar("Email")}
          rules={[
            { required: true, message: "Введите email" },
            { type: "email", message: "Введите корректный email" },
          ]}
        >
          <Input placeholder="you@example.com" />
        </Form.Item>

        <Form.Item
          name="phone"
          label={labelWithStar("Телефон")}
          rules={[
            { required: true, message: "Введите номер телефона" },
            {
              pattern: /^\+?\d{7,14}$/,
              message: "Введите корректный номер телефона",
            },
          ]}
        >
          <Input placeholder="+7XXXXXXXXXX" />
        </Form.Item>

        <Form.Item
          name="sity"
          label={labelWithStar("Город (населенный пункт)")}
          rules={[{ required: true, message: "Введите город" }]}
        >
          <Input placeholder="Красногорск" />
        </Form.Item>

        <Form.Item
          name="activity"
          label={labelWithStar("Сфера деятельности")}
          rules={[
            { required: true, message: "Введите свою сферу деятельности" },
          ]}
        >
          <Input placeholder="Кладовщик" />
        </Form.Item>

        <Form.Item
          name="resume"
          label={labelWithStar("Резюме (прикрепить файл)")}
          rules={[{ required: true, message: "Прикрепите файл с резюме" }]}
          valuePropName="fileList"
          getValueFromEvent={() => fileList}
        >
          <Upload
            beforeUpload={beforeUpload}
            fileList={fileList}
            onRemove={() => setFileList([])}
          >
            <Button icon={<UploadOutlined />}>Выберите файл</Button>
          </Upload>
        </Form.Item>

        {/* Чекбокс согласия на обработку данных */}
        <Form.Item
          name="consent"
          valuePropName="checked"
          rules={[{ required: true, message: "Вы должны дать согласие" }]}
        >
          <Checkbox>
            Я даю свое согласие на обработку персональных данных
          </Checkbox>
        </Form.Item>

        <Form.Item style={{ textAlign: "right", marginTop: 20 }}>
          <Button onClick={onCancel} style={{ marginRight: 10 }}>
            Отмена
          </Button>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
