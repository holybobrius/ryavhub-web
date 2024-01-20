import { useGetGamesavesQuery } from "./gamesavesApi";

export const useGamesaves = () => {
  const { data: gamesaves } = useGetGamesavesQuery();

  return gamesaves?.payload ?? [];
};
