import { base } from "./base";
import { Gamesaves } from "../types/types";

export const gamesavesRequest = () =>
  base<Gamesaves.IndexGetResponseSuccess>({
    url: "/gamesaves",
    method: "get",
  });
