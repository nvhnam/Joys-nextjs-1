import Head from "next/head";
import styled from "styled-components";

const AboutContainer = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4a75d;
`;

const About1 = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: #f8fffc;
`;

export default function About() {
  return (
    <>
      <Head>
        <title>Joys Bakery</title>
        <meta name="description" content="Joys coffee and bakery information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutContainer>
        <About1>About</About1>
      </AboutContainer>
    </>
  );
}
