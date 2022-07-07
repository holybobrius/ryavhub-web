import { FC } from 'react';
import * as Styled from './Navbar.style'
import { Link } from 'react-router-dom';
import LoginButton from '../LoginButton/LoginButton'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Navbar: FC = () => {
    const reduxStore = useSelector<RootState>(state => state.googleUser)

    if(reduxStore === null) {
        return(
            <></>
        )
    }

    return(
        <Styled.Nav>
            <Link to="/">
                <Styled.Logo/>
            </Link>
            <Styled.NavbarButtons>
                <Styled.Separator />
                <Link to="/quotes">
                    <Styled.NavLink>цитаты</Styled.NavLink>
                </Link>
                <Styled.Separator />
                <Link to="/timeline">
                    <Styled.NavLink>таймлайн</Styled.NavLink>
                </Link>
                <Styled.Separator />
                <Link to="/gamesaves">
                    <Styled.NavLink>сейвы</Styled.NavLink>
                </Link>
                <Styled.Separator />
            </Styled.NavbarButtons>
            <LoginButton/>
        </Styled.Nav>
    )
}
export default Navbar
