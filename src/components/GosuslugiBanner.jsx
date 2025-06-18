import React from "react";
import { useLocation } from "react-router";

export default function GosuslugiBanner() {
  const location = useLocation()
  // console.log(location)
  // if(location.pathname === '/secret')
  //   return false
  return (
    <div id="js-show-iframe-wrapper" style={location.pathname === '/secret' ? { display: "none" } : {}}    >
      <div className="pos-banner-fluid bf-2">
        <div className="bf-2__decor">
          <div className="bf-2__logo-wrap">
            <img
              className="bf-2__logo"
              src={
                "https://pos.gosuslugi.ru/bin/banner-fluid/gosuslugi-logo.svg"
              }
              alt="Госуслуги"
            />
            <div className="bf-2__slogan">Решаем вместе</div>
          </div>
        </div>
        <div className="bf-2__content">
          <div className="bf-2__description">
            <span className="bf-2__text">
              Возникли проблемы с подключением к электросети? Есть вопросы по
              газификации дома, трудности в процессе получения услуги?
            </span>
            <span className="bf-2__text bf-2__text_small">
              Напишите об этом&nbsp;— Минэнерго поможет с решением
            </span>
          </div>
          <div className="bf-2__btn-wrap">
            {/* <!-- pos-banner-btn_2 не удалять; другие классы не добавлять --> */}
            <button
              className="pos-banner-btn_2"
              type="button"
              style={{ width: "240px" }}
            >
              Сообщить о проблеме
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
