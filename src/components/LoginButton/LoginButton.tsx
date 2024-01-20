import { FC } from "react";
import "./LoginButton.css";
import { useUser } from "../../requests/user/useUser";

const LoginButton: FC = () => {
  const user = useUser();

  return user ? (
    <button className="login-btn--nav">Logout</button>
  ) : (
    <button className="login-btn--nav">Login</button>
  );
};
export default LoginButton;
