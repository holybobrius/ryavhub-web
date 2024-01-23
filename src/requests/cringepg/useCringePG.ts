import { useGetAllGamesQuery } from "./cringepgApi";

export const useCringePG = () => {
  const { data: allGames } = useGetAllGamesQuery();

  return { allGames: allGames?.payload ?? [] };
};
