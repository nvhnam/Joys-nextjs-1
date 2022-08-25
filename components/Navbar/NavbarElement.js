import styled from "styled-components";

export const Nav = styled.nav`
  height: 81px;
  width: 100%;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 10;
  position: sticky;
  margin-top: -81px;
  /* background: ${({ scrollNav }) =>
    scrollNav ? "#772f1a" : "transparent"}; */
  background: ${({ scrollNav }) => (scrollNav ? "white" : "transparent")};
  transition: all 0.3s ease-in-out;
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? "5px 5px 15px 5px rgba(0, 0, 0, 10%)" : "none"};

  @media screen and (min-width: 1025px) {
    height: 14vmin;
    margin-top: -14vmin;
  }

  @media screen and (max-width: 767px) {
    margin-top: 0;
    /* background: #772f1a; */
    background: #f8fffc;
  }
`;

export const NavContainer = styled.div`
  height: 81px;
  width: 100%;
  /* max-width: 2400px; */
  display: flex;
  justify-items: space-between;
  align-content: center;
  /* position: relative; */

  @media screen and (min-width: 1025px) {
    height: auto;
    padding: 2vmax;
  }

  @media screen and (max-width: 767px) {
    justify-items: center;
    justify-content: center;
    justify-self: center;
  }
`;

export const NavLogo = styled.div`
  display: block;
  justify-self: start;
  align-self: center;
  width: 4.3rem;
  height: auto;
  /* position: relative; */
  cursor: pointer;

  @media screen and (min-width: 1025px) {
    margin-left: 4vmin;
    width: 11vmin;
    width: 4vmax;
  }

  @media screen and (max-width: 1024px) {
    width: 4.1rem;
  }

  @media screen and (max-width: 767px) {
    /* width: 4rem;
    margin-left: 8.35rem; */
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 11;
    justify-self: center;
    justify-content: center;
    align-items: center;
    /* margin-left: 6vmin; */
  }
`;

export const NavLogoText = styled.h1`
  font-size: 1.8rem;
  /* font-family: "Atma", cursive; */
  /* font-family: "Short Stack", cursive; */
  font-family: "Sue Ellen Francisco", cursive;
  color: #f8fffc;
  position: absolute;
  align-items: center;
  justify-content: center;
  letter-spacing: 7px;
  /* top: -1rem; */
  margin-top: 0rem;
  left: 1rem;
  word-spacing: -0.3rem;
  margin-left: 7.5rem;
  display: ${({ scrollNav }) => (scrollNav ? "none" : "flex")};

  @media screen and (min-width: 1025px) {
    /* top: -1vw; */
    /* margin-top: -1vmin; */
    top: 1.3vmin;
    font-size: 5vmin;
    left: auto;
    /* margin-left: 17.5vmin; */
    margin-left: 8vmax;
  }

  @media screen and (max-width: 1024px) {
    margin-left: 6.3rem;
  }

  @media screen and (max-width: 940px) {
    font-size: 1.4rem;
    margin-top: 0.8vmin;
    margin-left: 6rem;
  }

  @media screen and (max-width: 767px) {
    /* margin-top: 2vmin; */
    letter-spacing: 5px;
    word-spacing: 1.4rem;
    /* word-spacing: 7vmin; */
    word-spacing: 3.5vmax;
    /* display: flex; */
    /* left: 3.7vmax; */
    top: 20%;
    margin-left: 8vmax;
    /* margin: -20vmin; */
    font-size: 1.3rem;
    /* top: 20%; */
    /* justify-items: center; */
    z-index: 12;
    /* margin-left: 4.1rem; */
  }

  @media screen and (width: 414px) {
    margin-left: 5.3rem;
  }

  @media screen and (width: 320px) {
    margin-left: 2.5rem;
    font-size: 1.2rem;
    margin-top: 3vmin;
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
  width: ${({ scrollNav }) => (scrollNav ? "200%" : "100%")};
  max-width: 6.5rem;
  min-width: ${({ scrollNav }) => (scrollNav ? "6.5rem" : "0")};
  height: 100%;
  max-height: ${({ scrollNav }) => (scrollNav ? "80px" : "none")};
  transition: all 0.3s ease;
  margin-left: 1rem;
  background: white;
  border-radius: 50%;
  overflow: hidden;
  margin-top: -0.5rem;

  @media screen and (min-width: 1025px) {
    margin-left: 2.7vmin;
  }

  @media screen and (max-width: 1024px) {
    margin-left: 1.7rem;
  }

  @media screen and (max-width: 767px) {
    /* margin-left: 1.5rem; */
    z-index: 15;
    position: relative;
    /* width: 7%; */
    /* width: 3.5rem; */
    /* width: 7vmax; */
    margin-top: 0vmax;
    /* width: 12vmax; */
    min-width: 6.6rem;
    max-width: 6.6rem;
    margin-left: 6.5vmin;
    /* height: auto; */
    /* position: absolute; */
  }

  @media screen and (width: 414px) {
    width: 11.3vmax;
  }

  @media screen and (max-width: 376px) {
    width: 15vmax;
  }
`;

export const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: flex;
    align-content: center;
    transform: translate(-65%, 35%);
    /* color: whitesmoke; */
    color: #f58549;
    margin-left: auto;
    top: 0;
    right: 0;
    font-size: 1.7rem;
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
  /* color: #f8fffc; */
  color: #f58549;
  color: ${({ scrollNav }) => (scrollNav ? "#f58549" : "#f8fffc")};
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

  @media screen and (min-width: 1025px) {
    /* padding: 1vmin 5.3vmin; */
    /* font-size: 3.4vmin; */
    padding: 1vmin 1.9vw;
    /* font-size: 1.5vw; */
    font-size: 1.3vmax;
  }

  @media screen and (max-width: 940px) {
    font-size: 1rem;
    padding: 0.5rem 1.3rem;
  }
`;
