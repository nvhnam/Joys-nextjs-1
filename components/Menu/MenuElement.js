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

  /* @media screen and (max-width: 767px) {
    display: none;
  } */
`;

export const MenuCol1Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 2rem;

  @media screen and (max-width: 767px) {
    padding-top: 0;
    user-select: none;
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
    color: black;
    transition: all 0.2s ease-in-out;
    top: 0;
    left: auto;
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
  }
`;

export const MenuDropWrapper = styled.div`
  width: 100%;
  height: 100%;

  @media screen and (max-width: 767px) {
    position: absolute;
    transition: all 0.2 ease-in-out;
    top: 110%;
    left: 0;
    z-index: 9;
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    height: 385%;
    margin-left: 1rem;
    width: 90%;
    overflow-y: scroll;
    background-color: white;
  }
`;

export const MenuCol1Title = styled.button`
  cursor: pointer;
  width: 80%;
  text-decoration: none;
  padding: 2.8vmax;
  font-size: 1.8vmax;
  background: #f8fffc;
  border: none;
  font-weight: bold;
  margin-left: 1rem;
  color: black;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #f8fffc;
    background-color: black;
  }

  &.active {
    /* transition: all 0.2s ease-in-out; */
    color: white;
    background-color: black;
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
    font-size: 2.5vmin;
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
  /* display: flex;
  width: 70%;
  height: auto;
  flex-direction: column; */
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  grid-gap: 2.3vmax;
  margin-top: 1rem;
  z-index: 2;

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
  }
`;

// export const MenuCol2Drop = styled.div`
//   display: none;

//   @media screen and (max-width: 767px) {
//     width: 50%;
//     height: auto;
//     display: block;
//     text-align: center;
//     border-radius: 10px;
//     font-weight: bold;
//     font-size: 1.2rem;
//     padding: 0.2rem;
//     margin-top: -3rem;
//     margin-right: auto;
//     margin-left: auto;
//     color: black;
//     background: white;
//     position: relative;
//     transition: all 0.2s ease;
//     top: 0;
//     left: 0;
//   }
// `;

// export const MenuCol2Option = styled.option`
//   display: none;

//   @media screen and (max-width: 767px) {
//     display: block;
//     height: 100%;
//     width: auto;
//     font-size: 1.2rem;
//     margin-left: auto;
//     margin-right: auto;
//     color: black;
//     background: white;
//     position: absolute;
//     cursor: pointer;
//     text-align: center;
//     transition: all 0.2s ease;
//     top: 0;
//     left: 0;
//   }
// `;

export const MenuCol2Title = styled.div`
  font-size: 4vmax;
  font-weight: 340;
  z-index: 3;
  width: 100%;
  height: auto;
  margin-left: 1.5rem;
  font-size: 2.8rem;
  color: #f8fffc;
  margin-bottom: 2rem;
  margin-top: 2rem;

  @media screen and (max-width: 940px) {
    font-size: 3.5vmax;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-height: 1024px) {
    font-size: 4.8vmin;
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
`;

export const MenuCol2ListWrapper = styled.div`
  background: #eec170;
  width: 18.7vmax;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 3rem;

  @media screen and (max-width: 1024px) {
    width: 19vmax;
  }

  @media screen and (max-width: 940px) {
    width: 18vmax;
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
  color: #772f1a;
  text-align: center;
`;

export const MenuCol2ListDescr = styled.p`
  font-size: 1.2vmax;
  text-align: center;
  margin: -0.5vmax auto;
`;

export const MenuCol2ListPrice = styled.p`
  font-size: 1.5vmax;
  color: #772f1a;
  text-align: center;
`;

export const MenuCol2ListValue = styled.div`
  display: none;
`;
