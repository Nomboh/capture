import React from "react";
import home1 from "../img/home1.png";
// styles
import styled from "styled-components";
import { About, Description, Hide, Image } from "../styles";
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../animate";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide className="hide">
            <motion.h2 variants={titleAnimation}>We Work to Make</motion.h2>
          </Hide>

          <Hide className="hide">
            <motion.h2 variants={titleAnimation}>
              Your <span>Dreams</span> come
            </motion.h2>
          </Hide>

          <Hide className="hide">
            <motion.h2 variants={titleAnimation}>true</motion.h2>
          </Hide>
        </motion.div>

        <motion.p variants={fade}>
          Contact us for any photography and videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>

        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>

      <Image>
        <motion.img
          src={home1}
          alt="photographer 1"
          variants={photoAnimation}
        />
      </Image>
    </About>
  );
};

export default AboutSection;
