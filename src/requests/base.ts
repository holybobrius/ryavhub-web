import axios from "axios";
import store from "../store";

const baseURL = "https://api.ryav.lol/v2/";

type BaseRequestParams = {
  url: string;
  method: "get" | "post";
  params?: Record<string, string>;
  data?: any;
};

export const base = <T>({
  url,
  method,
  params,
  data,
}: BaseRequestParams): Promise<T> =>
  axios
    .request<T>({
      method,
      baseURL,
      url,
      params: { token: store.getState().googleUser?.credential, ...params },
      data,
    })
    .then(({ data }: any) => data);
