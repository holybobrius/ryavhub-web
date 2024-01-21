import { useGetUsersQuery } from "./usersApi";

export const useUsers = () => {
  const { data: users } = useGetUsersQuery();

  return users?.payload ?? [];
};
