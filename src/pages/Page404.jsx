import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TopImage from "../components/TopImage";

export default function Page404() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <TopImage title={""} />
      <div className="page-grid__content">
        <h2>Такая страница отсутствует!</h2>
        <Link to="/" className="button__back" style={{width:"170px", marginLeft:"0", marginTop: "20px", marginBottom: "50px"}}>
          Перейти на главную
        </Link>
      </div>
    </motion.div>
  );
}
