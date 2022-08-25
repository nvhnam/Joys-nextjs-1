import styled from "styled-components";

export const Home3Container = styled.div`
  width: 100%;
  height: 45vh;
  /* z-index: -3; */
  position: relative;
  margin-top: 3rem;

  @media screen and (min-width: 1025px) {
    height: 48vh;
    height: 20vw;
  }

  @media screen and (max-width: 767px) {
    height: 12vh;
    margin-top: 2.5vmin;
  }

  @media screen and (max-width: 376px) {
    height: 14vh;
  }
`;

export const Home3Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Home3Background = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
`;

export const Home3Img = styled.div`
  width: 100%;
  height: 100%;
`;

// export const Home3Box = styled.div`
//   width: auto;
//   height: auto;
//   position: absolute;
//   top: 50%;
//   right: 1rem;
//   border-radius: 50%;
//   background-color: white;
// `;

// export const Home3BoxWrapper = styled.div`
//   width: 100%;
//   height: 100%;
//   padding: 1rem;
// `;

// export const Home3BoxTitle = styled.h1`
//   color: black;
//   font-size: 1.5rem;
//   text-align: center;
// `;

// export const Home3BoxPara = styled.p`
//   color: black;
//   font-size: 1rem;
//   text-align: center;
// `;
