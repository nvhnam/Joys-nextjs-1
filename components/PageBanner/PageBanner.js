import Image from "next/image";
import styled from "styled-components";
import transbackground from "../../public/img/TransBackground.png";

const AppBackground = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  max-width: 2000px;
  margin-bottom: -1rem;
  z-index: 2;
`;

export default function PageBanner() {
  return (
    <>
      <AppBackground>
        <Image src={transbackground} layout='responsive' />
      </AppBackground>
    </>
  );
}
