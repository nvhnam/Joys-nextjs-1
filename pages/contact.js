import Head from "next/head";
import PageBanner from "../components/PageBanner/PageBanner";
import PageLayout from "../components/PageBanner/PageLayout";
import {
  PageBannerTitle,
  BannerContainer,
} from "../components/About/AboutElement";
import {
  ContactCol1,
  ContactContainer,
  ContactWrapper,
  ContactRow,
  ContactCol2,
} from "../components/Contact/ContactElement";
import Contact1 from "../components/Contact/Contact1/Contact1";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Joys Bakery</title>
        <meta name="description" content="Joys coffee and bakery contact" />
        <link rel="Joys icon" href="./img/LogoTrans1.png" />
      </Head>
      <BannerContainer>
        <PageBanner />
        <PageBannerTitle>CONTACT</PageBannerTitle>
        <PageLayout />
      </BannerContainer>
      <ContactContainer>
        <ContactWrapper>
          <ContactRow>
            <ContactCol1>
              <Contact1/>
            </ContactCol1>
            <ContactCol2></ContactCol2>
          </ContactRow>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
}
