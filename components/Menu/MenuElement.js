import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #f4a75d;
`;

export const MenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1400px;
  margin-top: 5rem;
  margin-bottom: 6rem;
  padding: 1rem 1rem;
`;

export const MenuRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const MenuCol1 = styled.div`
  display: flex;
  width: 30%;
  height: 100%;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const MenuCol1Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 2rem;
`;

export const MenuCol1Title = styled.button`
  cursor: pointer;
  width: 80%;
  text-decoration: none;
  padding: 1.8rem;
  font-size: 1.2rem;
  background: white;
  border: none;
  font-weight: bold;
  margin-left: 1rem;
  color: black;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: white;
    background-color: black;
  }

  &.active {
    /* transition: all 0.2s ease-in-out; */
    color: white;
    background-color: black;
  }
`;

export const MenuCol2 = styled.div`
  /* display: flex;
  width: 70%;
  height: auto;
  flex-direction: column; */
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  grid-gap: 2rem;
  margin-top: -2rem;

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0rem;
    margin-top: 0;
  }
`;

export const MenuCol2Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 1rem;

  @media screen and (max-width: 767px) {
    margin-top: 4rem;
  }
`;

export const MenuCol2Drop = styled.select`
  display: none;

  @media screen and (max-width: 767px) {
    width: 90%;
    height: auto;
    display: block;
    text-align: center;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 0.2rem;
    margin-top: -3rem;
    margin-right: auto;
    margin-left: auto;
    color: black;
    background: white;
    position: relative;
    transition: all 0.2s ease;
    top: 0;
    left: 0;
  }
`;

export const MenuCol2Option = styled.option`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
    height: 100%;
    width: auto;
    font-size: 1.2rem;
    margin-left: auto;
    margin-right: auto;
    color: black;
    background: white;
    position: absolute;
    cursor: pointer;
    text-align: center;
    transition: all 0.2s ease;
    top: 0;
    left: 0;
  }
`;

export const MenuCol2Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  display: block;
  text-align: left;
  /* color: #772f1a; */
  color: black;
  overflow: hidden;
`;

export const MenuCol2ListContainer = styled.div`
  width: 100%;
  height: auto;
`;

export const MenuCol2ListWrapper = styled.div`
  background: #eec170;
  width: 15rem;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 4rem;

  @media screen and (max-width: 767px) {
    width: 9rem;
    margin-top: 0;
  }
`;

export const MenuCol2ListImg = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;

export const MenuCol2ListTitle = styled.h1`
  font-size: 1.2rem;
  color: #772f1a;
  text-align: center;
`;

export const MenuCol2ListDescr = styled.p`
  font-size: 0.8rem;
  text-align: center;
`;

export const MenuCol2ListPrice = styled.p`
  font-size: 1rem;
  color: #772f1a;
  text-align: center;
`;
