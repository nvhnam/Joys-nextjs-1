import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: #f4a75d;
  z-index: 2;
`;

export const HomeWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  z-index: 2;
`;

export const HomeRow2 = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 3rem 1.8rem;
  margin: 5rem 0;
  z-index: 2;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 2rem 1.5rem;
    margin: 2rem 0;
  }
`;

export const HomeCol1 = styled.div`
  display: flex;
  align-content: center;
  justify-self: left;
  width: 50%;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1024px) {
    width: 40%;
  }

  @media screen and (max-width: 767px) {
    width: 85%;
    justify-self: center;
    margin-bottom: 1rem;
  }
`;

export const HomeCol1Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
`;

export const HomeCol2 = styled.div`
  display: flex;
  align-content: center;
  justify-self: right;
  width: 48%;
  margin-right: -3rem;
  margin-left: auto;

  @media screen and (max-width: 1024px) {
    width: 50%;
    margin-right: auto;
  }

  @media screen and (max-width: 767px) {
    width: 85%;
    justify-self: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const HomeCol2Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.63);
  border-radius: 15px;

  @media screen and (max-width: 767px) {
    padding: 1rem;
  }
`;

export const HomeCol2Text1 = styled.h1`
  font-size: 1rem;
  color: white;
  font-style: italic;
`;

export const HomeCol2Text2 = styled.h1`
  font-size: 1.3rem;
  color: white;
`;

export const HomeCol2Para = styled.p`
  font-size: 0.7rem;
  color: white;
  margin-bottom: 2rem;

  @media screen and (max-width: 767px) {
    margin-bottom: 1rem;
  }
`;

export const HomeCol2Button = styled.div`
  display: flex;
  align-content: center;

  @media screen and (max-width: 767px) {
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }
`;
