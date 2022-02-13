import Head from "next/head";
import styled from "styled-components";
import PageBanner from "../components/PageBanner/PageBanner";

const ContactContainer = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4a75d;
`;

const Contact1 = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: #f8fffc;
`;

export default function Contact() {
  return (
    <>
      <Head>
        <title>Joys Bakery</title>
        <meta name="description" content="Joys coffee and bakery contact" />
        <link rel="Joys icon" href="./img/LogoTrans1.png" />
      </Head>
      <PageBanner />
      <ContactContainer>
        <Contact1>Contact</Contact1>
      </ContactContainer>
    </>
  );
}
