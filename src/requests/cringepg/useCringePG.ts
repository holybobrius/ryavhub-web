import { CringePG } from "../../types/types";
import {
  useAddNewClaimMutation,
  useAddNewGameMutation,
  useClaimGameMutation,
  useGetAllClaimsQuery,
  useGetAllGamesQuery,
  useGetGamesForWheelQuery,
  useUpdateClaimCommentMutation,
  useUpdateClaimStatusMutation,
} from "./cringepgApi";

export const useCringePG = () => {
  const { data: allGames } = useGetAllGamesQuery();

  const { data: allClaims, refetch: refetchClaims } = useGetAllClaimsQuery();

  const [addClaim] = useAddNewClaimMutation();

  const [addGame] = useAddNewGameMutation();

  const [updateClaimComment] = useUpdateClaimCommentMutation();
  const [updateClaimStatus] = useUpdateClaimStatusMutation();
  const [sendGameClaim] = useClaimGameMutation();

  const addNewClaim = async (claim: CringePG.ClaimedGaunletGame) => {
    const res = await addClaim(claim);
    refetchClaims();
    return res;
  };

  const addNewGame = async (claim: CringePG.GauntletNewGame) => {
    const res = await addGame(claim);
    return res;
  };

  const updateComment = async (id: number, comment: string) => {
    await updateClaimComment({ id, comment });
    void refetchClaims();
  };

  const updateStatus = async (
    id: number,
    status: string | CringePG.GameStatus
  ) => {
    await updateClaimStatus({ id, status });
    void refetchClaims();
  };

  const claimGame = async (id: number) => {
    await sendGameClaim({ id });
    refetchClaims();
  };

  return {
    allGames: allGames?.payload ?? [],
    allClaims: allClaims?.payload ?? [],
    addNewClaim,
    addNewGame,
    updateComment,
    updateStatus,
    claimGame,
  };
};
