import { FC, useState, useEffect } from 'react'
import SaveCard from "../components/SaveCard"
import styled from 'styled-components'
import axios from 'axios'
import NavButtons from '../components/NavButtons'

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
    size: string,
    total: number,
    index: number
}
const GameSaves: FC = () => {
    const imageLink = "https://api.ryav.tk/v1/gamesaves/img/";
    const [saves, setSaves] = useState<GameSaveApiEntity[]>([]);
    useEffect(() => {
        (async () => {
            const fr = await axios.get<GameSaveApiEntity[]>('https://api.ryav.tk/v1/gamesaves');
            setSaves(fr.data.reverse());
        })();
    }, [])
    
    return (
            <CardsContainer>
                {saves.map(save => (
                    <SaveCard
                        title={save.name}
                        description={save.year.toString()}
                        imageAlt={save.name}
                        image={imageLink+save.id+'_'}
                        size={save.size}
                        link={save.download_link}
                        total={saves.length}
                        index={saves.indexOf(save)}
                    />
                ))}
                <NavButtons total={saves.length} />
            </CardsContainer>
    );
}
export default GameSaves

