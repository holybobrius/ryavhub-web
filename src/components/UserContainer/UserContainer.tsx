import {FC} from "react";
import {User} from "../../types/types";
import './UserContainer.css'
import Logout from '../../assets/icons/logout-desktop.svg?react'
import {useGetUserQuery, userApi} from "../../requests/user/userApi";

interface Props {
    user: User
}
export const UserContainer: FC<Props> = ({ user }) => {

    const { refetch: refetchUser } = useGetUserQuery();

    const handleLogout = async () => {
        await fetch('/api/v4/auth', {
            method: 'DELETE'
        })
        refetchUser()
    }

    return (
        <div className='user-container'>
            <p className="username">{user.name}</p>
            <button onClick={handleLogout} className={'logout-button'}><Logout /></button>
        </div>
    )
}