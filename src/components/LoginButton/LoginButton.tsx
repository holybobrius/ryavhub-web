import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  GoogleLogin,
  GoogleLogout,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { RootState } from "../../store";
import { useHistory } from "react-router-dom";
import { GOOGLE_LOGIN, GOOGLE_LOGOUT } from "../../store/types";
import { accountRequest } from "../../requests/account";
import "./LoginButton.css";

const LoginButton: FC = () => {
  const user = useSelector((s: RootState) => s.googleUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSuccess = (
    //FIXME useCallback
    data: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    if (!("tokenId" in data)) return alert("offline)");

    return accountRequest(data.tokenId)
      .then((r) => dispatch({ type: GOOGLE_LOGIN, payload: data }))
      .then(() => history.push("/"))
      .catch((e) => {
        alert("Smth gone wrong (see console)");
        console.log(e);
      });
  };
  const onFailure = (err: any) => {
    alert("Smth gone wrong (see console)");
    console.log(err);
  };
  const onLogout = () => dispatch({ type: GOOGLE_LOGOUT });

  return user ? (
    <GoogleLogout
      clientId="68682133883-jnc71s26jtmqdq98klupgeienssmpbr2.apps.googleusercontent.com"
      onLogoutSuccess={onLogout}
      render={({ onClick }) => (
        <button className="login-btn--nav" onClick={onClick}>
          Logout
        </button>
      )}
    />
  ) : (
    <GoogleLogin
      clientId="68682133883-jnc71s26jtmqdq98klupgeienssmpbr2.apps.googleusercontent.com"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy="single_host_origin"
      isSignedIn={true}
      render={({ onClick }) => (
        <button className="login-btn" onClick={onClick}>
          Login
        </button>
      )}
    />
  );
};
export default LoginButton;
