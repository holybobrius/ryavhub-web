import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Account, Quotes, Timeline } from "../../types/types";

export const quotesApi = createApi({
  reducerPath: "quotesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/v4/",
    credentials: "same-origin",
  }),
  endpoints: (builder) => ({
    getQuotes: builder.query<Quotes.IndexGetResponseSuccess, void>({
      query: () => "/quotes",
    }),
    sendQuotes: builder.mutation<
      Quotes.IndexPostResponseSuccess,
      Quotes.IndexPostRequestBody
    >({
      query: (quote) => ({
        url: "/quotes",
        method: "POST",
        body: quote,
      }),
    }),
  }),
});

export const { useGetQuotesQuery, useSendQuotesMutation } = quotesApi;
