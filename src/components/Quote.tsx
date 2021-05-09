import { FC } from "react";
import styled from 'styled-components'

const QuoteContainer = styled.div`
    min-height: 10vh;
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: justify;
    text-align-last: center;
    border-bottom: 2px dashed #aaa;
    font-family: 'Basis Grotesque Pro';
`;

const QuoteMain = styled.h2`
    margin-top: vh;
    color: white;
    width: 40vw;
`;

const QuoteAuthor = styled.h4`
    color: #aaa;
    text-transform: uppercase;
`;

const QuoteDate = styled.h5`
    color: #aaa;
    font-size: 1.03rem;
`;

const QuoteInfo = styled.div`
    display: flex;
    width: 40vw;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5vh;
    font-size: 1rem;
`;

interface Props {
    quote: string,
    author: string,
    date: string
}

const Quote: FC<Props> = (props) => {
    return(
        <QuoteContainer>
            <QuoteMain>{props.quote}</QuoteMain>
            <QuoteInfo>
                <QuoteAuthor>{props.author}</QuoteAuthor>
                <QuoteDate>{props.date}</QuoteDate>
            </QuoteInfo>
        </QuoteContainer>
    )
}

export default Quote;