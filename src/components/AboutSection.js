import React from "react";
import home1 from "../img/home1.png";
// styles
import styled from "styled-components";

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

      <Image className="image">
        <img src={home1} alt="photographer 1" srcset="" />
      </Image>
    </About>
  );
};

const About = styled.div`
  min-height: 90vh;
  display: flex;
  justify-items: center;
  justify-content: space-around;
  padding: 5rem 10rem;
  color: white;
`;

const Description = styled.div`
  h2 {
    font-weight: lighter;
  }
  padding-right: 5rem;
  flex: 1;
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
