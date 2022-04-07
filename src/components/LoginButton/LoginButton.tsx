import { FC } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { GoogleLogin, GoogleLogout, GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";
import { RootState } from '../../store'
import { googleLogin, googleLogout } from '../../store/actions/auth'
import * as Styled from './LoginButton.style'

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
                <Styled.NavLink onClick={props.onClick}>Logout</Styled.NavLink>
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
                <Styled.LoginBtn onClick={props.onClick}>Login</Styled.LoginBtn>
            )}
        />
    )
}
export default LoginButton;
