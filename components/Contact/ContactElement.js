import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  background: #f4a75d;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 1025px) {
    padding: 0 4vmax;
  }
`;

export const ContactWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* max-width: 1400px; */
  margin-top: 5rem;
  margin-bottom: 6rem;
  padding: 1rem 1rem;
  min-height: 65vh;

  @media screen and (max-width: 940px) {
    margin-top: 3rem;
  }

  @media screen and (max-width: 767px) {
    margin: 2rem 0 3rem 0;
  }
`;

export const ContactRow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 1.7rem;
  }
`;

export const ContactCol1 = styled.div`
  width: 42%;
  height: 100%;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const ContactCol2 = styled.div`
  width: auto;
  height: 100%;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
