import Image from "next/image";
import background2 from "../../public/img/Background2.jpg";
import background4 from "../../public/img/Background4.jpg";
import { HeroContainer, HeroWrapper, HeroImg } from "./HeroSectionElement";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HeroSection = () => {
  const responsive = {
    devices: {
      breakpoint: { max: 4000, min: 0 },
      item: 1,
    },
  };
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
                src={background2}
                layout="responsive"
                alt="Joys coffee and bakery background"
              />
            </HeroImg>
            <HeroImg>
              <Image
                src={background4}
                layout="fill"
                alt="Joys coffee and bakery background"
              />
            </HeroImg>
          </Carousel>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
