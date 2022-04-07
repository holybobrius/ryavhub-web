import { FC } from "react";
import * as Styled from './Quote.style'

interface Props {
    quote: string,
    author: string,
    date: string
}

const Quote: FC<Props> = (props) => {
    return(
        <Styled.QuoteContainer>
            <Styled.QuoteInfoWrapper>
                <Styled.QuoteMain>{props.quote}</Styled.QuoteMain>
                <Styled.QuoteInfo>
                    <Styled.QuoteAuthor>{props.author}</Styled.QuoteAuthor>
                    <Styled.QuoteDate>{props.date}</Styled.QuoteDate>
                </Styled.QuoteInfo>
            </Styled.QuoteInfoWrapper>
        </Styled.QuoteContainer>
    )
}

export default Quote;