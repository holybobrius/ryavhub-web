import { AnyAction } from 'redux'
import { GOOGLE_LOGIN, GOOGLE_LOGOUT } from '../actions/types'
import { GoogleLoginResponse } from 'react-google-login';

interface State {
    googleUser: GoogleLoginResponse | null
}
const initial: State = {
    googleUser: null
}

/* eslint-disable */
export default function(state = initial, action: AnyAction) {
    switch(action.type) {
        case GOOGLE_LOGIN:
            return {
                ...state,
                googleUser: action.payload
            }
        case GOOGLE_LOGOUT:
            return {
                ...state,
                googleUser: null
            }
        default:
            return state;
    }
}