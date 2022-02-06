import Head from "next/head";
import styled from "styled-components";
import PageBanner from "../components/PageBanner/PageBanner";

const MenuContainer = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4a75d;
`;

const Menu1 = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: #f8fffc;
`;


export default function Menu() {
  return (
    <>
      <Head>
        <title>Joys Bakery</title>
        <meta name="description" content="Joys coffee and bakery menu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageBanner />
      <MenuContainer>
        <Menu1>Menu</Menu1>
      </MenuContainer>
    </>
  );
}
