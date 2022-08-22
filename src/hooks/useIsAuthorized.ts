import { RootState } from "../store";
import { useSelector } from "react-redux";

export const useIsAuthorized = () => {
  const user = useSelector((s: RootState) => s.googleUser);
  return Boolean(user);
};
