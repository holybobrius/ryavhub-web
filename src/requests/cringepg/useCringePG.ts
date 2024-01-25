import { CringePG } from "../../types/types";
import {
  useAddNewClaimMutation,
  useAddNewGameMutation,
  useGetAllClaimsQuery,
  useGetAllGamesQuery,
  useGetGamesForWheelQuery,
} from "./cringepgApi";

export const useCringePG = () => {
  const { data: allGames } = useGetAllGamesQuery();

  const { data: gamesForWheel } = useGetGamesForWheelQuery();

  const { data: allClaims } = useGetAllClaimsQuery();

  const [addClaim] = useAddNewClaimMutation();

  const [addGame] = useAddNewGameMutation();

  const addNewClaim = (claim: CringePG.ClaimedGaunletGame) => {
    addClaim(claim);
  };

  const addNewGame = (claim: CringePG.GauntletNewGame) => {
    addGame(claim);
  };

  return {
    allGames: allGames?.payload ?? [],
    gamesForWheel: gamesForWheel?.payload ?? [],
    allClaims: allClaims?.payload ?? [],
    addNewClaim,
    addNewGame,
  };
};
