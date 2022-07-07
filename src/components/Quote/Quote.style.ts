import styled from 'styled-components'

export const QuoteContainer = styled.div`
    min-height: 10vh;
    border-radius: 15px;
    width: 1000px;
    background-color: #17171D;
    justify-content: center;
    font-family: 'Basis Grotesque Pro';
    font-size: 20px;
    font-weight: 400;
    background-repeat: no-repeat;
`;

export const QuoteInfoWrapper = styled.div`
    margin: 3vh 3vh 3vh 100px;
`

export const QuoteMain = styled.p`
    color: white;
    width: 40vw;
    margin: 10px 0 20px 0;
`;


export const QuoteInfo = styled.p`
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    font-style: italic;
    font-weight: 300;
    font-size: 16px;
`;