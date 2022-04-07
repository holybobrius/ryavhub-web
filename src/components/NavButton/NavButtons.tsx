import * as Styled from './NavButtons.style'
import { FC, useMemo } from 'react'

interface Props {
    total: number
}

const NavButtons: FC<Props> = (props) => {
    const scroll: any = (n: number) => {
        const element = document.querySelector(`#card${n}`);
        element?.scrollIntoView({behavior: 'smooth'});
    }
    const buttons = useMemo(() => {
        let btns = [];
        for(let i = 0; i < props.total; i++) {
            btns.push(
                <label key={`radio${i}`}>
                    <Styled.NavButtonInput type="radio" name="radio-btn" onChange={scroll(i)} id={`radio${i}`} onClick={() => scroll(i)}/>
                    <Styled.NavButtonSpan />
                </label>
                );
        }
        return btns;
    }, [props.total])    
    return (
        <Styled.Container>
            {buttons}
        </Styled.Container>
    )
}

export default NavButtons;