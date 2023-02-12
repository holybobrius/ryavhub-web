import { CredentialResponse } from "@react-oauth/google";
import { AnyAction } from "redux";
import { GOOGLE_LOGIN, GOOGLE_LOGOUT } from "../types";

interface State {
  googleUser: CredentialResponse | null;
}
const initial: State = {
  googleUser: null,
};

export default function (state = initial, action: AnyAction) {
  switch (action.type) {
    case GOOGLE_LOGIN:
      return {
        ...state,
        googleUser: action.payload,
      };
    case GOOGLE_LOGOUT:
      return {
        ...state,
        googleUser: null,
      };
    default:
      return state;
  }
}
