// export type User = {
//   id: number;
//   name: string;
// };
export namespace Generic {
  export type AuthQuery = { token: string };
  export type Success<Payload = null> = {
    code: "Ok";
    payload: Payload;
  };
  export type Error<Message = string> = {
    code: "Error";
    message: Message;
  };
}
export namespace Account {
  // GET /v2/account/auth
  export type AuthGetRequestQuery = Generic.AuthQuery;
  export type AuthGetRequestBody = never;
  export type AuthGetResponseSuccess = Generic.Success<User>;
  export type AuthGetResponseError = Generic.Error;
  export type AuthGetResponse = AuthGetResponseSuccess | AuthGetResponseError;
}

export type User = {
  id: number;
  name: string;
  gauntlet: boolean;
};

export namespace Gamesaves {
  export type Gamesave = {
    id: number;
    name: string;
    year: number;
    download_link: string;
    size: string;
    imgs: string[];
  };
  // GET /v2/gamesaves
  export type IndexGetRequestQuery = Generic.AuthQuery;
  export type IndexGetRequestBody = never;
  export type IndexGetResponseSuccess = Generic.Success<Gamesave[]>;
  export type IndexGetResponseError = Generic.Error;
  export type IndexGetResponse =
    | IndexGetResponseSuccess
    | IndexGetResponseError;
}

export namespace CringePG {
  export enum GameStatus {
    "new",
    "completed",
    "dropped",
    "coop",
    "rerolled",
    "waitlisted",
  }

  export type GauntletPlayer = {
    id: number;
    name: string;
  };

  export type GauntletClaimInfo = {
    user: GauntletPlayer;
    id: number;
    comment: string;
    status: GameStatus;
  };

  export type GauntletGame = {
    id: number;
    name: string;
    owners: GauntletPlayer[];
    claims: GauntletClaimInfo[];
  };

  export type GauntletGameShortened = {
    id: number;
    name: string;
  };

  export type GauntletNewGame = {
    name: string;
    owners: number[];
  };

  export type GauntletClaim = {
    id: number;
    status: GameStatus | string;
    comment: string;
    game: GauntletGameShortened;
    user: GauntletPlayer;
  };

  export type ClaimedGaunletGame = {
    game_id: number;
    user_id: number;
    status: GameStatus | string;
    comment: string;
  };

  // GET /v4/quotes
  export type IndexGetRequestQuery = Generic.AuthQuery;
  export type IndexPostRequestBody = ClaimedGaunletGame;
  export type IndexPostResponseSuccess = Generic.Success<GauntletClaim>;
  export type IndexGetResponseSuccess = Generic.Success<GauntletGame[]>;
  export type IndexPostGameRequestBody = GauntletNewGame;
  export type IndexPostGameResponseSuccess = Generic.Success<GauntletGame>;
  export type IndexGetClaimsResponseSuccess = Generic.Success<GauntletClaim[]>;
  export type IndexPostClaimGameRequestBody = { id: number };
  export type IndexPostClaimGameResponseSuccess =
    Generic.Success<GauntletClaim>;
  export type IndexPatchClaimCommentRequestBody = {
    comment: string;
    id: number;
  };
  export type IndexPatchClaimStatusRequestBody = {
    status: GameStatus | string;
    id: number;
  };
  export type IndexPatchClaimsCommentResponseSuccess =
    Generic.Success<GauntletClaim>;
  export type IndexPatchClaimsStatusResponseSuccess =
    Generic.Success<GauntletClaim>;
  export type IndexGetResponseError = Generic.Error;
  export type IndexGetResponse =
    | IndexGetResponseSuccess
    | IndexGetResponseError;
}

export namespace Quotes {
  export type Quote = {
    id: number;
    quote: string;
    quote_by: Users.User;
    date: string;
    created_by: Users.User;
  };
  export type QuotePost = {
    quote: string;
    quote_by: number;
    date: string;
  };

  // GET /v2/quotes
  export type IndexGetRequestQuery = Generic.AuthQuery;
  export type IndexGetRequestBody = never;
  export type IndexGetResponseSuccess = Generic.Success<Quote[]>;
  export type IndexGetResponseError = Generic.Error;
  export type IndexGetResponse =
    | IndexGetResponseSuccess
    | IndexGetResponseError;
  // POST /v2/quotes
  export type IndexPostRequestQuery = Generic.AuthQuery;
  export type IndexPostRequestBody = QuotePost;
  export type IndexPostResponseSuccess = Generic.Success;
  export type IndexPostResponseError = Generic.Error;
  export type IndexPostResponse =
    | IndexPostResponseSuccess
    | IndexPostResponseError;
}
export namespace Telegram {
  export type TelegramQuotePost = {
    quote: string;
    quote_by: number;
    added_by: number;
  };
  // GET /v2/telegram/tg2in
  export type Tg2InGetRequestQuery = { id: number };
  export type Tg2InGetRequestBody = never;
  export type Tg2InGetResponseSuccess = Generic.Success<{ id: number }>;
  export type Tg2InGetResponseError = Generic.Error;
  export type Tg2InGetResponse =
    | Tg2InGetResponseSuccess
    | Tg2InGetResponseError;
  // GET /v2/telegram/quote
  export type QuotePostRequestQuery = never;
  export type QuotePostRequestBody = TelegramQuotePost;
  export type QuotePostResponseSuccess = Generic.Success;
  export type QuotePostResponseError = Generic.Error;
  export type QuotePostResponse =
    | QuotePostResponseSuccess
    | QuotePostResponseError;
}
export namespace Timeline {
  export type Timeline = {
    id: number;
    title: string;
    location: string;
    date: string;
    participants: Users.User[];
    created_by: Users.User;
  };
  export type TimelinePost = {
    title: string;
    location: string;
    date: string;
    participants: number[];
  };
  // GET /v2/timeline
  export type IndexGetRequestQuery = Generic.AuthQuery;
  export type IndexGetRequestBody = never;
  export type IndexGetResponseSuccess = Generic.Success<Timeline[]>;
  export type IndexGetResponseError = Generic.Error;
  export type IndexGetResponse =
    | IndexGetResponseSuccess
    | IndexGetResponseError;
  // POST /v2/timeline
  export type IndexPostRequestQuery = Generic.AuthQuery;
  export type IndexPostRequestBody = TimelinePost;
  export type IndexPostResponseSuccess = Generic.Success;
  export type IndexPostResponseError = Generic.Error;
  export type IndexPostResponse =
    | IndexGetResponseSuccess
    | IndexGetResponseError;
}
export namespace Users {
  export type User = {
    id: number;
    name: string;
    gauntlet: boolean;
    created_utc: Date;
  };
  // GET /v2/users
  export type IndexGetRequestQuery = Generic.AuthQuery;
  export type IndexGetRequestBody = never;
  export type IndexGetResponseSuccess = Generic.Success<User[]>;
  export type IndexGetResponseError = Generic.Error;
  export type IndexGetResponse =
    | IndexGetResponseSuccess
    | IndexGetResponseError;
}
