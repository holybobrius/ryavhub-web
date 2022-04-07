import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    
`;

export const RandomQuote = styled.p`
    margin-bottom: 20px;
`

export const Half = styled.div`
    height: 100%; width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MemeCard = styled.img`
    
    height: 450px;
    /* meme possibility */
`;

export const BioCard = styled.div`
    color: #fff;
    font-family: 'Basis Grotesque Pro';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const BioCardTitle = styled.div`
    font-size: 8rem;
    font-weight: bold;
`;

export const BioCardText = styled.div`
    text-align: center;
    font-size: 1.5rem;
`;

export const GenerateButton = styled.button`
    background-color: transparent;
    font-size: 1rem;
    outline: none;
    border-style: none;
    border: 1px solid #aaa;
    color: #aaa;
    border-radius: 15px;
    padding: 10px;
    cursor: pointer;
    transition: 200ms ease;
    &:hover {
        background-color: #aaa;
        color: #191B1F;
    }
`;
