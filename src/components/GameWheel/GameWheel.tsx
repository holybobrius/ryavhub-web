import React, { useState, useRef, useEffect, ChangeEvent } from 'react';
import { ReactComponent as Drop} from "../../assets/icons/Drop.svg";
import { ReactComponent as TechReroll} from "../../assets/icons/TechReroll.svg";
import './GameWheel.css';

interface Props {
    games: string[];
}

export const GameWheel: React.FC<Props> = ({ games }) => {
    const gameListRef = useRef<HTMLDivElement>(null);
    const [spinning, setSpinning] = useState(false);
    const [selectedGame, setSelectedGame] = useState<string | null>(null);
    const [spinDuration, setSpinDuration] = useState(0);
    const [showWheel, setShowWheel] = useState<boolean>(false)

    useEffect(() => {
        const handleSpin = () => {
            if (spinning) {
                const gamesList = gameListRef.current;
                const randomIndex = Math.floor(Math.random() * games.length);
                const targetGame = gamesList?.children[randomIndex] as HTMLElement;
                console.log('Selected Game:', games[randomIndex]);

                if (gamesList) {
                    gamesList.style.transition = `transform ${spinDuration}s ease-out`;
                    gamesList.style.transform = `translateY(-${targetGame.offsetTop - targetGame.clientHeight}px)`;

                    setTimeout(() => {
                        if (gamesList) {
                            gamesList.style.transition = 'none';
                            targetGame.classList.add('winner');
                            setSpinning(false);

                            // Trim text to 35 characters and add ellipsis
                            const truncatedText =
                                games[randomIndex].length > 35
                                    ? games[randomIndex].substring(0, 35) + '...'
                                    : games[randomIndex];

                            setSelectedGame(truncatedText);
                        }
                    }, spinDuration * 1000);
                }
            }
        };

        if (spinning) {
            handleSpin();
        }
    }, [spinning, games, spinDuration]);

    const spin = () => {
        setShowWheel(true)
        if (spinning) return;

        const gamesEls = document.querySelectorAll('.game');
        gamesEls.forEach((n) => n.classList.remove('winner'));

        setSpinning(true);

        // Scroll on the first spin to avoid issues with subsequent spins
        const gamesList = gameListRef.current;
        const randomIndex = Math.floor(Math.random() * games.length);
        const targetGame = gamesList?.children[randomIndex] as HTMLElement;

        if (gamesList) {
            gamesList.style.transition = `transform ${spinDuration}s ease-out`;
            gamesList.style.transform = `translateY(-${targetGame.offsetTop - targetGame.clientHeight}px)`;

            setTimeout(() => {
                if (gamesList) {
                    gamesList.style.transition = 'none';
                    targetGame.classList.add('winner');
                    setSpinning(false);

                    // Trim text to 35 characters and add ellipsis
                    const truncatedText =
                        games[randomIndex].length > 35
                            ? games[randomIndex].substring(0, 35) + '...'
                            : games[randomIndex];

                    setSelectedGame(truncatedText);
                }
            }, spinDuration * 1000);
        }
    };

    const handleSpinDurationChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSpinDuration(parseInt(e.target.value, 10));
    };


    return (
        <>
            <div className={`container ${!showWheel ? 'hidden' : ''}`}>
                <div className="game-list-container">
                    <div className="game-list" ref={gameListRef}>
                        {games.map((game, index) => (
                            <div
                                key={index}
                                className={`game ${index === 1 ? 'winner' : ''} ${selectedGame === game ? 'winner' : ''}`}
                            >
                                {game}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button className='spin-button' onClick={spin} disabled={spinning || spinDuration === 0 || !spinDuration}>КРУТИТЬ!</button>
            <div className="buttons-container">
                {selectedGame && !spinning && <button className="reroll-button"><Drop/></button>}
                    <input
                        className={'seconds-input'}
                        type="number"
                        id="spinDuration"
                        placeholder={'15 сек'}
                        disabled={spinning}
                        value={spinDuration === 0 ? '' : spinDuration}
                        onChange={handleSpinDurationChange}
                        min="1"
                    />
                {selectedGame && !spinning && <button className="reroll-button"><TechReroll/></button>}
                {selectedGame && !spinning && <a href={`https://howlongtobeat.com/?q=${encodeURI(selectedGame)}`} target={'_blank'} rel="noreferrer">
                    <button>HLTB</button>
                </a>}
            </div>
        </>
    );
};
