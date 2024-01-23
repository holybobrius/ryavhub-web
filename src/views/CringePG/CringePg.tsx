import { FC, useEffect, useState } from "react";
import "./CringePG.css";
import { games } from "./constants/games";
import { GameWheel } from "../../components/GameWheel/GameWheel";
import { useCringePG } from "../../requests/cringepg/useCringePG";
import { CringePG } from "../../types/types";

export const CringePg: FC = () => {
  const { allGames } = useCringePG();

  function shuffle(array: CringePG.GauntletGame[]) {
    array.sort((a, b) => 0.5 - Math.random());

    return array;
  }

  return (
    <section className="cringe-pg">
      <GameWheel games={shuffle([...allGames])} />
    </section>
  );
};
