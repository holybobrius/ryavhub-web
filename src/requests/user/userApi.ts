import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Account } from "../../types/types";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/v4/",
    credentials: "same-origin",
  }),
  endpoints: (builder) => ({
    getUser: builder.query<Account.AuthGetResponseSuccess, void>({
      query: () => "/auth",
    }),
  }),
});

export const { useGetUserQuery } = userApi;
