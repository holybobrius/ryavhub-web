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
      // @ts-ignore
      async queryFn(name, api, extraOptions, baseQuery) {
        const result = await baseQuery({
          url: "/auth",
          method: "GET",
        });

        if (result.error) {
          return { data: null };
        }

        return { data: result.data };
      },
    }),
  }),
});

export const { useGetUserQuery } = userApi;
