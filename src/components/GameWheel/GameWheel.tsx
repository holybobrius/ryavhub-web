import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import Drop from "../../assets/icons/Drop.svg?react";
import TechReroll from "../../assets/icons/TechReroll.svg?react";
import "./GameWheel.css";
import { CringePG } from "../../types/types";

interface Props {
  games: CringePG.GauntletGame[];
}

export const GameWheel: React.FC<Props> = ({ games }) => {
  const gameListRef = useRef<HTMLDivElement>(null);
  const [spinning, setSpinning] = useState(false);
  const [selectedGame, setSelectedGame] =
    useState<CringePG.GauntletGame | null>(null);
  const [spinDuration, setSpinDuration] = useState(0);
  const [showWheel, setShowWheel] = useState<boolean>(false);

  useEffect(() => {
    const handleSpin = () => {
      if (spinning) {
        const gamesList = gameListRef.current;
        const randomIndex = Math.floor(Math.random() * games.length);
        const targetGame = gamesList?.children[randomIndex] as HTMLElement;
        console.log("Selected Game:", games[randomIndex]);

        if (gamesList) {
          gamesList.style.transition = `transform ${spinDuration}s ease-out`;
          gamesList.style.transform = `translateY(-${targetGame.offsetTop - targetGame.clientHeight
            }px)`;

          setTimeout(() => {
            if (gamesList) {
              gamesList.style.transition = "none";
              targetGame.classList.add("winner");
              setSpinning(false);

              setSelectedGame(games[randomIndex]);
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
    setShowWheel(true);
    if (spinning) return;

    const gamesEls = document.querySelectorAll(".game");
    gamesEls.forEach((n) => n.classList.remove("winner"));

    setSpinning(true);

    // Scroll on the first spin to avoid issues with subsequent spins
    const gamesList = gameListRef.current;
    const randomIndex = Math.floor(Math.random() * games.length);
    const targetGame = gamesList?.children[randomIndex] as HTMLElement;

    if (gamesList) {
      gamesList.style.transition = `transform ${spinDuration}s ease-out`;
      gamesList.style.transform = `translateY(-${targetGame.offsetTop - targetGame.clientHeight
        }px)`;

      setTimeout(() => {
        if (gamesList) {
          gamesList.style.transition = "none";
          targetGame.classList.add("winner");
          setSpinning(false);

          setSelectedGame(games[randomIndex]);
        }
      }, spinDuration * 1000);
    }
  };

  const handleSpinDurationChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSpinDuration(parseInt(e.target.value, 10));
  };

  return (
    <>
      <div className={`container ${!showWheel ? "hidden" : ""}`}>
        <div className="game-list-container">
          <div className="game-list" ref={gameListRef}>
            {games.map((game, index) => (
              <div
                key={index}
                className={`game ${index === 1 ? "winner" : ""} ${selectedGame === game ? "winner" : ""
                  }`}
              >
                {game.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`wheel-info-container ${showWheel ? "wheel-info-container-active" : ""
          }`}
      >
        <div className="wheel-rules-container">
          <h3 className="wheel-rules-heading">Причины тех. реролла:</h3>
          <ol className="wheel-rules-list">
            <li className="wheel-rules-list-item">
              1. Проблемы с запуском, не работает, не хватает места на диске,
              лагает и так далее
            </li>
            <li className="wheel-rules-list-item">
              2. Если игра предназначена только под кооператив, но играть не с
              кем
            </li>
            <li className="wheel-rules-list-item">
              3. Если игра не шарится, дорого стоит, а пиратить ты не хочешь
            </li>
            <li className="wheel-rules-list-item">
              4. Если существует аналогичная игра по сюжету (ru/eng,
              HD/extreme), то выбирай любую из них. Если выпадает второй
              вариант, то технический реролл.
            </li>
          </ol>
        </div>
        <div className="spin-button-container">
          <button
            className="spin-button"
            onClick={spin}
            disabled={spinning || spinDuration === 0 || !spinDuration}
          >
            КРУТИТЬ!
          </button>
          <div className="input-container" style={{ marginBottom: "3.4rem" }}>
            <p className="input-label">Секунд:</p>
            <input
              type="number"
              id="spinDuration"
              placeholder={"15"}
              disabled={spinning}
              value={spinDuration === 0 ? "" : spinDuration}
              onChange={handleSpinDurationChange}
              min="1"
            />
          </div>
          {selectedGame && !spinning && (
            <div className="buttons-container">
              <div className="buttons-container-row">
                <a
                  href={`https://howlongtobeat.com/?q=${encodeURI(
                    selectedGame.name
                  )}`}
                  target={"_blank"}
                  rel="noreferrer"
                  className="hltb-button-container"
                  style={{ height: "5.4rem", display: "flex", width: "100%" }}
                >
                  <button className="htlb-button">Открыть игру в HLTB</button>
                </a>
                <div className="input-container">
                  <p className="input-label">Дроп</p>
                  <button className="reroll-button">
                    <Drop />
                  </button>
                </div>
              </div>
              <div className="buttons-container-row">
                <div className="input-container" style={{ width: "100%" }}>
                  <p className="input-label">Тех. рерол</p>
                  <button className="reroll-button">
                    <TechReroll />
                  </button>
                </div>
                <div className="input-container" style={{ width: "100%" }}>
                  <p className="input-label">Очередь</p>
                  <button className="reroll-button">
                    <TechReroll />
                  </button>
                </div>
              </div>
            </div>
          )}
          {selectedGame && !spinning && <div className="game-owners-info">
            <div className="game-owners-divider" />
            <div className="game-owners-info-block">
              <h4 className="game-owners-info-block-header">Игра из библиотеки:</h4>
              <div className="game-owners-info-block-items-container">
                {selectedGame?.owners.map(n => <div className='game-owners-info-block-item'>{n.name}</div>)}
              </div>
            </div>
            <div className="game-owners-divider" />
            <div className="game-owners-info-block">
              <h4 className="game-owners-info-block-header">Игру прошел:</h4>
              <div className="game-owners-info-block-items-container">
                {selectedGame?.completed_by.map(n => <div className='game-owners-info-block-item'>{n.name}</div>)}
              </div>
            </div>
            <div className="game-owners-divider" />
          </div>}
        </div>
        <div className="wheel-rules-container">
          <h3 className="wheel-rules-heading">Наказание</h3>
          <ol className="wheel-rules-list">
            <li className="wheel-rules-list-item">1. The binding of Isaac</li>
            <li className="wheel-rules-list-item">2. Desert Bus</li>
            <li className="wheel-rules-list-item">3. Ultimate Custom Night</li>
            <li className="wheel-rules-list-item">4. Classic Minecraft</li>
            <li className="wheel-rules-list-item">5. Аватария</li>
            <li className="wheel-rules-list-item">6. IWBTB</li>
            <li className="wheel-rules-list-item">7. PepeL</li>
            <li className="wheel-rules-list-item">
              8. The Elder Scrolls: Arena
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};
