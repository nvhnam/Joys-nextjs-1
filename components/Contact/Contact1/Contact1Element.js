import styled from "styled-components";

export const Contact1Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eec170;
  border-radius: 10px;

`;

export const Contact1Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;

  @media screen and (min-width: 1025px) {
    padding: 2.6vmin;
  }

  @media screen and (max-width: 940px) {
    padding: 0.8vmax;
  }
`;

export const Contact1Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: #772f1a;
  margin: 2rem 0;

  @media screen and (min-width: 1025px) {
    font-size: 6.8vmin;
    margin: 5.5vmin 0;
  }

  @media screen and (max-width: 940px) {
    font-size: 2.9vmax;
    margin: 1.8vmax 0;
  }
`;

export const Contact1Form = styled.form`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 1025px) {
    padding: 2.7vmin;
  }

  @media screen and (max-width: 940px) {
    padding: 0.6vmax;
  }
`;

export const Contact1Label = styled.input`
  width: 90%;
  height: 100%;
  font-size: 1.1rem;
  padding: 0.8rem;
  border-radius: 10px;
  border: none;
  display: flex;

  @media screen and (min-width: 1025px) {
    padding: 2.3vmin;
    font-size: 3vmin;
  }

  @media screen and (max-width: 940px) {
    padding: 0.9vmax;
  }
  @media screen and (max-width: 767px) {
    padding: 1vmax;
    font-size: 1.4vmax;
    width: 86%;
  }
`;

export const Contact1Span = styled.span`
  color: red;
  font-size: 1rem;
  padding: 0.8rem 0 1.5rem 0.5rem;

  @media screen and (min-width: 1025px) {
    font-size: 2.8vmin;
    padding: 1.6vmin 0 2.8vmin 0.7vmin;
  }

  @media screen and (max-width: 940px) {
    padding: 0.6vmax 0 1.5vmax 0.3vmax;
    font-size: 1.1vmax;
  }
`;

export const Contact1Message = styled.textarea`
  width: 90%;
  height: 200px;
  font-size: 1.1rem;
  overflow-y: auto;
  padding: 0.8rem;
  border-radius: 10px;
  border: none;
  margin-top: 1rem;
  margin-bottom: 0.5rem;

  @media screen and (min-width: 1025px) {
    padding: 1.8vmin;
    font-size: 3vmin;
    margin-top: 2.7vmin;
    margin-bottom: 1.3vmin;
    height: 34vmin;
  }

  @media screen and (max-width: 940px) {
    margin-bottom: 0.3vmax;
  }
  @media screen and (max-width: 767px) {
    padding: 1.3vmax;
    font-size: 1.4vmax;
    width: 86%;
  }
`;

export const Contact1Submit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.3rem 0;

  @media screen and (max-width: 940px) {
    margin: 1.4vmax 0;
  }
`;
