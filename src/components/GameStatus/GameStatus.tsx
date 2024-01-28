import { FC } from "react";
import { CringePG } from "../../types/types";
import "./GameStatus.css";

interface Props {
  status: CringePG.GameStatus | string;
}
const gameStatusMap = {
  [CringePG.GameStatus.new]: "текущая",
  [CringePG.GameStatus.completed]: "пройдена",
  [CringePG.GameStatus.dropped]: "дроп",
  [CringePG.GameStatus.rerolled]: "тех.реролл",
  [CringePG.GameStatus.coop]: "кооп",
  [CringePG.GameStatus.waitlisted]: "очередь",
};

export const GameStatus: FC<Props> = ({ status }) => {
  return (
    <div className={`game-status-container ${status}`}>
      <p className="game-status-text">
        {/* @ts-expect-error */}
        {gameStatusMap[CringePG.GameStatus[status]]}
      </p>
    </div>
  );
};
