import styled from 'styled-components'

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    color: white;
    height: 100vh;
`;
export const Images = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    gap: 10px;
    height: 72%;
`;
export const PrimaryImage = styled.img`
    height: 100%;
`;
export const SecondaryImages = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    gap: 10px;
    height: 100%;
`;
export const Info = styled.div`
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
export const DownloadButton = styled.button`
    height: 3rem;
    width: 13rem;
    border-radius: 20px;
    border: 1px solid #9e9e9e;
    font-family: 'Basis Grotesque Pro';
    font-size: 20px;
    background-color: transparent;
    color: #9e9e9e;
    cursor: pointer;
    margin-right: 43vh;
    transition: ease 250ms;
    &:hover {
        border: 1px solid #fff;
        color: #fff;
    }
`;
export const TextInfo = styled.div`
    display: flex;
    flex-direction: column;
`;
export const SaveYear = styled.p`
    font-family: 'Basis Grotesque Pro', sans-serif;
    font-style: italic;
    font-weight: 300px;
    font-size: 20px;
    color: #e0dfdf
    
`;
export const SaveName = styled.h1`
    margin: 0;
    font-size: 55px;
    font-family: 'Basis Grotesque Pro', sans-serif;
    color: white;
`;
export const SecondaryImage = styled.img`
    height: 33%;
`;