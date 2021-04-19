import { Link } from 'react-router-dom';
import { Button } from 'antd';
import '../styles/Navbar.css';
import logo from '../assets/img/logotext.svg'
import styled from 'styled-components'
import React from 'react'

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

interface Props {
    onClick: any;
}

const Navbar: React.FC<Props> = (props: Props) => {
    //<Link className="navbar-buttons--button" ></Link>
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
            <Button type="primary" shape="round" size="large" className="login" onClick={props.onClick}>Login</Button>
        </Nav>
    );
}
export default Navbar;