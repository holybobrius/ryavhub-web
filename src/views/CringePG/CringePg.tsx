import { FC, useEffect, useState } from "react";
import "./CringePG.css";
import { games } from "./constants/games";
import { GameWheel } from "../../components/GameWheel/GameWheel";
import { useCringePG } from "../../requests/cringepg/useCringePG";
import { CringePG } from "../../types/types";
import { GamesList } from "../../components/GamesList/GamesList";
import BottomNav from "../../components/BottomNav/BottomNav";
import {
  useGetAllClaimsQuery,
  useGetGamesForWheelQuery,
} from "../../requests/cringepg/cringepgApi";

export const CringePg: FC = () => {
  const { data: gamesForWheelRes } = useGetGamesForWheelQuery();

  function shuffle(array: CringePG.GauntletGame[]) {
    array.sort((a, b) => 0.5 - Math.random());

    return array;
  }

  return (
    <section className="cringe-pg">
      <div className="game-wheel-section">
        <GameWheel games={shuffle([...(gamesForWheelRes?.payload ?? [])])} />
      </div>
      <GamesList />
      <BottomNav />
    </section>
  );
};
