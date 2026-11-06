import React from "react";
import link from "../../img/link.svg";

const docs = [
  {
    name: "Федеральный закон от 26.03.2003 N 35-ФЗ «Об электроэнергетике»",
    url: "https://www.kontur-extern.ru/info/normativ/document/1/508117-federalnyy-zakon-ot-26-03-2003-n-35-fz",
  },
  {
    name: "Постановление Правительства РФ от 04.05.2012 г. N 442 «О функционировании розничных рынков электрической энергии, полном и (или) частичном ограничении режима потребления электрической энергии»",
    url: "https://www.kontur-extern.ru/info/normativ/document/1/508778-postanovlenie-pravitelstva-rf-ot-04-05-2012-n-442",
  },
  {
    name: "Постановление Правительства РФ от 06.05.2011 г. N 354 «О предоставлении коммунальных услуг собственникам и потребителям помещений в многоквартирных домах и жилых домах»",
    url: "https://www.kontur-extern.ru/info/normativ/document/1/503528-postanovlenie-pravitelstva-rf-ot-06-05-2011-n-354",
  },
  {
    name: "Постановление Правительства РФ от 27.12.2004 N 861 «Об утверждении Правил недискриминационного доступа к услугам по передаче электрической энергии и оказания этих услуг, Правил недискриминационного доступа к услугам по оперативно-диспетчерскому управлению в электроэнергетике и оказания этих услуг, Правил недискриминационного доступа к услугам коммерческого оператора оптового рынка и оказания этих услуг и Правил технологического присоединения энергопринимающих устройств потребителей электрической энергии, объектов по производству электрической энергии, а также объектов электросетевого хозяйства, принадлежащих сетевым организациям и иным лицам, к электрическим сетям»",
    url: "https://www.kontur-extern.ru/info/normativ/document/1/508777-postanovlenie-pravitelstva-rf-ot-27-12-2004-n-861",
  },
  {
    name: "Постановление Правительства РФ от 29.12.2011 N 1178 «О ценообразовании в области регулируемых цен (тарифов) в электроэнергетике»",
    url: "https://www.kontur-extern.ru/info/normativ/document/1/508636-postanovlenie-pravitelstva-rf-ot-29-12-2011-n-1178",
  },
  {
    name: "Приказ Минэнерго России от 07.07.2021 N 541",
    url: "https://www.kontur-extern.ru/info/normativ/document/1/403125-prikaz-minenergo-rf-ot-07-07-2021-n-541",
  },
  {
    name: "Распоряжение Мособлкомцен от 28.11.2025 №300Р",
    url: "https://ktc.mosreg.ru/dokumenty/normotvorchestvo/rasporyazheniya/tekhnologicheskoe-prisoedinenie-k-elektricheskim-setyam-raspor/rasporiazenie-komiteta-po-cenam-i-tarifam-moskovskoi-oblasti-ot-28112025-300-r-ob-ustanovlenii-standartizirovannyx-tarifnyx-stavok-formul-platy-i-lgotnoi-stavki-za-1-kvt-zaprasivaemoi-maksimalnoi-moshhnosti-za-texnologiceskoe-prisoedinenie-energoprinimaiushhix-ustroistv-potrebitelei-elektriceskoi-energii-obieektov-elektrosetevogo-xoziaistva-prinadlezashhix-setevym-organizaciiam-i-inym-licam-k-elektriceskim-setiam-territorialnyx-setevyx-organizacii-na-territorii-moskovskoi-oblasti-na-2026-god?utm_referrer=https%3A%2F%2Fyandex.ru%2F",
  },
];

// Подтягивание из Strapi отключено — НПА теперь по внешним ссылкам (массив docs выше)

export default function TCNormativeDocuments() {
  return (
    <div className="page-grid__content">
      <div className="row-docs-age">
        {docs.map((item, index) => (
          <a
            className="doc-line doc-line--link"
            href={item.url}
            rel="noopener noreferrer"
            target="_blank"
            key={index}
          >
            <div className="doc-line__wrap-icon">
              <img src={link} alt="icon link" />
            </div>
            <div className="doc-line__wrap-text">
              <span className="doc-line__name">{item.name}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
