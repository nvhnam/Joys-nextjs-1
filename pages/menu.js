import Head from "next/head";
import { useState } from "react";
import {
  BannerContainer,
  PageBannerTitle,
} from "../components/About/AboutElement";
import PageBanner from "../components/PageBanner/PageBanner";
import PageLayout from "../components/PageBanner/PageLayout";
// import { BsChevronDown } from "react-icons/bs";
import {
  MenuContainer,
  MenuWrapper,
  MenuRow,
  MenuCol1,
  MenuCol1Wrapper,
  MenuCol1Title,
  MenuCol2,
  MenuCol2Wrapper,
  MenuCol2Drop,
  MenuCol2Option,
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
import MenuFull from "../components/Menu/MenuData";
import Image from "next/image";

export default function Menu() {
  // const [data, setData] = useState(Categories);
  // const filterResult = (catItem) => {
  //   const result = Categories.filter((curData) => {
  //     return curData.kind === catItem;
  //   });
  //   setData(result);
  // };

  const [item, setItem] = useState(MenuFull);
  const filterMenu = (menuItem) => {
    const menuResult = MenuFull.filter((curItem) => {
      return curItem.label === menuItem;
    });
    setItem(menuResult);
  };

  const [open, setOpen] = useState(false);
  const IsOpen = () => {
    setOpen(!open);
  };
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
      {/* <MenuContainer>
        <MenuWrapper></MenuWrapper>
      </MenuContainer> */}
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

      <MenuContainer>
        <MenuWrapper>
          <MenuRow>
            <MenuCol1>
              <MenuCol1Wrapper>
                <MenuCol1Title onClick={() => setItem(MenuFull)}>
                  All
                </MenuCol1Title>
                <MenuCol1Title onClick={() => filterMenu("Special Joys")}>
                  Special Joys
                </MenuCol1Title>
                <MenuCol1Title onClick={() => filterMenu("Joys Combo")}>
                  Joys Combo
                </MenuCol1Title>
                <MenuCol1Title onClick={() => filterMenu("Cakes")}>
                  Cakes
                </MenuCol1Title>
                <MenuCol1Title onClick={() => filterMenu("Coffee")}>
                  Coffee
                </MenuCol1Title>
                <MenuCol1Title onClick={() => filterMenu("Tea")}>
                  Tea
                </MenuCol1Title>
              </MenuCol1Wrapper>
            </MenuCol1>
            {/* <MenuCol2Drop>
              <Select
                components={makeAnimated()}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={item}
                placeholder="Pick your menu..."
                onMenuOpen={setOpen}
                onMenuClose={setOpen}
                isSearchable={false}
                isMulti={false}
                autoFocus={true}
              />
            </MenuCol2Drop> */}
            <MenuCol2Drop
              placeholder="Pick your menu..."
              // onClick={() => setOpen((prev) => !prev)}
              onTouchEnd={() => setOpen((prev) => !prev)}
            >
              <MenuCol2Option
                // onClick={() => {
                //   setItem(MenuFull);
                //   setOpen = false;
                // }}
                onTouchEnd={() => {
                  setItem(MenuFull);
                  setOpen = false;
                }}
              >
                All
              </MenuCol2Option>
              <MenuCol2Option
                // onClick={() => {
                //   filterMenu("Special Joys");
                //   setOpen = false;
                // }}
                onTouchEnd={() => {
                  filterMenu("Special Joys");
                  setOpen = false;
                }}
              >
                Special Joys
              </MenuCol2Option>
              <MenuCol2Option
                // onClick={() => {
                //   filterMenu("Joys Combo");
                //   setOpen = false;
                // }}
                onTouchEnd={() => {
                  filterMenu("Joys Combo");
                  setOpen = false;
                }}
              >
                Joys Combo
              </MenuCol2Option>
              <MenuCol2Option
                // onClick={() => {
                //   filterMenu("Cakes");
                //   setOpen = false;
                // }}
                onTouchEnd={() => {
                  filterMenu("Cakes");
                  setOpen = false;
                }}
              >
                Cakes
              </MenuCol2Option>
              <MenuCol2Option
                // onClick={() => {
                //   filterMenu("Coffee");
                //   setOpen = false;
                // }}
                onTouchEnd={() => {
                  filterMenu("Coffee");
                  setOpen = false;
                }}
              >
                Coffee
              </MenuCol2Option>
              <MenuCol2Option
                // onClick={() => {
                //   filterMenu("Tea");
                //   setOpen = false;
                // }}
                onTouchEnd={() => {
                  filterMenu("Tea");
                  setOpen = false;
                }}
              >
                Tea
              </MenuCol2Option>
            </MenuCol2Drop>
            <MenuCol2>
              {item.map((values) => {
                const { id, image, alt, title, price, descr } = values;
                return (
                  <MenuCol2Wrapper key={id}>
                    {/* <MenuCol2Title></MenuCol2Title> */}
                    <MenuCol2ListContainer>
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
      </MenuContainer>
    </>
  );
}
