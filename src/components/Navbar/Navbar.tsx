import { FC } from 'react';
import * as Styled from './Navbar.style'
import { Link } from 'react-router-dom';
import LoginButton from '../LoginButton/LoginButton'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Navbar: FC = () => {
    const reduxStore = useSelector<RootState>(state => state.googleUser)

    /*
    if(reduxStore === null) {
        return(
            <></>
        )
    }
    */

    return(
        <Styled.Nav>
            <Link to="/">
                <Styled.Logo/>
            </Link>
            <Styled.NavbarButtons>
                <Link to="/quotes">
                    <Styled.NavLink>цитаты</Styled.NavLink>
                </Link>
                <Link to="/timeline">
                    <Styled.NavLink>таймлайн</Styled.NavLink>
                </Link>
                <Link to="/gamesaves">
                    <Styled.NavLink>сейвы</Styled.NavLink>
                </Link>
            </Styled.NavbarButtons>
            <LoginButton/>
        </Styled.Nav>
    )
}
export default Navbar
