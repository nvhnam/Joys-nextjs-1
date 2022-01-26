import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavLogoText,
  MenuIcon,
  NavMenu,
  NavItem,
  NavLink,
} from "./NavbarElement";
import Head from "next/head";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Atma:wght@400;500&family=Short+Stack&family=Sue+Ellen+Francisco&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav>
        <NavContainer>
          <NavLogo>
            <NavLogoText>JOYS</NavLogoText>
          </NavLogo>
          <MenuIcon onClick={toggle}>
            <FaBars />
          </MenuIcon>
          <NavMenu>
            <NavItem>
              <Link href="/" passHref>
                <NavLink>Home</NavLink>
              </Link>
              <Link href="/about" passHref>
                <NavLink>About</NavLink>
              </Link>
              <Link href="/menu" passHref>
                <NavLink>Menu</NavLink>
              </Link>
              <Link href="/contact" passHref>
                <NavLink>Contact</NavLink>
              </Link>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};
export default Navbar;
