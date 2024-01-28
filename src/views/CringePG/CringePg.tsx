import { FC, useEffect, useState } from "react";
import "./CringePG.css";
import { games } from "./constants/games";
import { GameWheel } from "../../components/GameWheel/GameWheel";
import { useCringePG } from "../../requests/cringepg/useCringePG";
import { CringePG } from "../../types/types";
import { GamesList } from "../../components/GamesList/GamesList";
import { useGetAllClaimsQuery } from "../../requests/cringepg/cringepgApi";

export const CringePg: FC = () => {
  const { allGames, gamesForWheel, allClaims } = useCringePG();

  function shuffle(array: CringePG.GauntletGame[]) {
    array.sort((a, b) => 0.5 - Math.random());

    return array;
  }

  return (
    <section className="cringe-pg">
      <GameWheel games={shuffle([...gamesForWheel])} />
       <GamesList claims={allClaims} />
    </section>
  );
};
