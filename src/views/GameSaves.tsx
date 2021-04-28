import { FC, useState } from 'react'
import SaveCard from "../components/SaveCard"
import styled from 'styled-components'
import axios from 'axios'

const CardsContainer = styled.div`
    background-color: #191B1F;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
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

