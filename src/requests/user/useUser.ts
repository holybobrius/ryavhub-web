import { useGetUserQuery } from "./userApi";
import {useEffect, useState} from "react";

export const useUser = () => {
  const { data: user, refetch: refetchUser, isError, isLoading } = useGetUserQuery();
  const [isLogged, setIsLogged] = useState<boolean>(!!user)

  console.log('aaa')

  // useEffect(() => {
  //   console.log(isLoading)
  //   setIsLogged(!!user)
  // }, [user, isLoading]);

  const logout = async () => {
    await refetchUser()
    setIsLogged(!isError)

    console.log('in hook', isLogged, user)
  }

  return {user: user?.payload, isLogged, refetchUser, logout, isLoading};
};
