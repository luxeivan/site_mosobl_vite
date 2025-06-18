import React, { useState } from "react";
import style from "./FeedbackForm.module.css";
import Modal from "./ModalFeedbackForm/ModalFeedbackFormAnother";

export default function FeedbackForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.position = null;
    document.body.style.width = null;
  };

  return (
    <div>
      <button
        className={style.btn__feedback__open__form}
        onClick={handleOpenModal}
      >
        Напишите нам
      </button>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
}
