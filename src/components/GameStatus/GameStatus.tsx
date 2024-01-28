import {FC} from "react";
import {CringePG} from "../../types/types";

interface Props {
    status: CringePG.GameStatus
}
 const gameStatusMap = {
    [CringePG.GameStatus.new]: 'в процессе',
    [CringePG.GameStatus.completed]: 'пройдена',
    [CringePG.GameStatus.dropped]: 'дропнута',
    [CringePG.GameStatus.rerolled]: 'тех. реролл',
    [CringePG.GameStatus.coop]: 'ко-оп',
    [CringePG.GameStatus.waitlisted]: 'очередь',
 }

export const GameStatus: FC<Props> = ({ status }) => {
    console.log(status)
    return (
        <div style={{width: '100%'}}><p style={{fontSize: '2rem'}}>{gameStatusMap[status]}</p></div>
    )
}