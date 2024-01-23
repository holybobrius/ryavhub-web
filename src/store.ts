import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./requests/user/userApi";
import { usersApi } from "./requests/users/usersApi";
import { quotesApi } from "./requests/quotes/quotesApi";
import { timelineApi } from "./requests/timeline/timelineApi";
import { gamesavesApi } from "./requests/gamesaves/gamesavesApi";
import { cringepgApi } from "./requests/cringepg/cringepgApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [quotesApi.reducerPath]: quotesApi.reducer,
    [timelineApi.reducerPath]: timelineApi.reducer,
    [gamesavesApi.reducerPath]: gamesavesApi.reducer,
    [cringepgApi.reducerPath]: cringepgApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      usersApi.middleware,
      quotesApi.middleware,
      timelineApi.middleware,
      gamesavesApi.middleware,
      cringepgApi.middleware
    ),
});
