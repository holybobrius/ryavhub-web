import styled from 'styled-components';
import { FC, useMemo, useState } from 'react'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 42%;
    right: 3%;
    gap: 15px;
    transition: ease 200ms;
`;

const NavButtonInput = styled.input`
    opacity: 0;
    display: none;
`;

const NavButtonSpan = styled.span`
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

interface Props {
    total: number
}

const NavButtons: FC<Props> = (props) => {
    const scroll: any = (n: number) => {
        const element = document.querySelector(`#card${n}`);
        element?.scrollIntoView({behavior: 'smooth'});
        console.log(element);
    }
    const buttons = useMemo(() => {
        let btns = [];
        for(let i = 0; i < props.total; i++) {
            btns.push(
                <label>
                    <NavButtonInput type="radio" name="radio-btn" onChange={scroll(i)} id={`radio${i}`} onClick={() => scroll(i)}/>
                    <NavButtonSpan />
                </label>
                );
        }
        return btns;
    }, [props.total])    
    return (
        <Container>
            {buttons}
        </Container>
    )
}

export default NavButtons;