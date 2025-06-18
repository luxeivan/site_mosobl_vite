import React from 'react';
import style from '../ModalFeedbackForm.module.css';

export default function DateInput({ name, desc, required }) {
  return (
    <div className={style["input-wrapper"]}>
      <label className={`${style.input__description} ${required ? style.required : ""}`}>
        {name}
        {desc && <span className={style["desc-text"]}>{desc}</span>}
      </label>
      <div className={style.datetime__container}>
        <input
          className={`${style.input__feedback} ${style.input__date}`}
          type="date"
          name={`${name}_date`}
          required={required}
        />
        <input
          className={`${style.input__feedback} ${style.input__time}`}
          type="time"
          name={`${name}_time`}
          required={required}
        />
      </div>
    </div>
  );
}
