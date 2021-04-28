import styled from 'styled-components'
import {FC} from "react";
import NavButtons from './NavButtons'

const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    color: white;
    height: 100vh;
`;
const Images = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    gap: 10px;
    height: 72%;
`;
const PrimaryImage = styled.img`
    height: 100%;
`;
const SecondaryImages = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    gap: 10px;
    height: 100%;
`;
const Info = styled.div`
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
const DownloadButton = styled.button`
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
    color: white;
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
    imageAlt: string,
    total: number,
    index: number
}
const SaveCard: FC<Props> = (props) => {
    const onClick = (e: any) => {
        let str = '#card' + e.target.innerHTML;
        // @ts-ignore
        document.querySelector(str).scrollIntoView({behavior: 'smooth'});
      }
    return(
        <CardContainer id={`card${props.index}`}>
            <Images>
                <PrimaryImage src={props.image} alt={props.imageAlt}></PrimaryImage>
                <SecondaryImages>
                    <SecondaryImage src='https://i.imgur.com/0biEgB0.png'/>
                    <SecondaryImage src='https://i.imgur.com/YYQN6Qd.png'/>
                    <SecondaryImage src='https://i.imgur.com/ClnfeUO.png'/>
                </SecondaryImages>
            </Images>
            <Info>
                <TextInfo>
                    <SaveName>{props.title}</SaveName>
                    <SaveYear>{props.description}</SaveYear>
                    {/*<button onClick={onClick}>1</button>
                    <button onClick={onClick}>2</button>
                    <button onClick={onClick}>3</button>*/}
                </TextInfo>
                <a href={props.link} target="_blank" rel="noreferrer">
                    <DownloadButton>СКАЧАТЬ ({props.size})</DownloadButton>
                </a>
            </Info>
            
        </CardContainer>
    )
}
export default SaveCard
