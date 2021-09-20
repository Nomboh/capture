import React from "react";
import home1 from "../img/home1.png";
// styles
import styled from "styled-components";
import { About, Description, Hide, Image } from "../styles";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide className="hide">
            <motion.h2>We Work to Make</motion.h2>
          </Hide>

          <Hide className="hide">
            <motion.h2>
              Your <span>Dreams</span> come
            </motion.h2>
          </Hide>

          <Hide className="hide">
            <motion.h2>true</motion.h2>
          </Hide>
        </motion.div>

        <p>
          Contact us for any photography and videography ideas that you have. We
          have professionals with amazing skills.
        </p>

        <button>Contact Us</button>
      </Description>

      <Image>
        <img src={home1} alt="photographer 1" />
      </Image>
    </About>
  );
};

export default AboutSection;
