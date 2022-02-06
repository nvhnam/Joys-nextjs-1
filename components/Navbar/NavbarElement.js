import styled from "styled-components";

export const Nav = styled.nav`
  height: 81px;
  width: 100%;
  background: #772f1a;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 10;
  position: sticky;
  /* background: transparent; */
`;

export const NavContainer = styled.div`
  height: 81px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-items: space-between;
  align-content: center;
`;

export const NavLogo = styled.div`
  display: block;
  justify-self: start;
  align-self: center;
  width: 4.3rem;
  height: auto;

  @media screen and (max-width: 940px) {
    width: 4.3rem;
  }

  @media screen and (max-width: 767px) {
    width: 4rem;
    margin-left: 8.35rem;
  }
`;

export const NavLogoText = styled.h1`
  font-size: 1.8rem;
  /* font-family: "Atma", cursive; */
  /* font-family: "Short Stack", cursive; */
  font-family: "Sue Ellen Francisco", cursive;
  color: #f8fffc;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  letter-spacing: 7px;
  top: -1rem;
  left: 1rem;
  word-spacing: -0.3rem;
  margin-left: 7.5rem;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    margin-left: 6.3rem;
  }

  @media screen and (max-width: 940px) {
    font-size: 1.3rem;
    top: 0;
    margin-left: 6rem;
  }

  @media screen and (max-width: 767px) {
    top: 0rem;
    letter-spacing: 5px;
    word-spacing: 1.4rem;
    font-size: 1.3rem;
    margin-left: 4.1rem;
  }

  @media screen and (width: 414px) {
    margin-left: 5.3rem;
  }

  @media screen and (width: 320px) {
    margin-left: 2.5rem;
    font-size: 1.2rem;
    top: 0.2rem;
  }
`;

// export const NavLogoText2 = styled.h1`
//   font-size: 1.8rem;
//   position: absolute;
//   font-family: "Sue Ellen Francisco", cursive;
//   color: #f8fffc;
//   letter-spacing: 8px;
//   top: -1rem;
//   left: 15rem;
// `;

export const NavLogoImg = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  margin-left: 1rem;

  @media screen and (max-width: 1024px) {
    margin-left: 1.7rem;
  }

  @media screen and (max-width: 767px) {
    margin-left: 1.5rem;
  }

  @media screen and (width: 414px) {
    margin-left: 2.65rem;
  }

  @media screen and (width: 320px) {
    margin-left: -0.35rem;
  }
`;

export const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: flex;
    align-content: center;
    transform: translate(-65%, 35%);
    color: whitesmoke;
    margin-left: auto;
    top: 0;
    right: 0;
    font-size: 1.6rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  text-align: center;
  margin-left: auto;
  margin-right: 20px;

  @media screen and (max-width: 940px) {
    margin-right: 0.5rem;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  align-items: center;
`;

export const NavLink = styled.a`
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.5rem 1.9rem;
  color: #f8fffc;
  height: 100%;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: #f2a65a;
    border-bottom: 3px solid #f2a65a;
    transition: all 0.2s ease;
  }
  &:active {
    border-bottom: 3px solid #632626;
  }

  @media screen and (max-width: 940px) {
    font-size: 1.1rem;
    padding: 0.5rem 1.3rem;
  }
`;
