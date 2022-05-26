import Pic1 from "../../../public/img/Pic1.jpg";
import {
  Home3Container,
  Home3Wrapper,
  Home3Background,
  Home3Img,
  Home3Box,
  Home3BoxWrapper,
  Home3BoxTitle,
  Home3BoxPara,
} from "./Home3Element";

export default function Home3() {
  return (
    <>
      <Home3Container>
        <Home3Wrapper>
          <Home3Background>
            <Home3Img className="Home3Img1"></Home3Img>
            {/* <Home3Box>
              <Home3BoxWrapper>
                <Home3BoxTitle>Monday till Saturday</Home3BoxTitle>
                <Home3BoxPara>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vitae, expedita!
                </Home3BoxPara>
              </Home3BoxWrapper>
            </Home3Box> */}
          </Home3Background>
        </Home3Wrapper>
      </Home3Container>
    </>
  );
}
