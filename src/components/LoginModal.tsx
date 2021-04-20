import { FC, useState, useEffect } from "react";
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'
import { Modal, Button } from 'antd';
import styled from 'styled-components'

const ModalContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

interface Props {
    opened: boolean,
    closeClicked: () => void
}
const LoginModal: FC<Props> = (props) => {
    const success = (data: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        console.log(data)
    }
    const fail = (error: any) => {
        console.log(error)
    }
    return (
        <Modal title="зайди)" visible={props.opened} footer={[]}>
            <ModalContent>
                <GoogleLogin
                    clientId="68682133883-q7k867bb1i2vjgg778kfr5c6vdso1edh.apps.googleusercontent.com"
                    buttonText="Login)"
                    onSuccess={success}
                    onFailure={fail}
                    cookiePolicy='single_host_origin'
                    isSignedIn={true}
                />
            </ModalContent>
        </Modal>
    );
}
export default LoginModal
