import { base } from "./base";
import { Timeline } from "../types/types";

export const timelineRequest = () =>
  base<Timeline.IndexGetResponseSuccess>({
    url: "/timeline",
    method: "get",
  });

export const postTimelineRequest = (data: Timeline.IndexPostRequestBody) =>
  base<Timeline.IndexPostResponse>({
    url: "/timeline",
    method: "post",
    data,
  });
