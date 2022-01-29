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
  flex-direction: row;
  justify-content: space-between;
  padding: 3rem 1.8rem;
  margin: 5rem 0;
  z-index: 2;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 2rem 1.5rem;
    justify-content: center;
    margin: 2rem 0;
  }
`;

export const HomeCol1 = styled.div`
  display: flex;
  align-content: center;
  width: 45%;
  margin-left: 4rem;
  margin-right: auto;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    width: 40%;
  }

  @media screen and (max-width: 767px) {
    width: 90%;
    justify-self: center;
    margin-bottom: 1rem;
    margin-top: 2rem;
    margin-left: auto;
  }
`;

export const HomeCol1Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
`;

export const HomeCol12Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.63);
  border-radius: 15px;
  margin-top: 1.7rem;

  @media screen and (max-width: 767px) {
    padding: 1rem;
  }
`;

export const HomeCol12Text1 = styled.h1`
  font-size: 1rem;
  color: white;
  font-style: italic;
`;

export const HomeCol12Text2 = styled.h1`
  font-size: 1.3rem;
  color: white;
`;

export const HomeCol12Para = styled.p`
  font-size: 0.7rem;
  color: white;
  margin-bottom: 2rem;

  @media screen and (max-width: 767px) {
    margin-bottom: 1rem;
  }
`;

export const HomeCol12Button = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const HomeCol2 = styled.div`
  display: flex;
  align-content: center;
  width: 50%;
  height: 50%;
  margin-right: auto;
  margin-left: auto;
  padding-left: 6rem;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    width: 50%;
    padding-left: 0;
    margin-right: auto;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    justify-self: center;
  }
`;

export const HomeCol2Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem;
  margin-top: -3.5rem;

  @media screen and (max-width: 767px) {
    padding: 1rem;
    width: auto;
  }
`;

export const HomeCol2Text1 = styled.h1`
  font-size: 3rem;
  color: #f8fffc;
  margin-top: 0.5rem;

  @media screen and (max-width: 767px) {
    font-size: 2rem;
    margin-top: 8rem;
    margin-bottom: 1.9rem;
  }
`;

export const HomeCol2Underline = styled.div`
  display: block;
  width: 70%;
  margin-top: -1.5rem;
  border-bottom: 4px solid #772f1a;
`;

export const FacebookPostWrapper = styled.div`
  display: inline-block;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #f8fffc;
  width: auto;
  height: auto;
  margin-top: 2rem;
  border-radius: 4px;

  @media screen and (max-width: 767px) {
    /* width: 10rem; */
    margin-left: -1.8rem;
    margin-right: auto;
    margin-bottom: 3rem;
    /* padding: 5rem; */
  }

  @media screen and (max-width: 414px) {
    margin-left: -0.5rem;
  }
`;
