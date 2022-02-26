import styled from "styled-components";

export const Home2Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -3rem;

  @media screen and (max-width: 767px) {
    margin-top: -1rem;
  }
`;

export const Home2Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1300px;
`;

export const Home2Title = styled.h1`
  font-size: 3rem;
  color: #f8fffc;
  text-align: center;

  @media screen and (max-width: 767px) {
    font-size: 2rem;
  }
`;

export const Home2Underline1 = styled.div`
  display: block;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: -1rem;
  border-bottom: 4px solid #772f1a;
  margin-bottom: 0.7rem;

  @media screen and (max-width: 767px) {
    margin-bottom: 1rem;
  }
`;

export const Home2ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
`;

export const Home2Buttons = styled.button`
  background: transparent;
  outline: none;
  border: solid 2px transparent;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f8fffc;
  font-size: 1.5rem;
  cursor: pointer;
  text-align: center;
  padding: 12px 50px;
  /* width: 8rem; */
  margin: 2rem 3.5rem;
  font-weight: bold;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease;
    border: solid 2px #772f1a;
    color: #772f1a;
  }

  @media screen and (max-width: 940px) {
    margin: 2rem 2rem;
  }

  @media screen and (max-width: 767px) {
    padding: 7px 20px;
    margin: 1.2rem 1rem;
    margin-left: 1.3rem;
    font-size: 1.25rem;
  }

  @media screen and (width: 320px) {
    margin: 1.3rem 0.5rem;
    padding: 5px 18px;
    font-size: 1.2rem;
  }
`;

export const Home2Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  padding-bottom: 6rem;

  @media screen and (min-width: 1025px) {
    grid-gap: 2.5vmax;
  }

  @media screen and (max-width: 1024px) {
    grid-gap: 1.7rem;
  }

  @media screen and (max-width: 940px) {
    grid-gap: 1rem;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Home2MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.2rem 1.2rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 1500px) {
    margin-left: -2vmax;
  }
`;

export const Home2MenuWrapper = styled.div`
  background: #eec170;
  width: 20rem;
  border-radius: 10px;
  overflow: hidden;

  @media screen and (min-width: 1440px) {
    /* margin-left: auto; */
  }

  @media screen and (min-width: 1025px) {
    width: 25vmax;
    margin-left: 1.2vmax;
  }

  @media screen and (max-width: 1024px) {
    width: 16rem;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 940px) {
    width: 12rem;
  }

  @media screen and (max-width: 767px) {
    width: 17rem;
  }

  @media screen and (width: 320px) {
    width: 15rem;
  }
`;

export const Home2MenuImg = styled.div`
  display: block;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.15);
    transition: all 0.2s ease-in-out;
  }
`;

export const Home2MenuTitle = styled.h1`
  font-size: 1.8rem;
  color: #772f1a;
  margin-bottom: -0.8rem;
  text-align: center;

  @media screen and (max-width: 940px) {
    font-size: 1.3rem;
  }
`;

export const Home2MenuPrice = styled.p`
  font-size: 1.5rem;
  /* color: #f8fffc; */
  color: #772f1a;
  text-align: center;

  @media screen and (max-width: 940px) {
    font-size: 1.2rem;
  }
`;

export const Home2MenuButton = styled.button`
  display: block;
  padding: 14px 60px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #772f1a;
  /* background-color: #772f1a; */
  /* background-color: transparent; */
  background: #eec170;
  border-radius: 10px;
  border: solid 3px #772f1a;
  margin: -1.3rem auto 3rem auto;
  text-align: center;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in;

  &:hover {
    background: #772f1a;
    color: white;
    transition: all 0.2s ease-out;
  }

  @media screen and (max-width: 1024px) {
    font-size: 1.9vmax;
    padding: 1vmax 2.5vmax;
    margin-top: -4vmax;
  }

  @media screen and (max-width: 767px) {
    padding: 12px 40px;
    margin-top: -3rem;
  }
`;
