import {FC} from "react";
import {User} from "../../types/types";
import './UserContainer.css'
import Logout from '../../assets/icons/logout-desktop.svg?react'
import {useGetUserQuery, userApi} from "../../requests/user/userApi";
import {useUser} from "../../requests/user/useUser";

interface Props {
    user: User
}
export const UserContainer: FC<Props> = ({ user }) => {

    const { logout, isLogged } = useUser()

    const handleLogout = async () => {
        await fetch('/api/v4/auth', {
            method: 'DELETE'
        })
        await logout()
        // eslint-disable-next-line no-restricted-globals
        location.reload()
        console.log(user, isLogged)

    }

    return (
        <div className='user-container'>
            <p className="username">{user.name}</p>
            <button onClick={handleLogout} className={'logout-button'}><Logout /></button>
        </div>
    )
}