import styled from 'styled-components'

export const NewButton = styled.button`
    width: 60px; height: 60px;
    position: absolute;
    background-color: transparent;
    outline: none;
    border-style: solid;
    border: 5px solid #aaa;
    top: 90vh;
    right: 5vw;
    border-radius: 15px;
    font-size: 5rem;
    transition: 200ms ease;
    cursor: pointer;
    &:before, &:after {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background: #aaa;
    }
    &:before {
        width: 5px;
        margin: 10px auto;
    }
    &:after {
        margin: auto 10px;
        height: 5px;
    }
    &:hover {
        transform: scale(1.05);
    }
`;