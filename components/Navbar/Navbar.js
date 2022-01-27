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
                <NavLink>HOME</NavLink>
              </Link>
              <Link href="/about" passHref>
                <NavLink>ABOUT</NavLink>
              </Link>
              <Link href="/menu" passHref>
                <NavLink>MENU</NavLink>
              </Link>
              <Link href="/contact" passHref>
                <NavLink>CONTACT</NavLink>
              </Link>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};
export default Navbar;
