import { FC } from "react";
import "./LoginButton.css";
import { useUser } from "../../requests/user/useUser";
import {UserContainer} from "../UserContainer/UserContainer";

const LoginButton: FC = () => {
  const user = useUser();

  return user ? (
    <UserContainer user={user} />
  ) : (
    <button className="login-btn--nav">Login</button>
  );
};
export default LoginButton;
