import styled from "styled-components";
import logo from "../../assets/images/logo.svg";

export const Nav = styled.nav`
  height: 80px;
  padding: 0 10px;
  background-color: #0d0d11;
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  font-family: "Basis Grotesque Pro", sans-serif;
  z-index: 999;
`;
export const NavLink = styled.button`
  width: 187px;
  height: 28px;
  font-size: 16px;
  font-weight: 300;
  color: #9e9e9e;
  border: none;
  outline: none;
  background-color: transparent;
  font-family: "Basis Grotesque Pro", sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  transition: ease 250ms;
  &:hover {
    color: #fff;
  }
`;

export const Separator = styled.div`
  border-left: 1px solid #fff;
`;

export const Logo = styled.div`
  margin-left: 240px;
  width: 125px;
  height: 42px;
  background-image: url(${logo});
  background-repeat: no-repeat;
`;
export const NavbarButtons = styled.div`
  display: flex;
`;
