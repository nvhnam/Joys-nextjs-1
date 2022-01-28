import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavLogoText,
  NavLogoText2,
  NavLogoImg,
  MenuIcon,
  NavMenu,
  NavItem,
  NavLink,
} from "./NavbarElement";
import Image from "next/image";
import logo2 from "../../public/img/Logo2.png";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo>
            <NavLogoText>coffee & bakery</NavLogoText>
            <NavLogoImg>
              <Image
                className="NavLogo"
                src={logo2}
                layout="responsive"
                alt="Joys coffee and bakery logo"
              />
            </NavLogoImg>
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
