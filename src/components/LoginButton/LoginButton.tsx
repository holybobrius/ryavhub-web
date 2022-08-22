import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  GoogleLogin,
  GoogleLogout,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { RootState } from "../../store";
import { googleLogin, googleLogout } from "../../store/actions/auth";
import { useHistory } from "react-router-dom";
import "./LoginButton.css";

const LoginButton: FC = () => {
  const user = useSelector((s: RootState) => s.googleUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSuccess = (
    data: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    if (!("tokenId" in data)) {
      alert("offline)");
      return;
    }
    googleLogin(data as GoogleLoginResponse)
      .then((r) => dispatch(r))
      .then(() => history.push("/"))
      .catch((e) => {
        alert("error (see console)");
        console.log(e);
      });
  };
  const onFailure = (err: any) => {
    alert("unsuccesful");
    console.log(err);
  };
  const onLogout = () => {
    dispatch(googleLogout());
  };

  return user ? (
    <GoogleLogout
      clientId="68682133883-q7k867bb1i2vjgg778kfr5c6vdso1edh.apps.googleusercontent.com"
      onLogoutSuccess={onLogout}
      render={({ onClick }) => (
        <button className="login-btn--nav" onClick={onClick}>
          Logout
        </button>
      )}
    />
  ) : (
    <GoogleLogin
      clientId="68682133883-q7k867bb1i2vjgg778kfr5c6vdso1edh.apps.googleusercontent.com"
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
