import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/Button/ButtonElement";
import about1 from "../public/img/About1.jpg";
import {
  HomeContainer,
  HomeWrapper,
  HomeRow2,
  HomeCol1,
  HomeCol2,
  HomeCol1Wrapper,
  HomeCol12Wrapper,
  HomeCol12Text1,
  HomeCol12Text2,
  HomeCol12Para,
  HomeCol12Button,
  HomeCol2Wrapper,
  HomeCol2Text1,
  HomeCol2Underline,
  FacebookPostWrapper,
  FacebookPostWrapper1,
} from "../components/Home/HomeElement";
import Home1 from "../components/Home/Home1";
import React from "react";
import { FacebookProvider, EmbeddedPost } from "react-facebook";
export default function Home() {
  return (
    <>
      <Head>
        <title>Joys Bakery</title>
        <meta name="description" content="Joys coffee and bakery homepage" />
        <link rel="Joys icon" href="./img/LogoTrans1.png" />
      </Head>
      <HomeContainer>
        <HomeWrapper>
          <Home1 />
          <HomeRow2>
            <HomeCol1>
              <HomeCol1Wrapper>
                <Image
                  className="MenuImg"
                  layout="responsive"
                  src={about1}
                  alt="Joys coffee and bakery menu picture"
                />
                <HomeCol12Wrapper>
                  <HomeCol12Text1>About</HomeCol12Text1>
                  <HomeCol12Text2>Coffee and Cake</HomeCol12Text2>
                  <HomeCol12Para>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum animi velit amet maiores iste numquam corporis quia
                    dolore. Minus, iusto?
                  </HomeCol12Para>
                  <HomeCol12Button>
                    <Link href="/about" passHref>
                      <Button
                        isBig={false}
                        isBlack={true}
                        isWhite={true}
                        bigFont={false}
                        withBorder={false}
                      >
                        Read more
                      </Button>
                    </Link>
                  </HomeCol12Button>
                </HomeCol12Wrapper>
              </HomeCol1Wrapper>
            </HomeCol1>
            <HomeCol2>
              <HomeCol2Wrapper>
                <HomeCol2Text1>Lastest Post</HomeCol2Text1>
                <HomeCol2Underline />
                <FacebookPostWrapper>
                  {/* <FacebookProvider appId="3032674603645034">
                    <EmbeddedPost
                      href="https://www.facebook.com/JoySBakery2022/posts/1061489511373564"
                      width="300"
                      height="auto"
                    />
                  </FacebookProvider> */}
                </FacebookPostWrapper>
              </HomeCol2Wrapper>
            </HomeCol2>
          </HomeRow2>
        </HomeWrapper>
      </HomeContainer>
    </>
  );
}
