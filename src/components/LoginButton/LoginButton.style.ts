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