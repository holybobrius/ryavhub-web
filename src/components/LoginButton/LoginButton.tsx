import { FC } from "react";
import "./LoginButton.css";
import { useUser } from "../../requests/user/useUser";
import { UserContainer } from "../UserContainer/UserContainer";

const LoginButton: FC = () => {
  const user = useUser();

  return user ? (
    <UserContainer user={user} />
  ) : (
    <a href="https://t.me/ryavbot" target="_blank" rel="noreferrer">
      <button className="login-btn--nav">Login</button>
    </a>
  );
};
export default LoginButton;
