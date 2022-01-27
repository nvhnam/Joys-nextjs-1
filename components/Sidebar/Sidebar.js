import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import {
  SidebarContainer,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElement";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <CloseIcon onClick={toggle}>
          <FaTimes />
        </CloseIcon>
        <SidebarWrapper>
          <SidebarMenu>
            <Link href="/" passHref>
              <SidebarLink onClick={toggle}>Home</SidebarLink>
            </Link>
            <Link href="/about" passHref>
              <SidebarLink onClick={toggle}>About</SidebarLink>
            </Link>
            <Link href="/menu" passHref>
              <SidebarLink onClick={toggle}>Menu</SidebarLink>
            </Link>
            <Link href="/contact" passHref>
              <SidebarLink onClick={toggle}>Contact</SidebarLink>
            </Link>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
