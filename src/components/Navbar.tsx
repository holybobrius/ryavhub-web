import { Link } from 'react-router-dom';
import { Button } from 'antd';
import '../styles/Navbar.css';
import logo from '../assets/img/logotext.svg'
import styled from 'styled-components'
import React from 'react'
import LoginButton from "./LoginButton";

// Styles
const Nav = styled.nav`
    height: 50px;
    padding: 0 10px;
    background-color: #292E1E;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Oswald', sans-serif;
`;

const Logo = styled.div`
    width: 92px; 
    height: 35px;
    background-image: url(${logo});
`;

const NavbarButtons = styled.div`
    display: flex;
    gap: 10px;
`;

const Navbar: React.FC = () => {
    return (
        <Nav>
            <Link to="/"><Logo /></Link>
            <NavbarButtons>
                <Link to="/quotes">
                    <Button type="link" size="large">Цитаты)</Button>
                </Link>
                <Link to="/timeline">
                    <Button type="link" size="large">Таймлайнич)</Button>
                </Link>
                <Link to="/gamesaves">
                    <Button type="link" size="large">Сейвы)</Button>
                </Link>
            </NavbarButtons>
            <LoginButton/>
        </Nav>
    );
}
export default Navbar;
