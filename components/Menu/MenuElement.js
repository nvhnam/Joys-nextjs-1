import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* background: #f4a75d; */
  background: #f8fffc;
`;

export const MenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* max-width: 1400px; */
  margin-top: 5rem;
  margin-bottom: 6rem;
  padding: 1rem 1rem;
  min-height: 70vh;

  @media screen and (max-width: 1024px) {
    margin-top: 0rem;
    margin-bottom: 4rem;
  }

  @media screen and (max-width: 767px) {
    margin-top: 2rem;
  }
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
  position: relative;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: -1rem;
  }
`;

export const MenuCol1Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 2rem;

  @media screen and (max-width: 767px) {
    padding-top: 0;
    user-select: none;
    display: flex;
    justify-content: center;
  }

  @media screen and (min-height: 1024px) {
    padding-top: 17vmin;
  }
`;

export const MenuColTitle = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    text-align: center;
    text-decoration: none;
    padding: 1rem;
    font-size: 1rem;
    background: white;
    border: none;
    font-weight: bold;
    margin-left: 1rem;
    /* color: black; */
    /* color: #772f1a; */
    color: #f58549;
    transition: all 0.2s ease-in-out;
    top: 0;
    left: auto;
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.08);
  }
`;

export const MenuDropWrapper = styled.div`
  width: 80%;
  height: 100%;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 30%);
  margin-left: 1rem;
  margin-top: 1rem;
  border-radius: 10px;

  @media screen and (max-width: 830px) {
    margin-top: -0.5rem;
    margin-left: 0.7rem;
  }

  @media screen and (max-width: 767px) {
    position: absolute;
    transition: all 0.2 ease-in-out;
    top: 118%;
    left: 0;
    z-index: 9;
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    height: 385%;
    margin-left: 1.6rem;
    width: 90%;
    overflow-y: scroll;
    background-color: white;
    border-radius: 0;
  }
`;

export const MenuCol1Title = styled.button`
  cursor: pointer;
  width: 100%;
  text-decoration: none;
  padding: 2.8vmax;
  font-size: 1.8vmax;
  background: #f8fffc;
  border: none;
  font-weight: bold;
  /* margin-left: 1rem; */
  /* color: #772f1a; */
  color: #f58549;
  transition: all 0.2s ease-in-out;

  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #f8fffc;
    background-color: #585123;
  }

  &.active {
    /* transition: all 0.2s ease-in-out; */
    color: white;
    background-color: #585123;
  }

  @media screen and (max-width: 767px) {
    top: 0;
    left: auto;
    width: 90%;
    height: 100%;
    padding: 1.2rem;
    text-align: left;
    outline: none;
    font-size: 1rem;
  }

  @media screen and (min-height: 1024px) {
    font-size: 2.45vmin;
    padding: 3.7vmin;
  }
`;

export const MenuCol2Row = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 100%;
`;

export const MenuCol2 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  grid-gap: 5.3vmax;
  /* grid-gap: auto; */
  margin-top: 1rem;
  z-index: 2;

  @media screen and (max-width: 1024px) {
    grid-gap: 4.3vmax;
  }

  @media screen and (max-width: 830px) {
    grid-gap: 2vmax;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0rem;
    margin-top: 2rem;
  }
`;

export const MenuCol2Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 1rem;

  @media screen and (max-width: 940px) {
    margin-left: 2vw;
  }

  @media screen and (max-width: 767px) {
    margin-top: 4rem;
    margin-left: 4.6vw;
    width: auto;
  }
`;

export const MenuCol2Title = styled.div`
  font-size: 4vmax;
  font-weight: 340;
  z-index: 3;
  width: 100%;
  height: auto;
  margin-left: 1.5rem;
  font-size: 2.5rem;
  /* color: #f8fffc; */
  color: #f58549;
  margin-bottom: 2rem;
  margin-top: 2rem;

  @media screen and (min-width: 1025px) {
    font-size: 8vmin;
    margin-bottom: 7vmin;
  }

  @media screen and (max-width: 940px) {
    font-size: 3.5vmax;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-height: 1024px) {
    font-size: 4.7vmin;
  }
`;

export const MenuCol2Underline = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  margin-left: 1rem;
  margin-bottom: -2.3rem;

  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-height: 1024px) {
    margin-bottom: -3.7vmin;
  }
`;

export const MenuCol2ListContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuCol2ListWrapper = styled.div`
  /* background: #eec170; */
  background: #f8fffc;
  width: 16vmax;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 3rem;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 30%);

  @media screen and (max-width: 1024px) {
    width: 17vmax;
  }

  @media screen and (max-width: 940px) {
    margin-top: 2rem;
  }

  @media screen and (max-width: 767px) {
    width: 17vmax;
    margin-top: 0;
  }

  @media screen and (min-height: 1024px) {
    width: 18vmin;
  }
`;

export const MenuCol2ListImg = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;

export const MenuCol2ListTitle = styled.h1`
  font-size: 1.7vmax;
  /* color: #772f1a; */
  color: #f58549;
  text-align: center;

  @media screen and (max-width: 830px) {
    font-size: 1.47vmax;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.7vmax;
  }
`;

export const MenuCol2ListDescr = styled.p`
  font-size: 1.2vmax;
  text-align: center;
  /* color: #772f1a; */
  color: #f58549;
  margin: -0.5vmax auto;

  @media screen and (max-width: 830px) {
    font-size: 1vmax;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.2vmax;
  }
`;

export const MenuCol2ListPrice = styled.p`
  font-size: 1.5vmax;
  /* color: #772f1a; */
  color: #f58549;
  text-align: center;

  @media screen and (max-width: 830px) {
    font-size: 1.3vmax;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.5vmax;
  }
`;

export const MenuCol2ListValue = styled.div`
  display: none;
`;
