import styled from "styled-components";

export const Contact2Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -5rem;
  padding-left: 6rem;

  @media screen and (min-width: 1025px) {
    padding-left: 16.5vmin;
    margin-top: 0;
  }

  @media screen and (max-width: 940px) {
    padding-left: 4rem;
    margin-top: 1rem;
  }

  @media screen and (max-width: 767px) {
    padding-left: 0;
    margin-top: 3rem;
  }
`;

export const Contact2Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
`;

export const Contact2Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

export const Contact2Col1 = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  margin-bottom: 3rem;

  @media screen and (min-width: 1025px) {
    margin-bottom: 8vmin;
  }

  @media screen and (max-width: 940px) {
    margin-bottom: 2rem;
  }
`;

export const Contact2Col1Title = styled.h1`
  font-size: 3.2rem;
  color: white;

  @media screen and (min-width: 1025px) {
    font-size: 9vmin;
  }

  @media screen and (max-width: 940px) {
    font-size: 5vmin;
  }

  @media screen and (max-width: 767px) {
    font-size: 7.7vmin;
    margin-bottom: 7.5vmin;
  }
`;

export const Contact2Underline = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;

export const Contact2Col1Wrapper = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 1.7rem;
  background-color: #eec170;
  padding: 1rem;
  border-radius: 10px;

  @media screen and (min-width: 1025px) {
    margin-top: 5.5vmin;
    padding: 2.8vmin;
  }
`;

export const Contact2Col1Info = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Contact2Col1Icon = styled.div`
  width: auto;
  height: auto;
  display: flex;
  color: #772f1a;
  font-size: 1.4rem;
  margin-right: 0.7rem;

  @media screen and (min-width: 1025px) {
    font-size: 4.5vmin;
    margin-right: 1.4vmin;
  }

  @media screen and (max-width: 940px) {
    margin-right: 1.3vmin;
    font-size: 3.2vmin;
  }

  @media screen and (max-width: 767px) {
    font-size: 5.3vmin;
    margin-right: 2.5vmin;
  }
`;

export const Contact2Col1Detail = styled.p`
  display: flex;
  font-size: 1.1rem;
  font-weight: bold;
  color: #772f1a;

  @media screen and (min-width: 1025px) {
    font-size: 3.3vmin;
  }

  @media screen and (max-width: 940px) {
    font-size: 2.2vmin;
  }

  @media screen and (max-width: 767px) {
    font-size: 3.8vmin;
  }
`;

export const Contact2Col2 = styled.div`
  width: 100%;
  height: 100%;
  display: block;
`;

export const Contact2Col2Wrapper = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    margin-left: -0.5rem;
  }
`;

export const Contact2Col2Wrapper2 = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: relative;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
