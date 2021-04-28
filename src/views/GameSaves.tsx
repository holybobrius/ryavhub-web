import {FC, useEffect, useState} from 'react'
import SaveCard from "../components/SaveCard"
import styled from 'styled-components'
import axios from 'axios'
import {read} from "fs";

const CardsContainer = styled.div`
    height: 100%;
`
const SavesContainer = styled.div`
    font-family: 'Oswald', sans-serif;
    text-align: center;
`
const Heading = styled.h1`
    margin-top: 10px;
    font-size: 5rem;
    color: var(--primary);
`;

interface GameSaveApiEntity {
    id: number,
    name: string,
    year: number,
    download_link: string,
    size: string
}
const GameSaves: FC = () => {
    const imageLink = "https://api.ryav.tk/v1/gamesaves/img/";
    const [saves, setSaves] = useState<GameSaveApiEntity[]>([]);
    useEffect(() => {
        (async () => {
            const fr = await axios.get<GameSaveApiEntity[]>('https://api.ryav.tk/v1/gamesaves');
            setSaves(fr.data);
        })();
    }, [])
    return (
            <CardsContainer>
                {saves.map(save => (
                    <SaveCard
                        title={save.name}
                        description={save.year.toString()}
                        imageAlt={save.name}
                        image={imageLink+save.id}
                        size={save.size}
                        link={save.download_link}
                    />
                ))}
            </CardsContainer>
    );
}
export default GameSaves

