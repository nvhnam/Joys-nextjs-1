import Head from "next/head";
import PageBanner from "../components/PageBanner/PageBanner";
import PageLayout from "../components/PageBanner/PageLayout";
import {
  PageBannerTitle,
  BannerContainer,
  AboutContainer,
  AboutWrapper,
  AboutRow,
  AboutCol1,
  AboutCol1Pic,
  AboutCol2,
  AboutCol2Wrapper,
  AboutCol2Title,
  AboutCol2Para,
} from "../components/About/AboutElement";
import Image from "next/image";
import about3 from "../public/img/About3.jpg";

export default function About() {
  return (
    <>
      <Head>
        <title>JoyS Bakery</title>
        <meta name="description" content="Joys bakery" />
        <link rel="JoyS icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <BannerContainer>
        <PageBanner />
        <PageBannerTitle>ABOUT</PageBannerTitle>
        <PageLayout />
      </BannerContainer>
      <AboutContainer>
        <AboutWrapper>
          <AboutRow>
            <AboutCol1>
              <AboutCol1Pic>
                <Image
                  className="Home2Img"
                  src={about3}
                  layout="responsive"
                  alt="Joys bakery"
                  loading="lazy"
                />
              </AboutCol1Pic>
            </AboutCol1>
            <AboutCol2>
              <AboutCol2Wrapper>
                <AboutCol2Title>JoyS Story</AboutCol2Title>
                <AboutCol2Para>
                  Mỗi một người trong JoyS Team đều mang những cá tính riêng, có
                  những hoài bão riêng cho đến khi gặp nhau thì lại có một ước
                  mơ chung. Đó chính là JoyS.
                </AboutCol2Para>
                <AboutCol2Para>
                  Ở JoyS chẳng bao giờ thiếu vắng tiếng cười và niềm vui cả. Bởi
                  vì Team mình luôn tin tưởng rằng niềm vui là động lực để JoyS
                  không chỉ là ngôi nhà chung của Team mà còn là một điều đặc
                  biệt đối với bạn.
                </AboutCol2Para>
              </AboutCol2Wrapper>
            </AboutCol2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
}
