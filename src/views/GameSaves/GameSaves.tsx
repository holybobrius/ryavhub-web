import { FC, useState, useEffect } from 'react'
import SaveCard from "../../components/SaveCard/SaveCard"
import * as Styled from './GameSaves.style'
import axios from 'axios'
import NavButtons from '../../components/NavButton/NavButtons'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import LockedHome from '../LockedHome/LockedHome'

interface GameSaveApiEntity {
    id: number,
    name: string,
    year: number,
    download_link: string,
    size: string,
    imgs: string[]
}

const GameSaves: FC = () => {
    const [saves, setSaves] = useState<GameSaveApiEntity[]>([]);
    const reduxStore = useSelector<RootState>(state => state.googleUser)
    useEffect(() => {
        (async () => {
            const fr = await axios.get<GameSaveApiEntity[]>('https://api.ryav.tk/v1/gamesaves');
            setSaves(fr.data.reverse());
        })();
    }, [])

    if(reduxStore === null) {
        return(
            <LockedHome />
        )
    }

    return (
            <Styled.CardsContainer>
                {saves.map(save => (
                    <SaveCard
                        key={save.id}
                        title={save.name}
                        description={save.year.toString()}
                        imageAlt={save.name}
                        images={save.imgs}
                        size={save.size}
                        link={save.download_link}
                        total={saves.length}
                        index={saves.indexOf(save)}
                    />
                ))}
                <NavButtons total={saves.length} />
            </Styled.CardsContainer>
    );
}
export default GameSaves

