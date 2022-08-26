import { base } from "./base";
import { Timeline } from "../types/types";

export const timelineRequest = () =>
  base<Timeline.IndexGetResponseSuccess>({
    url: "/timeline",
    method: "get",
  });
