import styled from "styled-components";

export const About = styled.div`
  min-height: 90vh;
  display: flex;
  justify-items: center;
  justify-content: space-around;
  padding: 5rem 10rem;
  color: white;
`;

export const Description = styled.div`
  h2 {
    font-weight: lighter;
  }
  padding-right: 5rem;
  flex: 1;
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
