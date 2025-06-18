import React from "react";
import style from "../ModalFeedbackForm.module.css";

export default function TextInput({ name, desc, required }) {
  return (
    <div className={style["input-wrapper"]}>
      <label
        className={`${style.input__description} ${
          required ? style.required : ""
        }`}
      >
        {name}
      </label>
      <input
        className={style.input__feedback}
        type="text"
        name={name}
        placeholder={desc}
        required={required}
      />
    </div>
  );
}
