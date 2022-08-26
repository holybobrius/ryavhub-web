import { base } from "./base";
import { Users } from "../types/types";

export const usersRequest = () =>
  base<Users.IndexGetResponseSuccess>({
    url: "/users",
    method: "get",
  });
