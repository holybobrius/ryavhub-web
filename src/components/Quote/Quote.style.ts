import styled from 'styled-components'

export const QuoteContainer = styled.div`
    min-height: 10vh;
    border-radius: 15px;
    width: 50vw;
    display: flex;
    align-items: center;
    background-color: #2D2D2D;
    justify-content: center;
    flex-direction: column;
    text-align: justify;
    text-align-last: center;
    font-family: 'Basis Grotesque Pro';
    font-size: 14px;
`;

export const QuoteInfoWrapper = styled.div`
    margin: 3vh;
`

export const QuoteMain = styled.h2`
    color: white;
    width: 40vw;
    margin-bottom: 1vh;
`;

export const QuoteAuthor = styled.h4`
    color: #aaa;
    text-transform: uppercase;
`;

export const QuoteDate = styled.h5`
    color: #aaa;
    font-size: 1.03rem;
`;

export const QuoteInfo = styled.div`
    display: flex;
    width: 40vw;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    font-size: 1rem;
`;