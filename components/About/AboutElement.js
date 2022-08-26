import styled from "styled-components";

export const BannerContainer = styled.div`
  display: block;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  overflow: hidden;

  @media screen and (min-width: 1025px) {
    /* height: 60vmin; */
    height: 30vmax;
  }

  @media screen and (max-width: 1024px) {
    height: 100%;
  }
`;

export const PageBannerTitle = styled.h1`
  display: block;
  top: 0;
  left: 0;
  position: absolute;
  font-size: 3vmax;
  color: #f8fffc;
  padding-top: 4rem;
  width: 100%;
  height: 100%;
  z-index: 4;
  text-align: center;
  letter-spacing: 0.5rem;

  @media screen and (min-width: 1025px) {
    top: 10%;
    font-size: 6vmax;
  }

  @media screen and (max-width: 1024px) {
    font-size: 3.5rem;
    padding-top: 5rem;
  }

  @media screen and (max-width: 940px) {
    font-size: 2.8rem;
    padding-top: 3.7rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.8rem;
    padding-top: 0.7rem;
  }

  @media screen and (width: 414px) {
    padding-top: 0.8rem;
  }

  @media screen and (width: 320px) {
    font-size: 1.5rem;
    padding-top: 0.4rem;
  }
`;

export const AboutContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: #f4a75d; */
  background: #f8fffc;

  @media screen and (min-width: 1025px) {
    padding: 0 3vmax;
  }
`;

export const AboutWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 2300px;
  margin: 6rem 0;
  min-height: 60vh;

  @media screen and (max-width: 940px) {
    margin: 7rem 0;
  }

  @media screen and (max-width: 767px) {
    margin: 3rem 0;
  }
`;

export const AboutRow = styled.div`
  display: flex;
  justify-items: space-between;
  flex-direction: row;
  padding: 1rem 2rem;

  @media screen and (min-width: 1025px) {
    padding: 3vmin 13vmin;
  }

  @media screen and (max-width: 1024px) {
    /* padding: 0; */
    justify-content: center;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    margin-left: 0;
  }
`;

export const AboutCol1 = styled.div`
  justify-content: center;
  align-items: center;
  width: 34%;
  height: auto;
  
  @media screen and (min-width: 1025px) {
    /* padding-right: 4vmin; */
    padding-right: 1.6vmax;
  }

  @media screen and (max-width: 1024px) {
    /* padding-right: 4vmin; */
    /* padding-right: 1vmax; */
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 1rem;
    margin-bottom: 2rem;
  }

  @media screen and (width: 320px) {
    margin-bottom: 1rem;
  }
`;

export const AboutCol1Pic = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;

export const AboutCol2 = styled.div`
  width: 50%;
  display: flex;
  height: auto;
  align-items: center;
  justify-content: center;
  margin-left: 5rem;

  @media screen and (min-width: 1025px) {
    /* padding-left: 5vmin; */
    margin-left: 7.6vmax;
  }

  @media screen and (max-width: 1024px) {
    margin-left: 5vmax;
    margin-top: -1.8vmax;
  }

  @media screen and (max-width: 830px) {
    /* margin-left: 5vmax; */
    margin-top: -5vmax;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 1rem;
    margin-left: 0;
    margin-top: -6vmax;
  }
`;

export const AboutCol2Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.7rem;
  /* background: rgba(0, 0, 0, 0.63); */
  /* border-radius: 10px; */

  @media screen and (min-width: 1025px) {
    /* padding: 1vmin; */
    padding: 1vmax;
  }

  @media screen and (max-width: 1024px) {
    padding: 3vmax;
  }

  @media screen and (max-width: 940px) {
    padding: 2rem;
  }

  @media screen and (max-width: 767px) {
    padding: 1.8vmax;
  }

  @media screen and (width: 320px) {
    padding: 1.5rem;
  }
`;

export const AboutCol2Title = styled.h1`
  font-size: 3rem;
  color: #f8fffc;
  color: #f58549;
  font-family: "Short Stack", cursive;
  margin-bottom: 6rem;
  text-align: center;

  @media screen and (min-width: 1025px) {
    /* margin-bottom: 9vmin; */
    margin-bottom: 3vmax;
    /* font-size: 9vmin; */
    font-size: 4.8vmax;
  }

  @media screen and (max-width: 1024px) {
    font-size: 4.7vmax;
    /* margin-bottom: 5rem; */
    margin-bottom: 3.8vmax;
  }

  @media screen and (max-width: 940px) {
    /* font-size: 2rem; */
    font-size: 4.2vmax;
    /* margin-bottom: 2rem; */
    margin-bottom: 3vmax;
  }

  @media screen and (max-width: 830px) {
    font-size: 3.5vmax;
    margin-bottom: 2vmax;
  }

  @media screen and (max-width: 830px) {
    font-size: 3.7vmax;
    margin-bottom: 2.5vmax;
  }

  @media screen and (width: 320px) {
    font-size: 1.7rem;
    margin-bottom: 1.5rem;
    margin-top: 0;
  }
`;

export const AboutCol2Para = styled.p`
  font-size: 1.3rem;
  /* color: #f8fffc; */
  color: black;

  @media screen and (min-width: 1025px) {
    /* font-size: 3.5vmin; */
    font-size: 1.6vmax;
    margin-bottom: 1vmin;
  }

  @media screen and (max-width: 1024px) {
    font-size: 1.8vmax;
  }

  @media screen and (max-width: 940px) {
    font-size: 1.78vmax;
  }

  @media screen and (max-width: 830px) {
    font-size: 1.5vmax;
    margin-bottom: -0.8vmax;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.7vmax;
    margin-bottom: 0vmax;
  }

  @media screen and (width: 320px) {
    font-size: 0.8rem;
  }
`;
