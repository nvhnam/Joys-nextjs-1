import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  top: 80px;
  left: 0;

  @media screen and (max-width: 767px) {
    height: auto;
  }
`;

export const HeroWrapper = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const HeroImg = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
`;
