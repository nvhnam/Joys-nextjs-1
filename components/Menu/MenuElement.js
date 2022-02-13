import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #f4a75d;
`;

export const MenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1400px;
  margin-top: 7rem;
  padding: 2rem 1rem;
`;

export const MenuRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const MenuCol1 = styled.div`
  display: flex;
  width: 30%;
  height: auto;
`;

export const MenuCol1Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const MenuCol1Title = styled.button`
  cursor: pointer;
  text-decoration: none;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 10px;
  background: white;
  color: black;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: white;
    background-color: black;
  }
`;

export const MenuCol2 = styled.div`
  display: flex;
  width: 70%;
  height: auto;
`;

export const MenuCol2Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const MenuCol2Title = styled.h1`
  font-size: 1rem;
  display: block;
  text-align: left;
  color: #772f1a;
`;

export const MenuCol2ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;

export const MenuCol2ListWrapper = styled.div`
  background: #eec170;
  width: 20rem;
  border-radius: 10px;
  overflow: hidden;
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
