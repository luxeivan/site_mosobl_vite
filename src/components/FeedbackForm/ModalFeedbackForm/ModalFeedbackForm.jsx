import React, { useState } from "react";
import style from "./ModalFeedbackForm.module.css";
import ModalWindow from "../ModalWindowEnd/ModalWindowEnd";

export default function Modal({ onClose }) {
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [previewContent, setPreviewContent] = useState("");
  const [selectedIssue, setSelectedIssue] = useState("");
  const [selectedSubIssue, setSelectedSubIssue] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [incidentDate, setIncidentDate] = useState("");
  const [deviceLocationAddress, setDeviceLocationAddress] = useState("");
  const [inquiryReason, setInquiryReason] = useState("");
  const [claimDateRange, setClaimDateRange] = useState("");
  const [chargingStationAddress, setChargingStationAddress] = useState("");
  const [chargingStationId, setChargingStationId] = useState("");
  const [objectLocationAddress, setObjectLocationAddress] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [photoMaterials, setPhotoMaterials] = useState("");
  const [lineCharacteristics, setLineCharacteristics] = useState("");
  const [objectName, setObjectName] = useState("");
  const [technicalSpecs, setTechnicalSpecs] = useState("");
  const [applicationOrContractNumber, setApplicationOrContractNumber] =
    useState("");

  const issueOptions = {
    powerOutage: "Отключение электроэнергии",
    powerQuality: "Качество электроснабжения",
    carElectricChargingStations: "Автомобильные электрозарядные станции",
    electricitymeteringdevices: `Приборы учета электроэнергии (в т. ч. в
          садоводческих/огороднических некоммерческих товариществах)`,
    malfunctionofpowerlines: "Неисправности линий электропередач",
    transferoftheelectricgrid: `Передача электросетевого хозяйства на баланс электросетевой организации`,
    connectionelectricnetworks:
      "Технологическое присоединение к электрическим сетям",
    additionalservices: "Дополнительные услуги",
    other: "Другое",
  };

  const handleIssueChange = (event) => {
    setSelectedIssue(event.target.value);
    setSelectedSubIssue("");
  };

  const handleSubIssueChange = (event) => {
    setSelectedSubIssue(event.target.value);
  };

  const handleCloseOnClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const generateEmailBody = (issue, subIssue, details) => {
    const commonDetails =
      `ФИО заявителя:\n${details.fullName}\n\n` +
      `адрес электронной почты для обратной связи:\n${details.email}\n\n` +
      `телефон для обратной связи:\n${details.phone}\n\n`;

    switch (issue) {
      case "powerOutage":
        return (
          commonDetails +
          `адрес места инцидента:\n${details.address}\n\n` +
          `дата и время инцидента:\n${details.incidentDate}\n`
        );
      case "powerQuality":
        return (
          commonDetails +
          `адрес нахождения энергопринимающих устройств:\n${details.deviceLocationAddress}\n\n` +
          `причина обращения:\n${details.inquiryReason}\n\n` +
          `дата/период времени претензии:\n${details.claimDateRange}\n`
        );
      case "carElectricChargingStations":
        let chargingStationDetails =
          commonDetails +
          `Выбранная подтема: ${subIssueText(subIssue)}\n\n` + // Добавляем эту строку
          `адрес нахождения ЭЗС / адрес предполагаемой установки ЭЗС:\n${details.chargingStationAddress}\n\n`;
        if (subIssue === "malfunction") {
          chargingStationDetails += `номер ЭЗС:\n${details.chargingStationId}\n\n`;
        }
        return chargingStationDetails;

      case "electricitymeteringdevices":
        return (
          commonDetails +
          `адрес нахождения объекта:\n${details.objectLocationAddress}\n\n` +
          `номер лицевого счета (при наличии):\n${details.accountNumber}\n`
        );
      case "malfunctionofpowerlines":
        let malfunctionDetails =
          commonDetails +
          `Выбранная подтема: ${subIssueText(subIssue)}\n\n` +
          `адрес места инцидента/ адрес нахождения объекта (г.о., населенный пункт, улица, номер дома):\n${details.address}\n\n` +
          `дата и время инцидента:\n${details.incidentDate}\n\n` +
          `причина обращения:\n${details.inquiryReason}\n\n` +
          // `фотоматериалы:\n${details.photoMaterials}\n\n` +
          `характеристика линии (магистральная линия/вводной провод в дом):\n${details.lineCharacteristics}\n\n`;
        return malfunctionDetails;
      case "transferoftheelectricgrid":
        return (
          commonDetails +
          `наименование объекта (ТП, линии электропередачи и ид.):\n${details.objectName}\n\n` +
          `адрес нахождения объекта:\n${details.address}\n\n` +
          `технические характеристики (класс напряжения, протяженность ВЛ/КЛ, трансформаторная мощность):\n${details.technicalSpecs}\n`
        );
      case "connectionelectricnetworks":
        return (
          commonDetails +
          `номер заявки/договора (при наличии):\n${details.applicationOrContractNumber}\n`
        );
      case "additionalservices":
        return commonDetails + `причина обращения:\n${details.inquiryReason}\n`;
      default:
        return commonDetails;
    }
  };

  const subIssueText = (subIssue) => {
    switch (subIssue) {
      case "zoneMalfunction":
        return "Охранные зоны";
      case "pruning":
        return "Опиловка";
      case "wireBreak":
        return "Обрыв проводов";
      case "pillarCondition":
        return "Состояние опор";
      case "malfunction":
        return "Неисправность ЭЗС";
      case "installation":
        return "Установка ЭЗС";
      default:
        return "Не указано";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailBodyDetails = {
      fullName,
      email,
      phone,
      address,
      incidentDate,
      deviceLocationAddress,
      inquiryReason,
      claimDateRange,
      chargingStationAddress,
      chargingStationId,
      objectLocationAddress,
      accountNumber,
      lineCharacteristics,
      photoMaterials,
      objectName,
      technicalSpecs,
      applicationOrContractNumber,
    };

    const body = generateEmailBody(
      selectedIssue,
      selectedSubIssue,
      emailBodyDetails
    );

    setPreviewContent(body);

    setIsPreviewModalOpen(true);

    const subject = encodeURIComponent(
      issueOptions[selectedIssue] || "Обращение в службу поддержки"
    );
    const encodedBody = encodeURIComponent(body);
    window.location.href = `mailto:mail@mosoblenergo.ru?subject=${subject}&body=${encodedBody}`;
  };

  return (
    <>
      <dialog
        className={style.modal__feedback__background}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={style.modal__feedback__content}
          onClick={(e) => e.stopPropagation()}
        >
          
          <form onSubmit={handleSubmit}>
            <select
              className={style.feedback__select}
              onChange={handleIssueChange}
              defaultValue=""
              required
            >
              <option value="" disabled>
                Выберите вопрос
              </option>
              <option value="powerOutage">Отключение электроэнергии</option>
              <option value="powerQuality">Качество электроснабжения</option>
              <option value="carElectricChargingStations">
                Автомобильные электрозарядные станции
              </option>
              <option value="electricitymeteringdevices">
                Приборы учета электроэнергии (в т. ч. в
                садоводческих/огороднических некоммерческих товариществах)
              </option>
              <option value="malfunctionofpowerlines">
                Неисправности линий электропередач
              </option>
              <option value="transferoftheelectricgrid">
                Передача электросетевого хозяйства на баланс электросетевой
                организации
              </option>
              <option value="connectionelectricnetworks">
                Технологическое присоединение к электрическим сетям
              </option>
              <option value="additionalservices">Дополнительные услуги</option>
              <option value="other">Прочее</option>
            </select>

            {selectedIssue === "carElectricChargingStations" && (
              <select
                className={style.feedback__select}
                onChange={handleSubIssueChange}
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Выберите подтему
                </option>
                <option value="malfunction">Неисправность ЭЗС</option>
                <option value="installation">Установка ЭЗС</option>
              </select>
            )}

            {selectedIssue === "malfunctionofpowerlines" && (
              <select
                className={style.feedback__select}
                onChange={handleSubIssueChange}
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Выберите подтему
                </option>
                <option value="zoneMalfunction">Охранные зоны</option>
                <option value="pruning">Опиловка</option>
                <option value="wireBreak">Обрыв проводов</option>
                <option value="pillarCondition">Состояние опор</option>
              </select>
            )}

            {selectedIssue === "powerOutage" && (
              <>
                <input
                  className={style.input__feedback}
                  type="text"
                  name="fullName"
                  placeholder="ФИО заявителя"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                <input
                  className={style.input__feedback}
                  type="email"
                  name="email"
                  placeholder="адрес электронной почты для обратной связи"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className={style.input__feedback}
                  type="tel"
                  name="phone"
                  placeholder="телефон для обратной связи"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <input
                  className={style.input__feedback}
                  type="text"
                  name="address"
                  placeholder="адрес места инцидента"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
                <input
                  className={style.input__feedback}
                  type="datetime-local"
                  name="incidentDate"
                  placeholder="дата и время инцидента"
                  value={incidentDate}
                  onChange={(e) => setIncidentDate(e.target.value)}
                  required
                />
              </>
            )}

            {selectedIssue === "powerQuality" && (
              <>
                <input
                  className={style.input__feedback}
                  type="text"
                  name="fullName"
                  placeholder="ФИО заявителя"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                <input
                  className={style.input__feedback}
                  type="email"
                  name="email"
                  placeholder="адрес электронной почты для обратной связи"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className={style.input__feedback}
                  type="tel"
                  name="phone"
                  placeholder="телефон для обратной связи"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <input
                  className={style.input__feedback}
                  type="text"
                  name="deviceLocationAddress"
                  placeholder="адрес нахождения энергопринимающих устройств"
                  value={deviceLocationAddress}
                  onChange={(e) => setDeviceLocationAddress(e.target.value)}
                  required
                />
                <textarea
                  className={style.textarea__feedback}
                  name="inquiryReason"
                  placeholder="причина обращения"
                  value={inquiryReason}
                  onChange={(e) => setInquiryReason(e.target.value)}
                  required
                />
                <input
                  className={style.input__feedback}
                  type="text"
                  name="claimDateRange"
                  placeholder="дата/период времени претензии"
                  value={claimDateRange}
                  onChange={(e) => setClaimDateRange(e.target.value)}
                  required
                />
              </>
            )}

            {selectedIssue === "carElectricChargingStations" &&
              selectedSubIssue && (
                <>
                  <input
                    className={style.input__feedback}
                    type="text"
                    name="fullName"
                    placeholder="ФИО заявителя"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                  <input
                    className={style.input__feedback}
                    type="email"
                    name="email"
                    placeholder="адрес электронной почты для обратной связи"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    className={style.input__feedback}
                    type="tel"
                    name="phone"
                    placeholder="телефон для обратной связи"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  <input
                    className={style.input__feedback}
                    type="text"
                    name="chargingStationAddress"
                    placeholder="адрес нахождения ЭЗС / адрес предполагаемой установки ЭЗС"
                    value={chargingStationAddress}
                    onChange={(e) => setChargingStationAddress(e.target.value)}
                    required
                  />
                  {selectedSubIssue === "malfunction" && (
                    <input
                      className={style.input__feedback}
                      type="text"
                      name="chargingStationId"
                      placeholder="номер ЭЗС"
                      value={chargingStationId}
                      onChange={(e) => setChargingStationId(e.target.value)}
                      required
                    />
                  )}
                </>
              )}

            {selectedIssue === "electricitymeteringdevices" && (
              <>
                <input
                  className={style.input__feedback}
                  type="text"
                  name="fullName"
                  placeholder="ФИО заявителя"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                <input
                  className={style.input__feedback}
                  type="email"
                  name="email"
                  placeholder="адрес электронной почты для обратной связи"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className={style.input__feedback}
                  type="tel"
                  name="phone"
                  placeholder="телефон для обратной связи"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <input
                  className={style.input__feedback}
                  type="text"
                  name="objectLocationAddress"
                  placeholder="адрес нахождения объекта"
                  value={objectLocationAddress}
                  onChange={(e) => setObjectLocationAddress(e.target.value)}
                  required
                />
                <input
                  className={style.input__feedback}
                  type="text"
                  name="accountNumber"
                  placeholder="номер лицевого счета (при наличии)"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  required
                />
              </>
            )}

            {selectedIssue === "malfunctionofpowerlines" &&
              selectedSubIssue && (
                <>
                  <input
                    className={style.input__feedback}
                    type="text"
                    name="fullName"
                    placeholder="ФИО заявителя"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                  <input
                    className={style.input__feedback}
                    type="email"
                    name="email"
                    placeholder="адрес электронной почты для обратной связи"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    className={style.input__feedback}
                    type="tel"
                    name="phone"
                    placeholder="телефон для обратной связи"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  <input
                    className={style.input__feedback}
                    type="text"
                    name="address"
                    placeholder="адрес места инцидента/ адрес нахождения объекта (г.о., населенный пункт, улица, номер дома)"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                  <input
                    className={style.input__feedback}
                    type="datetime-local"
                    name="incidentDate"
                    placeholder="дата и время инцидента"
                    value={incidentDate}
                    onChange={(e) => setIncidentDate(e.target.value)}
                    required
                  />
                  <input
                    className={style.input__feedback}
                    type="text"
                    name="inquiryReason"
                    placeholder="причина обращения"
                    value={inquiryReason}
                    onChange={(e) => setInquiryReason(e.target.value)}
                    required
                  />
                  {/* <input
                    className={style.input__feedback}
                    type="text"
                    name="photoMaterials"
                    placeholder="фотоматериалы"
                    value={photoMaterials}
                    onChange={(e) => setPhotoMaterials(e.target.value)}
                  /> */}
                  <input
                    className={style.input__feedback}
                    type="text"
                    name="lineCharacteristics"
                    placeholder="характеристика линии (магистральная линия/вводной провод в дом)"
                    value={lineCharacteristics}
                    onChange={(e) => setLineCharacteristics(e.target.value)}
                    required
                  />
                  <p className={style.photoReminder}>
                    Если у Вас есть фото неисправностей линий электропередач,
                    пожалуйста, приложите их при отправке письма.
                  </p>
                </>
              )}

            {selectedIssue === "transferoftheelectricgrid" && (
              <>
                <input
                  className={style.input__feedback}
                  type="text"
                  name="fullName"
                  placeholder="ФИО заявителя"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                <input
                  className={style.input__feedback}
                  type="email"
                  name="email"
                  placeholder="адрес электронной почты для обратной связи"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className={style.input__feedback}
                  type="tel"
                  name="phone"
                  placeholder="телефон для обратной связи"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <input
                  className={style.input__feedback}
                  type="text"
                  name="objectName"
                  placeholder="наименование объекта (ТП, линии электропередачи и ид.)"
                  value={objectName}
                  onChange={(e) => setObjectName(e.target.value)}
                  required
                />
                <input
                  className={style.input__feedback}
                  type="text"
                  placeholder="адрес нахождения объекта"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
                <input
                  className={style.input__feedback}
                  type="text"
                  name="technicalSpecs"
                  placeholder="технические характеристики (класс напряжения, протяженность ВЛ/КЛ, трансформаторная мощность)"
                  value={technicalSpecs}
                  onChange={(e) => setTechnicalSpecs(e.target.value)}
                  required
                />
              </>
            )}

            {selectedIssue === "connectionelectricnetworks" && (
              <>
                <input
                  className={style.input__feedback}
                  type="text"
                  name="fullName"
                  placeholder="ФИО заявителя"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                <input
                  className={style.input__feedback}
                  type="email"
                  name="email"
                  placeholder="адрес электронной почты для обратной связи"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className={style.input__feedback}
                  type="tel"
                  name="phone"
                  placeholder="телефон для обратной связи"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <input
                  className={style.input__feedback}
                  type="text"
                  name="applicationOrContractNumber"
                  placeholder="номер заявки/договора (при наличии)"
                  value={applicationOrContractNumber}
                  onChange={(e) =>
                    setApplicationOrContractNumber(e.target.value)
                  }
                  required
                />
              </>
            )}

            {selectedIssue === "additionalservices" && (
              <>
                <input
                  className={style.input__feedback}
                  type="text"
                  name="fullName"
                  placeholder="ФИО заявителя"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                <input
                  className={style.input__feedback}
                  type="email"
                  name="email"
                  placeholder="адрес электронной почты для обратной связи"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className={style.input__feedback}
                  type="tel"
                  name="phone"
                  placeholder="телефон для обратной связи"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <input
                  className={style.input__feedback}
                  type="text"
                  name="inquiryReason"
                  placeholder="причина обращения"
                  value={inquiryReason}
                  onChange={(e) => setInquiryReason(e.target.value)}
                  required
                />
                <p className={style.dopinformation}>
                  С полным списком и условиями оказания дополнительных услуг, а
                  также с формами заявок и перечнем обязательных документов для
                  оказания услуг Вы можете ознакомиться в разделе «Потребителям»
                  по ссылке:
                  <a
                    className={style.a__feedback}
                    href=" https://mosoblenergo.ru/additiona/Services"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://mosoblenergo.ru/additiona/Services
                  </a>
                  . В случае заинтересованности прикрепите заполненную заявку на
                  дополнительную услугу к письму. Если у Вас остались вопросы
                  свяжитесь с нами по тел.: 8 (495) 780-39-62 доб. 3327, доб.
                  1096, или по e-mail:
                  <a
                    className={style.a__feedback}
                    href="mailto:uslugi@mosoblenergo.ru"
                  >
                    uslugi@mosoblenergo.ru
                  </a>
                  .
                </p>
              </>
            )}

            {selectedIssue === "other" && (
              <>
                <input
                  className={style.input__feedback}
                  type="text"
                  name="fullName"
                  placeholder="ФИО заявителя"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                <input
                  className={style.input__feedback}
                  type="email"
                  name="email"
                  placeholder="адрес электронной почты для обратной связи"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className={style.input__feedback}
                  type="tel"
                  name="phone"
                  placeholder="телефон для обратной связи"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </>
            )}

            <label className={style.checkboxContainer__feedback}>
              <input
                className={style.input__feedback}
                type="checkbox"
                required
              />
              <span className={style.checkboxText__feedback}>
                Отправляя письмо, Вы даете согласие на обработку персональных
                данных, а также несете ответственность за полноту и
                достоверность предоставленной информации.
              </span>
            </label>

            <p className={style.disclaimer__feedback}>
              * При регистрации заявитель должен подтвердить свое согласие на
              обработку персональных данных.
            </p>
            <p className={style.disclaimer__feedback}>
              * Федеральный закон Nº59-ФЗ от 02.05.2006 о порядке рассмотрения
              обращений граждан Российской Федерации.
            </p>
            <button type="submit" className={style.feedback__button}>
              Отправить
            </button>
          </form>
          <button onClick={onClose} className={style.feedback__close__button}>
            Закрыть
          </button>
          {/* <div className={style.closeButton} onClick={onClose}>&times;</div> */}
        </div>
      </dialog>

      {isPreviewModalOpen && (
        <ModalWindow
          title={issueOptions[selectedIssue]}
          content={previewContent}
          onClose={() => setIsPreviewModalOpen(false)}
        />
      )}
    </>
  );
}
