import { FC, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  googleLogout,
  GoogleLogin,
  CredentialResponse,
} from "@react-oauth/google";
import { RootState } from "../../store";
import { useHistory } from "react-router-dom";
import { GOOGLE_LOGIN, GOOGLE_LOGOUT } from "../../store/types";
import { accountRequest } from "../../requests/account";
import "./LoginButton.css";
import { base } from "../../requests/base";

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
    dispatch({ type: GOOGLE_LOGOUT });
  }, []);

  return user ? (
    <button className="login-btn--nav" onClick={onLogout}>
      Выйти
    </button>
  ) : (
    <a href="https://t.me/ryavbot">
      <button className="login-btn--nav" onClick={onLogout}>
        Войти
      </button>
    </a>
  );
};
export default LoginButton;
