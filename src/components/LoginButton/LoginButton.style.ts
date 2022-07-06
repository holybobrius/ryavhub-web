import styled from 'styled-components'

export const NavLink = styled.button`
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
    border-radius: 15px;
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