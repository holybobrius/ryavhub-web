import styled from 'styled-components'

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
`;

export const Half = styled.div`
    height: 100%; width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const MemeCard = styled.img`
    height: 450px;
    /* meme possibility */
`;

export const InfoWrapper = styled.div`
    color: #fff;
    font-family: 'Basis Grotesque Pro';
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`;

export const InfoTitle = styled.p`
    font-size: 75px;
    font-weight: 900;
`;

export const InfoText = styled.p`
    text-align: center;
    font-size: 20px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.6);
`;

export const RandomQuote = styled.p`
    margin-bottom: 20px;
`

export const GenerateButton = styled.button`
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