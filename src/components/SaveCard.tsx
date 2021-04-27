import styled from 'styled-components'
import {FC} from "react";

const CardContainer = styled.div`
    background-color: #191B1F;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    color: white;
`;
const Images = styled.div`
    margin-top: 20px;
    margin-left: 120px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    height: 72%;
`;
const PrimaryImage = styled.img`
    height: 100%;
    width: 65%;
`;
const SecondaryImages = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    gap: 10px;
    height: 100%;
`;
const Info = styled.div`
    margin-left: 120px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    gap: 1000px;
`;
const DownloadButton = styled.button`
    height: 3rem;
    width: 13rem;
    border-radius: 20px;
    border: 1px solid #FFFFFF;
    font-family: 'Basis Grotesque Pro';
    font-size: 20px;
    background-color: transparent;
    color: #FFFFFF;
`;
const TextInfo = styled.div`
    display: flex;
    flex-direction: column;
`;
const SaveYear = styled.p`
    font-family: 'Basis Grotesque Pro', sans-serif;
    font-style: italic;
    font-size: 20px;
`;
const SaveName = styled.h1`
    margin: 0;
    font-size: 55px;
    font-family: 'Basis Grotesque Pro', sans-serif;
`;
const SecondaryImage = styled.img`
    height: 33%;
`;

interface Props {
    title: string,
    description: string,
    size: string,
    link: string,
    image: string,
    imageAlt: string
}
const SaveCard: FC<Props> = (props) => {
    const onClick = (e: any) => {
        let str = '#card' + e.target.innerHTML;
        // @ts-ignore
        document.querySelector(str).scrollIntoView({behavior: 'smooth'});
      }
    return(
        <CardContainer>
            <Images>
                <PrimaryImage src="https://i.imgur.com/UfFNAgV.png"></PrimaryImage>
                <SecondaryImages>
                    <SecondaryImage src='https://i.imgur.com/0biEgB0.png'/>
                    <SecondaryImage src='https://i.imgur.com/YYQN6Qd.png'/>
                    <SecondaryImage src='https://i.imgur.com/ClnfeUO.png'/>
                </SecondaryImages>
            </Images>
            <Info>
                <TextInfo>
                    <SaveName>Яма 8</SaveName>
                    <SaveYear>2020</SaveYear>
                    {/*<button onClick={onClick}>1</button>
                    <button onClick={onClick}>2</button>
                    <button onClick={onClick}>3</button>*/}
                </TextInfo>
                <DownloadButton>СКАЧАТЬ (3GB)</DownloadButton>
            </Info>
        </CardContainer>
    )
}
export default SaveCard
