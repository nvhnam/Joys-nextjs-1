import Image from "next/image";
import background2 from "../../public/img/Background2.jpg";
import background4 from "../../public/img/Background4.jpg";
import transBackground from "../../public/img/TransBackground2.png";
import { HeroContainer, HeroWrapper, HeroImg } from "./HeroSectionElement";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <HeroWrapper>
          <Carousel
            swipeable={true}
            emulateTouch={true}
            autoPlay={true}
            interval={5000}
            transitionTime={800}
            infiniteLoop={true}
            showThumbs={false}
          >
            <HeroImg>
              <Image
                src={background4}
                layout="fill"
                objectFit="cover"
                alt="Joys bakery"
                loading="lazy"
              />
            </HeroImg>
            <HeroImg>
              <Image
                src={transBackground}
                layout="fill"
                objectFit="cover"
                alt="Joys bakery"
                loading="lazy"
              />
            </HeroImg>
          </Carousel>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
