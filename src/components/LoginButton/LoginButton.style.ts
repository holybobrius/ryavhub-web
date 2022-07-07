import styled from 'styled-components'

export const NavLoginBtn = styled.button`
    width: 145px;
    height: 50px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    font-weight: 300;
    border-radius: 20px;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);
    outline: none;
    background-color: transparent;
    font-family: 'Basis Grotesque Pro', sans-serif;
    text-transform: uppercase;
    cursor: pointer;
    transition: ease 250ms;
    &:hover {
        color: #FFF;
        border: 1px solid #FFF;
    }
    margin-right: 240px;
`;

export const LoginBtn = styled.button`
    margin-top: 16px;
    width: 250px;
    height: 75px;
    background-color: transparent;
    font-size: 20px;
    margin-top: 55px;
    font-weight: 300;
    outline: none;
    border-style: none;
    border: 1px solid rgba(255, 255, 255, 0.6);
    color: rgba(255, 255, 255, 0.6);
    border-radius: 20px;
    font-size: 20px;
    padding: 7px;
    cursor: pointer;
    transition: 200ms ease;
    text-transform: uppercase;
    &:hover {
        color: #fff;
        border-color: #fff;
    }
`