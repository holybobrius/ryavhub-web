import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Account, Timeline } from "../../types/types";

export const timelineApi = createApi({
  reducerPath: "timelineApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/v4/",
    credentials: "same-origin",
  }),
  endpoints: (builder) => ({
    getTimelineItems: builder.query<Timeline.IndexGetResponseSuccess, void>({
      query: () => "/timeline",
    }),
    sendTimelineItem: builder.mutation<
      Timeline.IndexPostResponseSuccess,
      Timeline.IndexPostRequestBody
    >({
      query: (timelineItem) => ({
        url: "/timeline",
        method: "POST",
        body: timelineItem,
      }),
    }),
  }),
});

export const { useGetTimelineItemsQuery, useSendTimelineItemMutation } =
  timelineApi;
