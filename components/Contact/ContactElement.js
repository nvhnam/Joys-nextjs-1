import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  background: #f4a75d;
  width: 100%;
  height: 100%;
`;

export const ContactWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1400px;
  margin-top: 5rem;
  margin-bottom: 6rem;
  padding: 1rem 1rem;
`;

export const ContactRow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ContactCol1 = styled.div`
  width: 50%;
  height: 100%;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const ContactCol2 = styled.div`
  width: 50%;
  height: 100%;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
