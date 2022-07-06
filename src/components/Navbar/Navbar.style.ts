import styled from 'styled-components'
import logo from '../../assets/images/logotext_white.svg'

export const Nav = styled.nav`
    height: 80px;
    padding: 0 10px;
    background-color: #0D0D11;
    display: flex;
    flex-shrink: 0;
    justify-content: space-between;
    align-items: center;
    font-family: 'Basis Grotesque Pro', sans-serif;
`;
export const NavLink = styled.button`
    width: 131px;
    height: 28px;
    font-size: 16px;
    font-weight: 300;
    color: #9e9e9e;
    border: none;
    outline: none;
    background-color: transparent;
    font-family: 'Basis Grotesque Pro', sans-serif;
    text-transform: uppercase;
    cursor: pointer;
    transition: ease 250ms;
    &:hover {
        color: #FFF;
    }
`;
export const Logo = styled.div`
    width: 110.4px;
    height: 42px;
    background-image: url(${logo});
`;
export const NavbarButtons = styled.div`
    display: flex;
`;