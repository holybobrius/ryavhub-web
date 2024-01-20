import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Gamesaves, Users } from "../../types/types";

export const gamesavesApi = createApi({
  reducerPath: "gamesavesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/v4/",
    credentials: "same-origin",
  }),
  endpoints: (builder) => ({
    getGamesaves: builder.query<Gamesaves.IndexGetResponseSuccess, void>({
      query: () => "/gamesaves",
    }),
  }),
});

export const { useGetGamesavesQuery } = gamesavesApi;
