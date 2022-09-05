import styled from "styled-components";

export const Button = styled.button`
  white-space: nowrap;
  text-decoration: none;
  outline: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  border: ${({ withBorder }) => (withBorder ? "2px solid #585123" : "none")};
  border-radius: 20px;
  cursor: pointer;
  color: ${({ isBlack }) => (isBlack ? "#585123" : "white")};
  padding: ${({ isBig }) => (isBig ? "15px 75px" : "10px 29px")};
  background-color: ${({ isWhite }) => (isWhite ? "white" : "#f58549")};
  font-size: ${({ bigFont }) => (bigFont ? "26px" : "17px")};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ isWhite }) => (isWhite ? "#585123" : "white")};
    color: ${({ isBlack }) => (isBlack ? "white" : "#f58549")};
    outline: 3px solid #f58549;
    /* border: none; */
  }

  @media screen and (min-width: 1025px) {
    padding: ${({ isBig }) => (isBig ? "1.8vmin 9vmin" : "1.9vmin 7vmin")};
    font-size: ${({ bigFont }) => (bigFont ? "4.3vmin" : "3vmin")};
  }

  @media screen and (max-width: 940px) {
    padding: 0.9vmax 3.8vmax;
    font-size: 1.5vmax;
  }

  @media screen and (max-width: 767px) {
    padding: 0.9vmax 3.7vmax;
    font-size: 1.7vmax;
  }
`;
