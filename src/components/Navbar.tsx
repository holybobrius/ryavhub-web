import { FC } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logotext_white.svg'
import LoginButton from './LoginButton'
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Nav = styled.nav`
    height: 60px;
    padding: 0 10px;
    background-color: #191B1F;
    display: flex;
    flex-shrink: 0;
    justify-content: space-between;
    align-items: center;
    font-family: 'Basis Grotesque Pro', sans-serif;
`;
const NavLink = styled.button`
    width: 131px;
    height: 28px;
    font-size: 16px;
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
const Logo = styled.div`
    width: 110.4px;
    height: 42px;
    background-image: url(${logo});
`;
const NavbarButtons = styled.div`
    display: flex;
`;

const Navbar: FC = () => {
    const reduxStore = useSelector<RootState>(state => state.googleUser)
    if(reduxStore === null) {
        return(
            <></>
        )
    }
    return(
        <Nav>
            <Link to="/">
                <Logo/>
            </Link>
            <NavbarButtons>
                <Link to="/quotes">
                    <NavLink>цитаты</NavLink>
                </Link>
                <Link to="/timeline">
                    <NavLink>таймлайн</NavLink>
                </Link>
                <Link to="/gamesaves">
                    <NavLink>сейвы</NavLink>
                </Link>
            </NavbarButtons>
            <LoginButton/>
        </Nav>
    )
}
export default Navbar
