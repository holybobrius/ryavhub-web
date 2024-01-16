import {FC, useEffect, useState} from "react";
import './CringePG.css'
import {games} from "./constants/games";
import {GameWheel} from "../../components/GameWheel/GameWheel";

export const CringePg: FC = () => {
    const [allGames, setAllGames] = useState(games)

    function shuffle(array: string[]) {
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex > 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    const randomizeGame = () => {
        setAllGames(shuffle([...games]))
    }

    useEffect(() => {
        randomizeGame()
    }, []);

    return(
        <section className='cringe-pg'>
                <GameWheel games={allGames} />
        </section>
    )
}