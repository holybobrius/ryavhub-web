import { GOOGLE_LOGIN, GOOGLE_LOGOUT } from './types'
import { GoogleLoginResponse } from 'react-google-login'
import axios from 'axios'

export const googleLogin = async (content: GoogleLoginResponse) => {
    try {
        await axios.post('https://api.ryav.tk/v1/account/auth', {
            token: content.tokenId
        });
        return {
            type: GOOGLE_LOGIN,
            payload: { content }
        };
    } catch(err) {
        throw err;
    }
}

export const googleLogout = () => ({
    type: GOOGLE_LOGOUT
})