import React, { useState, useEffect } from "react";
import style from "./FeedbackForm.module.css";
import Modal from "./ModalFeedbackForm/ModalFeedbackFormAnother";

export default function FeedbackForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
  };
  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  //   document.body.style.position = null;
  //   document.body.style.width = null;
  // };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.position = null;
    document.body.style.width = null;

    const url = new URL(window.location.href);
    url.searchParams.delete("feedback");
    if (url.hash === "#feedback") url.hash = "";
    window.history.replaceState({}, "", url.toString());
  };

  useEffect(() => {
    const search = new URLSearchParams(window.location.search);
    const shouldOpen =
      search.get("feedback") === "1" || window.location.hash === "#feedback";

    if (shouldOpen) {
      setIsModalOpen(true);
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    }
  }, []);

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
