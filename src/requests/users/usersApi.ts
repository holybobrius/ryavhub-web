import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Users } from "../../types/types";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.ryav.lol/v2/",
    credentials: "same-origin",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<Users.IndexGetResponseSuccess, void>({
      query: () => "/users",
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
