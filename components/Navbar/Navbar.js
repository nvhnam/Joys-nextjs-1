import Link from "next/link";
import React, { useState, useEffect } from "react";
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
import logoTrans1 from "../../public/img/LogoTrans1.png";
import logo from "../../public/img/Logo.jpg";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const onScroll = () => {
    if (window.scrollY >= 81) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavContainer>
          <Link href="/" passHref>
            <NavLogo>
              <NavLogoText scrollNav={scrollNav}>coffee & bakery</NavLogoText>
              <NavLogoImg scrollNav={scrollNav}>
                <Image
                  className="NavLogo"
                  src={logoTrans1}
                  layout="responsive"
                  alt="Joys coffee and bakery logo"
                />
              </NavLogoImg>
            </NavLogo>
          </Link>
          <MenuIcon onClick={toggle}>
            <FaBars />
          </MenuIcon>
          <NavMenu>
            <NavItem>
              <Link href="/" passHref>
                <NavLink scrollNav={scrollNav}>HOME</NavLink>
              </Link>
              <Link href="/about" passHref>
                <NavLink scrollNav={scrollNav}>ABOUT</NavLink>
              </Link>
              <Link href="/menu" passHref>
                <NavLink scrollNav={scrollNav}>MENU</NavLink>
              </Link>
              <Link href="/contact" passHref>
                <NavLink scrollNav={scrollNav}>CONTACT</NavLink>
              </Link>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};
export default Navbar;
