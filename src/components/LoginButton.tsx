import React, { FC } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Button } from "antd";
import { GoogleLogin, GoogleLogout, GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";
import { RootState } from '../store'
import { googleLogin, googleLogout } from '../store/actions/auth'

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
                alert('error loggin in this shit')
                console.log(e)
            })
         //make request to this thang to check shit
    }
    const onFailure = (err: any) => {
        alert('no success bro')
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
                <Button
                    type="primary"
                    shape="round"
                    size="large"
                    onClick={props.onClick}
                >
                    Logout
                </Button>
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
                <Button
                    type="primary"
                    shape="round"
                    size="large"
                    onClick={props.onClick}
                >
                    Login
                </Button>
            )}
        />
    )
}
export default LoginButton;
