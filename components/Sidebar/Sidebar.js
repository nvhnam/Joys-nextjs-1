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
              <SidebarLink>Home</SidebarLink>
            </Link>
            <Link href="/about" passHref>
              <SidebarLink>About</SidebarLink>
            </Link>
            <Link href="/menu" passHref>
              <SidebarLink>Menu</SidebarLink>
            </Link>
            <Link href="/contact" passHref>
              <SidebarLink>Contact</SidebarLink>
            </Link>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
