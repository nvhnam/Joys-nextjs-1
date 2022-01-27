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
  HomeCol2Wrapper,
  HomeCol2Text1,
  HomeCol2Text2,
  HomeCol2Para,
  HomeCol2Button,
} from "../components/Home/HomeElement";
import Home1 from "../components/Home/Home1";

export default function Home() {
  return (
    <>
      <Head>
        <title>Joys Bakery</title>
        <meta name="description" content="Joys coffee and bakery homepage" />
        <link rel="icon" href="/favicon.ico" />
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
              </HomeCol1Wrapper>
            </HomeCol1>
            <HomeCol2>
              <HomeCol2Wrapper>
                <HomeCol2Text1>Menu</HomeCol2Text1>
                <HomeCol2Text2>Coffee and Bakery</HomeCol2Text2>
                <HomeCol2Para>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  animi velit amet maiores iste numquam corporis quia dolore.
                  Minus, iusto?
                </HomeCol2Para>
                <HomeCol2Button>
                  <Link href="/menu" passHref>
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
                </HomeCol2Button>
              </HomeCol2Wrapper>
            </HomeCol2>
          </HomeRow2>
        </HomeWrapper>
      </HomeContainer>
    </>
  );
}
