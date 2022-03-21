import React, { FC } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { GoogleLogin, GoogleLogout, GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";
import { RootState } from '../store'
import { googleLogin, googleLogout } from '../store/actions/auth'
import styled from 'styled-components'

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

const LoginBtn = styled.button`
    margin-top: 16px;
    width: 100px;
    background-color: transparent;
    font-size: 1rem;
    outline: none;
    border-style: none;
    border: 1px solid #aaa;
    color: #aaa;
    border-radius: 15px;
    font-size: 1rem;
    padding: 7px;
    cursor: pointer;
    transition: 200ms ease;
    &:hover {
        background-color: #aaa;
        color: #191B1F;
    }
`
const LoginButton: FC = () => {
    const user = useSelector((s: RootState) => s.googleUser)
    const dispatch = useDispatch();

    //todo send request to /account/auth to check if user is in database (onSuccess)
    const onSuccess = (data: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        if(!('tokenId' in data)) {
            alert('offline)')
            return;
        }
        googleLogin(data as GoogleLoginResponse)
            .then(r => dispatch(r))
            .catch(e => {
                alert('error (see console)')
                console.log(e)
            })
         //make request to this thang to check shit
    }
    const onFailure = (err: any) => {
        alert('unsuccesful')
        console.log(err)
    }
    const onLogout = () => {
        dispatch(googleLogout())
    }

    return user ?
    (
        <GoogleLogout
            clientId="68682133883-q7k867bb1i2vjgg778kfr5c6vdso1edh.apps.googleusercontent.com"
            onLogoutSuccess={onLogout}
            render={props => (
                <NavLink onClick={props.onClick}>Logout</NavLink>
            )}
        />
    )
    :
    (
        <GoogleLogin
            clientId="68682133883-q7k867bb1i2vjgg778kfr5c6vdso1edh.apps.googleusercontent.com"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy='single_host_origin'
            isSignedIn={true}
            render={props => (
                <LoginBtn onClick={props.onClick}>Login</LoginBtn>
            )}
        />
    )
}
export default LoginButton;
