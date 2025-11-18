// import { DownOutlined } from '@ant-design/icons';
const mainMenu = [
  {
    label: "О компании",
    key: "/about",
    children: [
      {
        label: "Информация о компании",
        key: "/about",
      },
      {
        label: "История",
        key: "/history",
      },
      {
        label: "Цели и задачи",
        key: "/goals",
      },
      {
        label: "Основные направления деятельности",
        key: "/mainDirection",
      },
      {
        label: "Раскрытие информации",
        key: "/informationDisclosures",
      },
      {
        label: "Антикоррупционная деятельность",
        key: "/antiCorruption",
      },
      {
        label: "Сертификаты",
        key: "/certs",
      },
      {
        label: "Информация по облигациям",
        key: "/informationOnBonds",
      },
    ],
  },

  {
    label: "Потребителям",
    key: "/consumers",
    children: [
      {
        label: "Территория обслуживания сетевой организации",
        key: "/territory",
      },
      {
        label: "Передача электрической энергии",
        key: "/servicePassports",
      },
      {
        label: "Технологическое присоединение",
        key: "/technologicalConnection",
      },
      {
        label: "Коммерческий учет электрической энергии",
        key: "/electricityAccounting",
      },
      {
        label: "Обслуживание потребителей",
        key: "/customerService",
      },
      {
        label: "Нормативные правовые акты",
        key: "/regulatoryLegalActs",
      },
      {
        label: "Отключения электроэнергии",
        key: "/plannedOutages",
      },
      {
        label: "Консолидация электросетевого имущества",
        key: "/consolidationOfElectric",
      },
      {
        label: "Вниманию объединений садоводов",
        key: "/gardeners",
      },
      {
        label: "Зарядные станции для электромобилей",
        key: "/chargingStations",
      },
      {
        label: "Реализация товарно-материальных ценностей",
        key: "/saleOfItems",
      },
      {
        label: "Дополнительные услуги",
        key: "/additionalServices",
      },
      {
        label: "Внимание мошенничество",
        key: "/attentionFraud",
      },
      {
        label: "Производственные программы на 2024 год",
        key: "/productionPrograms2024",
      },
      {
        label: "Производственные программы на 2025 год",
        key: "/productionPrograms2025",
      },

    ],
  },
  {
    label: "Инвесторам",
    key: "/investors",
    children: [],
  },
  {
    label: "Филиалы",
    key: "/filials",
    children: [],
  },
  {
    label: "Пресс-центр",
    key: "/press",
    children: [
      {
        label: "Новости",
        key: "/news",
      },
      {
        label: "Контакты для СМИ",
        key: "/contactForMedia",
      },
      {
        label: "Специальные проекты",
        key: "/specialProjects",
      },
      {
        label: "20 лет «Мособлэнерго»",
        key: "/20years",
      },
    ],
  },
  {
    label: "Вакансии",
    // key: "/job",
    key: "/mycareer",
    children: [],
  },
  {
    label: "Контакты",
    key: "/contact",
    children: [
      {
        label: "Контактная информация",
        key: "/contact",
      },
      {
        label: "Реквизиты компании",
        key: "/requisites",
      },
    ],
  },
];
export default mainMenu