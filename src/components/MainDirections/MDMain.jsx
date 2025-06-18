import React from 'react'
import transferEnergy from "../../img/a79b60e9cc2583a3cdf047c313bf657e.webp";
import repairs from "../../img/8fbf8269358c33a2d022ea0995bdd105.webp";
import connection from "../../img/bd1ac77a3da7d2d1f3d67d7ba2308deb.webp";

export default function MDMain() {
  return (
    <div className="page-grid__content" id="content">
        <div className="page-grid__content" id="content">
          <div className="block-info__up">
            <div className="block-info__wrap-img">
              <picture>
                <source srcSet={transferEnergy} type="image/webp" />
                <source srcSet={transferEnergy} type="image/png" />
                <img className="positions-post__img" src={transferEnergy} alt="Передача электроэнергии" title="Передача электроэнергии" />
              </picture>
            </div>
            <div className="block-info__wrap-text">
              <h3 className="block-info__caption">Передача электроэнергии</h3>
            </div>
          </div>
          <div className="block-info__up">
            <div className="block-info__wrap-img">
              <picture>
                <source srcSet={repairs} type="image/webp" />
                <source srcSet={repairs} type="image/png" />
                <img className="positions-post__img" src={repairs} alt="Передача электроэнергии" title="Передача электроэнергии" />
              </picture>
            </div>
            <div className="block-info__wrap-text">
              <h3 className="block-info__caption">Капитальный ремонт</h3>
            </div>
          </div>
          <h3 className="row-docs-age__caption line-bottom">Инвестиционная программа</h3>
          <div className="text-area">
            <p className="text-md">
              АО «Мособлэнерго» осуществляет инвестиционную деятельность в виде капитальных вложений в развитие электросетевого комплекса Московской области для обеспечения качественного и надежного электроснабжения всех ее потребителей.
            </p>{" "}
          </div>
          <div className="block-info__up">
            <div className="block-info__wrap-img">
              <picture>
                <source srcSet={connection} type="image/webp" />
                <source srcSet={connection} type="image/png" />
                <img className="positions-post__img" src={connection} alt="Передача электроэнергии" title="Передача электроэнергии" />
              </picture>
            </div>
            <div className="block-info__wrap-text">
              <h3 className="block-info__caption">Технологическое присоединение</h3>
            </div>
          </div>
          <div className="block-info__grid">
            <div className="text-block">
              <h4>Центр обслуживания клиентов:</h4>
              <p>Московская область, Красногорский р-н, 26 км автодороги «Балтия», Бизнес Центр «RigaLand», строение А, подъезд 4</p>{" "}
            </div>
            <div className="text-block">
              <h4>Режим работы:</h4>
              <span>
                По рабочим дням – <b>с 8.00 до 17.00</b>
              </span>
              <span>
                в пятницу <b>с 8.00 до 15.45</b>
              </span>
              <span>(без обеденного перерыва)</span>{" "}
            </div>
            <div className="text-block">
              <h4>Контактный телефон:</h4>
              <a className="tel-contacts" href="tel:+74959950099">
                +7 (495) 785-00-00
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
  )
}
