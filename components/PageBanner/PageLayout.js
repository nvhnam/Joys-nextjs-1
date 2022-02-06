import styled from "styled-components";

const PageLayoutContainer = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  max-width: 2000px;
  top: 0;
  left: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  text-align: center;
  z-index: 3;
`;

export default function PageLayout() {
  return (
    <>
      <PageLayoutContainer />
    </>
  );
}
