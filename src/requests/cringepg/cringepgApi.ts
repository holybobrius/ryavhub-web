import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CringePG, Gamesaves, Users } from "../../types/types";

export const cringepgApi = createApi({
  reducerPath: "cringepgApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/v4/gauntlet",
    credentials: "same-origin",
  }),
  endpoints: (builder) => ({
    addClaimedGame: builder.query<
      CringePG.ClaimedGaunletGame,
      CringePG.ClaimedGaunletGame
    >({
      query: (game) => ({
        url: "/claimed",
        method: "POST",
        body: game,
      }),
    }),
    getAllGames: builder.query<CringePG.IndexGetResponseSuccess, void>({
      query: () => "/",
    }),
  }),
});

export const { useAddClaimedGameQuery, useGetAllGamesQuery } = cringepgApi;
