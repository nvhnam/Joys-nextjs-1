import Image from "next/image";
import Link from "next/link";
import about2 from "../../public/img/About2.jpg";
import {
  Home1Container,
  HomeImg,
  HomeRow1,
  HomeText1,
  HomeText2,
  HomePara,
  HomeLink,
} from "./Home1Element";

export default function Home1() {
  return (
    <>
      <Home1Container>
        <HomeImg>
          <Image
            src={about2}
            layout="responsive"
            alt="Joys coffee and bakery home picture"
          />
          <HomeRow1>
            <HomeText1>Welcome to Joys</HomeText1>
            <HomeText2>With Joys - always the good choice</HomeText2>
            <HomePara>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              dolor nisi aut enim rem voluptatem tempora excepturi minus
              consectetur quia. Fugit veritatis aliquam doloribus ea.
            </HomePara>
            <HomePara>
              Read more
              <Link href="./about" passHref>
                <HomeLink>here</HomeLink>
              </Link>
            </HomePara>
          </HomeRow1>
        </HomeImg>
      </Home1Container>
    </>
  );
}
