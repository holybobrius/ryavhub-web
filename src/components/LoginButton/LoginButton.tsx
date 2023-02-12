import { FC, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { googleLogout, GoogleLogin, CredentialResponse } from '@react-oauth/google'
import { RootState } from "../../store";
import { useHistory } from "react-router-dom";
import { GOOGLE_LOGIN, GOOGLE_LOGOUT } from "../../store/types";
import { accountRequest } from "../../requests/account";
import "./LoginButton.css";

const LoginButton: FC = () => {
   const user = useSelector((s: RootState) => s.googleUser);
   const dispatch = useDispatch();
   const history = useHistory();

   const onSuccess = useCallback((data: CredentialResponse) => {
      if (!data.credential) return alert("offline)");

      return accountRequest(data.credential)
         .then(() => dispatch({ type: GOOGLE_LOGIN, payload: data }))
         .then(() => history.push("/"))
         .catch((e) => {
            alert("Smth gone wrong (see console)");
            console.log(e);
         });
   }, []);

   const onError = useCallback(() => {
      alert("Smth gone wrong (see console)");
   }, []);

   const onLogout = useCallback(() => {
      dispatch({ type: GOOGLE_LOGOUT })
      googleLogout();
   }, []);

   return user ? (
      <button className="login-btn--nav" onClick={onLogout}>
          Logout
      </button>
   ) : (
      <GoogleLogin 
         onSuccess={onSuccess}
         onError={onError}
         theme="filled_black"
      />
   )
};
export default LoginButton;
