import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CringePG, Gamesaves, Users } from "../../types/types";

export const cringepgApi = createApi({
  reducerPath: "cringepgApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/v4/gauntlet",
    credentials: "same-origin",
  }),
  endpoints: (builder) => ({
    getAllGames: builder.query<CringePG.IndexGetResponseSuccess, void>({
      query: () => "/all",
    }),
    getGamesForWheel: builder.query<CringePG.IndexGetResponseSuccess, void>({
      query: () => "/",
    }),
    getAllClaims: builder.query<CringePG.IndexGetClaimsResponseSuccess, void>({
      query: () => "/claimed/all",
    }),
    addNewClaim: builder.mutation<
      CringePG.IndexPostResponseSuccess,
      CringePG.IndexPostRequestBody
    >({
      query: (payload) => ({
        url: "claimed",
        method: "POST",
        body: payload,
      }),
    }),
    addNewGame: builder.mutation<
      CringePG.IndexPostGameResponseSuccess,
      CringePG.IndexPostGameRequestBody
    >({
      query: (payload) => ({
        url: "/",
        method: "POST",
        body: payload,
      }),
    }),
    updateClaimStatus: builder.mutation<
      CringePG.IndexPatchClaimsStatusResponseSuccess,
      CringePG.IndexPatchClaimStatusRequestBody
    >({
      query: ({ id, status }) => ({
        url: `claimed/${id}/status`,
        method: "PATCH",
        body: { status },
      }),
    }),
    updateClaimComment: builder.mutation<
      CringePG.IndexPatchClaimsCommentResponseSuccess,
      CringePG.IndexPatchClaimCommentRequestBody
    >({
      query: ({ id, comment }) => ({
        url: `claimed/${id}/comment`,
        method: "PATCH",
        body: { comment },
      }),
    }),
    claimGame: builder.mutation<
      CringePG.IndexPostClaimGameResponseSuccess,
      CringePG.IndexPostClaimGameRequestBody
    >({
      query: ({ id }) => ({
        url: "claim",
        method: "POST",
        body: { id },
      }),
    }),
  }),
});

export const {
  useAddNewClaimMutation,
  useGetAllGamesQuery,
  useGetGamesForWheelQuery,
  useGetAllClaimsQuery,
  useAddNewGameMutation,
  useUpdateClaimCommentMutation,
  useUpdateClaimStatusMutation,
  useClaimGameMutation,
} = cringepgApi;
