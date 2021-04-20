import React, { FC } from "react";
import {Button} from "antd";
import { GoogleLogin } from "react-google-login";

const LoginButton: FC = () => {
    //todo send request to /account/auth to check if user is in database (onSuccess)
    return (
        <GoogleLogin
            clientId="68682133883-q7k867bb1i2vjgg778kfr5c6vdso1edh.apps.googleusercontent.com"
            onSuccess={data => console.log('success login, got ', data)}
            onFailure={err => console.log('unsuccess login, got ', err)}
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
