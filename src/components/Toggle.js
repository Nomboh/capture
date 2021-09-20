import React, { useState } from "react";
import { motion } from "framer-motion";

const Toggle = ({ children, title }) => {
  const [faqStatus, setFaqStatus] = useState(false);
  return (
    <motion.div
      layout
      className="question"
      onClick={() => setFaqStatus(!faqStatus)}
    >
      <motion.h4 layout>{title}</motion.h4>
      {faqStatus ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
