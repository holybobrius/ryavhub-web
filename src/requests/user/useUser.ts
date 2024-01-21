import { useGetUserQuery } from "./userApi";

export const useUser = () => {
  const { data: user } = useGetUserQuery();

  return user?.payload;
};
