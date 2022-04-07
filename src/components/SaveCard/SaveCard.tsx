import * as Styled from './SaveCard.style'
import { FC } from "react";

interface Props {
    title: string,
    description: string,
    size: string,
    link: string,
    images: string[],
    imageAlt: string,

    total: number,
    index: number
}
const SaveCard: FC<Props> = (props) => {
    return(
        <Styled.CardContainer id={`card${props.index}`}>
            <Styled.Images>
                <Styled.PrimaryImage src={props.images[0]} alt={props.imageAlt}/>
                <Styled.SecondaryImages>
                    <Styled.SecondaryImage src={props.images[1]}/>
                    <Styled.SecondaryImage src={props.images[2]}/>
                    <Styled.SecondaryImage src={props.images[3]}/>
                </Styled.SecondaryImages>
            </Styled.Images>
            <Styled.Info>
                <Styled.TextInfo>
                    <Styled.SaveName>{props.title}</Styled.SaveName>
                    <Styled.SaveYear>{props.description}</Styled.SaveYear>
                    {/*<button onClick={onClick}>1</button>
                    <button onClick={onClick}>2</button>
                    <button onClick={onClick}>3</button>*/}
                </Styled.TextInfo>
                <a href={props.link} target="_blank" rel="noreferrer">
                    <Styled.DownloadButton>СКАЧАТЬ ({props.size})</Styled.DownloadButton>
                </a>
            </Styled.Info>
        </Styled.CardContainer>
    )
}
export default SaveCard
