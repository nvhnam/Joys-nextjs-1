import styled from "styled-components";

export const SidebarContainer = styled.div`
  top: 0;
  right: 0;
  position: fixed;
  display: grid;
  align-items: center;
  background: #e28743;
  color: #fff;
  height: 100%;
  width: 100%;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  right: ${({ isOpen }) => (isOpen ? "0%" : "-100%")};
  transition: all 0.2s ease-in-out;
  z-index: 999;
`;

export const CloseIcon = styled.div`
  display: flex;
  color: whitesmoke;
  font-size: 1.8rem;
  cursor: pointer;
  justify-self: flex-end;
  transform: translate(-100%, 30%);
`;

export const SidebarWrapper = styled.div`
  color: whitesmoke;
`;

export const SidebarMenu = styled.div`
  display: grid;
  list-style: none;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
`;

export const SidebarLink = styled.a`
  text-decoration: none;
  font-size: 1.3rem;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.2s ease-in-out;

  &:active {
    transition: all 0.2s ease-in-out;
    color: #010606;
    background: #fff;
  }
`;
