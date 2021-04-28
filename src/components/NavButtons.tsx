import styled from 'styled-components';
import { FC, useMemo, useState } from 'react'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 42%;
    right: 3%;
    gap: 5px;
`;

const NavButton = styled.input`
    width: 100px;
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
            btns.push(<NavButton type="radio" name="radio-btn" onChange={scroll(i)} id={`radio${i}`} onClick={() => scroll(i)}/>);
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