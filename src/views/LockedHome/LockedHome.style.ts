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

