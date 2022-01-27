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
              <SidebarLink onClick={toggle}>HOME</SidebarLink>
            </Link>
            <Link href="/about" passHref>
              <SidebarLink onClick={toggle}>ABOUT</SidebarLink>
            </Link>
            <Link href="/menu" passHref>
              <SidebarLink onClick={toggle}>MENU</SidebarLink>
            </Link>
            <Link href="/contact" passHref>
              <SidebarLink onClick={toggle}>CONTACT</SidebarLink>
            </Link>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
