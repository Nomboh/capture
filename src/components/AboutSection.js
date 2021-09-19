import React from "react";
import home1 from "../img/home1.png";
// styles
import styled from "styled-components";
import { About, Description, Hide, Image } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide className="hide">
            <h2>We Work to Make</h2>
          </Hide>

          <Hide className="hide">
            <h2>
              Your <span>Dreams</span> come
            </h2>
          </Hide>

          <Hide className="hide">
            <h2>true</h2>
          </Hide>
        </div>

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
