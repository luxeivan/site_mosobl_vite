import { motion } from "framer-motion";
import React from "react";
import TopImage from "../../components/TopImage";
import imge5f6eb838fb5010a51a4e76952abf3f5 from "../../img/e5f6eb838fb5010a51a4e76952abf3f5.jpg";

export default function Blank() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <TopImage image={imge5f6eb838fb5010a51a4e76952abf3f5} title={"Технологическое присоединение"} />
      
    </motion.div>
  );
}
