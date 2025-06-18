import React, { useState } from "react";
import { Modal, Form, Input, Button, message, Checkbox, Select } from "antd";

const { Option } = Select;

export default function ModalPracrice({ visible, onCancel }) {
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
=
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
          name="university"
          label={labelWithStar("ВУЗ/СУЗ")}
          rules={[{ required: true, message: "Введите ВУЗ/СУЗ" }]}
        >
          <Select placeholder="ВУЗ/СУЗ">
            <Option value="ФГБОУ ВО «Национальный Исследовательский Университет «Московский энергетический институт">
              ФГБОУ ВО «Национальный Исследовательский Университет «Московский
              энергетический институт
            </Option>
            <Option value="ФГБОУ ВО «Воронежский государственный университет инженерных технологий»">
              ФГБОУ ВО «Воронежский государственный университет инженерных
              технологий»
            </Option>
            <Option value="ГБПОУ г. Москвы «Колледж современных технологий имени Героя Советского Союза М.Ф. Панова»">
              ГБПОУ г. Москвы «Колледж современных технологий имени Героя
              Советского Союза М.Ф. Панова»
            </Option>
            <Option value="ГБПОУ МО «Егорьевский техникум»">
              ГБПОУ МО «Егорьевский техникум»
            </Option>
            <Option value="ГБПОУ МО «Воскресенский колледж»">
              ГБПОУ МО «Воскресенский колледж»
            </Option>
            <Option value="ГБПОУ МО «Ступинский техникум им. А.Т. Туманова»">
              ГБПОУ МО «Ступинский техникум им. А.Т. Туманова»
            </Option>
            <Option value="ГБПОУ МО «Колледж «Подмосковье»">
              ГБПОУ МО «Колледж «Подмосковье»
            </Option>
            <Option value="ГБПОУ МО «Дмитровский техникум»">
              ГБПОУ МО «Дмитровский техникум»
            </Option>
            <Option value="ГБПОУ МО «Орехово-Зуевский железнодорожный техникум имени В.И. Бондаренко».">
              ГБПОУ МО «Орехово-Зуевский железнодорожный техникум имени В.И.
              Бондаренко».
            </Option>
            <Option value="ГБПОУ МО «Павлово-Посадский техникум»">
              ГБПОУ МО «Павлово-Посадский техникум»
            </Option>
            <Option value="ГАПОУ МО «МЦК— Техникум имени С.П. Королева»">
              ГАПОУ МО «МЦК— Техникум имени С.П. Королева»
            </Option>
            <Option value="ГБПОУ МО «Орехово-Зуевский техникум»">
              ГБПОУ МО «Орехово-Зуевский техникум»
            </Option>
            <Option value="ГБПОУ МО «Щелковский колледж»">
              ГБПОУ МО «Щелковский колледж»
            </Option>
            <Option value="ГБПОУ МО «Шатурский энергетический техникум»">
              ГБПОУ МО «Шатурский энергетический техникум»
            </Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="universitydateend"
          label={labelWithStar("Год выпуска")}
          rules={[{ required: true, message: "Введите год выпуска" }]}
        >
          <Input placeholder="2021" />
        </Form.Item>

        <Form.Item
          name="directionstudy"
          label={labelWithStar("Направление обучения")}
          rules={[
            { required: true, message: "Введите направление деятельности" },
          ]}
        >
          <Input placeholder="Энергетика" />
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
