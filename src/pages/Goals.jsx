import React from 'react'
// import checkIcon from "../img/check-icon.svg";
import {motion} from 'framer-motion'
import TopImage from "../components/TopImage";
import img37550ba6c53ac1236dc634e6c4f22cc1 from "../img/37550ba6c53ac1236dc634e6c4f22cc1.jpg";
// import { Link } from 'react-router-dom';
const goalsTasks = [
    "Повышение надежности и качества электроснабжения Подмосковья;",
    "Обеспечение взаимодействия электросетевых организаций, осуществляющих деятельность на территории Московской области;",
    "Консолидация разрозненных муниципальных электрических сетей, энергосетевых активов;",
    "Регистрация и обслуживание бесхозяйных электросетей на территории Московской области;",
    "Реализация инвестиционной программы развития обслуживаемых электросетей (реконструкция существующих сетей и строительство новых электросетевых объектов);",
    "Снижение технологических и коммерческих потерь при передаче электроэнергии;",
    "Оптимизация процесса технологического присоединения новых потребителей с целью повышения инвестиционной привлекательности Московской области;",
    "Внедрение единой технической политики, инновационных технологий, новейших видов современного оборудования и материалов.",
]

export default function Goals() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <TopImage image={img37550ba6c53ac1236dc634e6c4f22cc1} title={"Цели и задачи"} />
      <div className="page-grid__content" id="content">
      <div className="text-area">
        
        <ul>
         
        {goalsTasks.map((item,index)=>
            <li key={index}>
            <p style={{ display: "flex", alignItems: "center" }}>
              {/* <img src={checkIcon} style={{ marginRight: "10px" }} /> */}
              {item}
            </p>
          </li>)}
        </ul>
      </div>
      </div>
    </motion.div>
  )
}
