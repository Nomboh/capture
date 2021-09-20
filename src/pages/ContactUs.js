import React from "react";
// animations
import { motion } from "framer-motion";
import { animatePages } from "../animate";

const ContactUs = () => {
  return (
    <motion.div
      variants={animatePages}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <h1>Contact Us</h1>
    </motion.div>
  );
};

export default ContactUs;
