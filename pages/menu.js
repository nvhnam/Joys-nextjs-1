import Head from "next/head";
import { useState } from "react";
import {
  BannerContainer,
  PageBannerTitle,
} from "../components/About/AboutElement";
import PageBanner from "../components/PageBanner/PageBanner";
import PageLayout from "../components/PageBanner/PageLayout";
import {
  MenuContainer,
  MenuWrapper,
  MenuRow,
  MenuCol1,
  MenuCol1Wrapper,
  MenuCol1Title,
  MenuCol2,
  MenuCol2Wrapper,
  MenuCol2Title,
  MenuCol2ListContainer,
  MenuCol2ListWrapper,
  MenuCol2ListImg,
  MenuCol2ListTitle,
  MenuCol2ListDescr,
  MenuCol2ListPrice,
} from "../components/Menu/MenuElement";
import {
  Home2Title,
  Home2Underline1,
  Home2ButtonWrapper,
  Home2Buttons,
  Home2Row,
  Home2MenuContainer,
  Home2MenuWrapper,
  Home2MenuImg,
  Home2MenuTitle,
  Home2MenuPrice,
} from "../components/Home/Home2/Home2Element";
import Categories from "../components/Menu/MenuData";
import Image from "next/image";

export default function Menu() {
  // const [data, setData] = useState(Categories);
  // const filterResult = (catItem) => {
  //   const result = Categories.filter((curData) => {
  //     return curData.kind === catItem;
  //   });
  //   setData(result);
  // };

  return (
    <>
      <Head>
        <title>Joys Bakery</title>
        <meta name="description" content="Joys coffee and bakery menu" />
        <link rel="Joys icon" href="./img/LogoTrans1.png" />
      </Head>
      <BannerContainer>
        <PageBanner />
        <PageBannerTitle>MENU</PageBannerTitle>
        <PageLayout />
      </BannerContainer>
      <MenuContainer>
        <MenuWrapper></MenuWrapper>
      </MenuContainer>
      {/* <MenuContainer>
        <MenuWrapper>       
          <MenuTitle>JOYS Combo</MenuTitle>
          <Home2Underline1 />
          <MenuComboWrapper>
            <MenuRow>
              <MenuCol1></MenuCol1>
              <MenuCol2></MenuCol2>
            </MenuRow>
          </MenuComboWrapper>      
          <Home2Title>Discover our menu</Home2Title>
          <Home2Underline1 />
          <Home2ButtonWrapper>
            <Home2Buttons onClick={() => setData(Categories)}>All</Home2Buttons>
            <Home2Buttons onClick={() => filterResult("drink")}>
              Drink
            </Home2Buttons>
            <Home2Buttons onClick={() => filterResult("cake")}>
              Cake
            </Home2Buttons>
          </Home2ButtonWrapper>
          <Home2Row>
            {data.map((values) => {
              const { id, image, title, price, alt } = values;
              return (
                <>
                  <Home2MenuContainer key={id}>
                    <Home2MenuWrapper>
                      <Home2MenuImg>
                        <Image
                          src={image}
                          alt={alt}
                          className="Home2Img"
                          layout="responsive"
                        />
                      </Home2MenuImg>
                      <Home2MenuTitle>{title}</Home2MenuTitle>
                      <Home2MenuPrice>{price}</Home2MenuPrice>
                    </Home2MenuWrapper>
                  </Home2MenuContainer>
                </>
              );
            })}
          </Home2Row>
        </MenuWrapper>
      </MenuContainer> */}

      {/*  Ver 2  */}

      {/* <MenuContainer>
        <MenuWrapper>
          <MenuRow>
            <MenuCol1>
              <MenuCol1Wrapper>
                <MenuCol1Title onClick={() => filterResult("Special Joys")}>
                  Special Joys
                </MenuCol1Title>
                <MenuCol1Title onClick={() => filterResult("Joys Combo")}>
                  Joys Combo
                </MenuCol1Title>
                <MenuCol1Title onClick={() => filterResult("Cakes")}>
                  Cakes
                </MenuCol1Title>
                <MenuCol1Title onClick={() => filterResult("Coffee")}>
                  Coffee
                </MenuCol1Title>
                <MenuCol1Title onClick={() => filterResult("Tea")}>
                  Tea
                </MenuCol1Title>
              </MenuCol1Wrapper>
            </MenuCol1>
            <MenuCol2>
              {data.map((values) => {
                const { id, image, alt, title, price, descr, kind } = values;
                return (
                  <MenuCol2Wrapper>
                    <MenuCol2Title>{kind}</MenuCol2Title>
                    <MenuCol2ListContainer key={id}>
                      <MenuCol2ListWrapper>
                        <MenuCol2ListImg>
                          <Image
                            src={image}
                            alt={alt}
                            className="Home2Img"
                            layout="responsive"
                          />
                        </MenuCol2ListImg>
                        <MenuCol2ListTitle>{title}</MenuCol2ListTitle>
                        <MenuCol2ListDescr>{descr}</MenuCol2ListDescr>
                        <MenuCol2ListPrice>{price}</MenuCol2ListPrice>
                      </MenuCol2ListWrapper>
                    </MenuCol2ListContainer>
                  </MenuCol2Wrapper>
                );
              })}
            </MenuCol2>
          </MenuRow>
        </MenuWrapper>
      </MenuContainer> */}
    </>
  );
}
