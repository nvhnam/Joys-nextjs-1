import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 14vh;
  background: #632626;
  margin-top: auto;

  @media screen and (max-width: 1024px) {
    height: 10vmin;
  }

  @media screen and (max-width: 767px) {
    height: 17vmin;
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterText = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #f8fffc;

  @media screen and (min-width: 1025px) {
    font-size: 4vmin;
  }

  @media screen and (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 1rem;
  }
`;
