import styled from "styled-components";

export const Nav = styled.nav`
  height: 80px;
  width: 100%;
  background: #e28743;
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
  height: 80px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-items: space-between;
  align-content: center;
`;

export const NavLogo = styled.div`
  display: flex;
  justify-self: start;
  align-content: center;
`;

export const NavLogoText = styled.h1`
  font-size: 43px;
  /* font-weight: 500; */
  /* font-family: "Atma", cursive; */
  /* font-family: "Short Stack", cursive; */
  font-family: "Sue Ellen Francisco", cursive;
  color: #f8fffc;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 8px;
  margin-left: 1.2rem;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    margin-left: 2.3rem;
  }

  @media screen and (max-width: 940px) {
    font-size: 2.35rem;
  }

  @media screen and (max-width: 767px) {
    margin-left: 1.5rem;
    font-size: 2rem;
  }
`;

export const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: flex;
    align-content: center;
    transform: translate(-100%, 30%);
    color: whitesmoke;
    margin-left: auto;
    top: 0;
    right: 0;
    font-size: 1.8rem;
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
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #632626;
    border-bottom: 3px solid #632626;
    transition: all 0.3s ease-in-out;
  }
  /* &:active {
    border-bottom: 3px solid #632626;
    transition: all 0.2s ease-in-out;
  } */

  @media screen and (max-width: 940px) {
    font-size: 1.1rem;
    padding: 0.5rem 1.3rem;
  }
`;
