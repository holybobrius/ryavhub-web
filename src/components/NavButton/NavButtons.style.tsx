import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 42%;
    right: 3%;
    gap: 15px;
    transition: ease 200ms;
`;

export const NavButtonInput = styled.input`
    opacity: 0;
    display: none;
`;

export const NavButtonSpan = styled.span`
    width: 16px;
    height: 16px;
    border: 1px solid #666;
    border-radius: 100%;
    display: block;
    background-color: #666;
    cursor: pointer;
    transition: ease 250ms;
    &:hover {
        background-color: #868585;
        transform: scale(1.1);
    }
    &:after{
        background-color: red;
    }
`;