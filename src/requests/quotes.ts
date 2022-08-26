import { base } from "./base";
import { Quotes } from "../types/types";

export const quotesRequest = () =>
  base<Quotes.IndexGetResponseSuccess>({
    url: "/quotes",
    method: "get",
  });
