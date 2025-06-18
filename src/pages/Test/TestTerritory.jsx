import React from "react";
import { motion } from "framer-motion";
import TopImage from "../../components/TopImage";
import img2fde80ac63c76cbc7aa002fb91d2bd94 from "../../img/2fde80ac63c76cbc7aa002fb91d2bd94.jpg";

export default function TestTerritory() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage
        image={img2fde80ac63c76cbc7aa002fb91d2bd94}
        title={"Территория обслуживания сетевой организации"}
      />
    </motion.div>
  );
}
