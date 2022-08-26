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
import Contact2 from "../components/Contact/Contact2/Contact2";

export default function Contact() {
  return (
    <>
      <Head>
        <title>JoyS Bakery</title>
        <meta name="description" content="JoyS bakery" />
        <link rel="JoyS icon" href="./img/LogoTrans1.png" />
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
              <Contact1 />
            </ContactCol1>
            <ContactCol2>
              <Contact2 />
            </ContactCol2>
          </ContactRow>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
}
