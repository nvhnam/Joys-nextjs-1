import styled from "styled-components";

export const Button = styled.button`
  white-space: nowrap;
  text-decoration: none;
  outline: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  border: ${({ withBorder }) => (withBorder ? "2px solid black" : "none")};
  border-radius: 20px;
  cursor: pointer;
  color: ${({ isBlack }) => (isBlack ? "black" : "white")};
  padding: ${({ isBig }) => (isBig ? "15px 75px" : "12px 40px")};
  background-color: ${({ isWhite }) => (isWhite ? "white" : "#772f1a")};
  font-size: ${({ bigFont }) => (bigFont ? "26px" : "23px")};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ isWhite }) => (isWhite ? "black" : "white")};
    color: ${({ isBlack }) => (isBlack ? "white" : "black")};
    border: none;
  }

  @media screen and (max-width: 940px) {
    padding: 10px 50px;
    font-size: 2.1vmax;
  }

  @media screen and (max-width: 767px) {
    padding: 1vmax 4.7vmax;
    font-size: 1.9vmax;
  }
`;
