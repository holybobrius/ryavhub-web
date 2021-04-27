import { FC, useState } from 'react'
import SaveCard from "../components/SaveCard"
import styled from 'styled-components'
import axios from 'axios'

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 270px));
    justify-content: space-around;
    column-gap: 10px;
    row-gap: 20px;
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
    axios.get<GameSaveApiEntity[]>('https://api.ryav.tk/v1/gamesaves')
    .then(r => {
        setSaves(r.data.reverse());
    })
    .catch(e => {
        console.log('got some shit here bro ', e)
    })
    return (
        <SavesContainer>
          <Heading>Сейвы</Heading>
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
        </SavesContainer>
    );
}
export default GameSaves

