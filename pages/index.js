import Head from "next/head";
import styled from "styled-components";

const HomeContainer = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4a75d;
`;

const Home1 = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: #f8fffc;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Joys Bakery</title>
        <meta name="description" content="Joys coffee and bakery home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer>
        <Home1>Home</Home1>
      </HomeContainer>
    </>
  );
}
