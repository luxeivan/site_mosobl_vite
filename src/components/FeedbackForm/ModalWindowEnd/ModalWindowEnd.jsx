import React from "react";
import style from "./ModalWindowEnd.module.css";

const ModalWindow = ({ title, content, onClose }) => {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(`Тема: ${title}\r\n${content}`)
      .then(() => {
        alert("Текст скопирован!");
      })
      .catch((err) => {
        console.error("Ошибка при копировании текста: ", err);
      });
  };

  return (
    <div className={style['modal-window__overlay']}>
      <div className={style['modal-window']}>
        <p className={style['modal-window__title']}>{title}</p>
        <pre className={style['modal-window__content']}>{`Тема: ${title}\n\n${content}`}</pre>
        <hr />
        <p>
          Скопируйте текст данного письма в свой почтовый сервис и направьте на
          адрес 
        </p>
        <p className={style['modal-window__email']}>mail@mosoblenergo.ru</p>
        <button onClick={copyToClipboard} className={style['modal-window__button']}>Копировать текст письма</button>
        <button onClick={onClose} className={`${style['modal-window__button']} ${style['modal-window__button_close']}`}>Закрыть</button>
      </div>
    </div>
  );
};

export default ModalWindow;

