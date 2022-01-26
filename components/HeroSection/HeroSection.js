import Image from "next/image";
import background2 from "../../public/img/background2.jpg";
import { HeroContainer, HeroWrapper } from "./HeroSectionElement";

const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <HeroWrapper>
          <Image
            src={background2}
            layout="responsive"
            alt="Joys coffee and bakery background"
          />
        </HeroWrapper>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
