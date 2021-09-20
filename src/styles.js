import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  justify-items: center;
  justify-content: space-around;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1100px) {
    display: block;
    text-align: center;
    padding: 2rem 1rem;
  }
`;

export const Description = styled.div`
  h2 {
    font-weight: lighter;
  }
  padding-right: 5rem;
  flex: 1;
  z-index: 10;
  @media (max-width: 1300px) {
    button {
      margin: 1rem 0 3rem 0;
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 10;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
