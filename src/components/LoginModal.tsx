import { FC, useState, useEffect } from "react";
import { GoogleLogin } from 'react-google-login'
import { Modal, Button } from 'antd';
import styled from 'styled-components'

const ModalContainer = styled.div`
    
`;

interface Props {
    opened: boolean,
    closeClicked: () => void
}
const LoginModal: FC<Props> = (props) => {
    return (
        <ModalContainer>
            <Modal title="Basic Modal" visible={props.opened} onOk={props.closeClicked} onCancel={props.closeClicked}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </ModalContainer>
    );
}
export default LoginModal
