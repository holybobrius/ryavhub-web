import styled from 'styled-components';

export const NavbarStyled = styled.nav`
  height: 4.6rem;
  padding: 0 24rem;
  background-color: #0d0d11;
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  position: fixed;
  width: 100%;
 @media (max-width: 1440px) {
    padding: 0 10rem;
  }
`