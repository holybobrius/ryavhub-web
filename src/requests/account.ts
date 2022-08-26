import { base } from "./base";
import { Account } from "../types/types";

export const accountRequest = (token: string) =>
  base<Account.AuthGetResponseSuccess>({
    url: "/account/auth",
    method: "get",
    params: { token },
  });
