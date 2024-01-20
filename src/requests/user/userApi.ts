import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Account } from "../../types/types";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.ryav.lol/v2/",
    credentials: "same-origin",
  }),
  endpoints: (builder) => ({
    getUser: builder.query<Account.AuthGetResponseSuccess, void>({
      query: () => "/account",
    }),
  }),
});

export const { useGetUserQuery } = userApi;