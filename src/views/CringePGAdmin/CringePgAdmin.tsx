import {Button, Checkbox, CheckboxOptionType, Input} from "antd";
import './CringePgAdmin.css'
import {useEffect, useState} from "react";
import {Users} from "../../types/types";
import {usersRequest} from "../../requests/users";
import {CheckboxValueType} from "antd/es/checkbox/Group";

export const CringePgAdmin = () => {
    const [users, setUsers] = useState<Users.User[]>([{
        name: 'Бобр',
        id: 0,
        created_utc: new Date()
    },
        {
            name: 'Лаксвет',
            id: 1,
            created_utc: new Date()
        },
        {
            name: 'Картер',
            id: 2,
            created_utc: new Date()
        },]);
    // useEffect(() => {
    //     usersRequest().then(({ payload }) => setUsers(payload));
    // }, []);

    return(
        <section className='cringe-pg'>
            <div className={'admin-forms-container'}>
                <h4>Добавить игру в общий список</h4>
                <Input size={'large'} className={'admin-input'}></Input>
                <div className="checkboxes-container">{users.map(n => <Checkbox style={{color: "#fff"}}>{n.name}</Checkbox>)}</div>
                <Button type='primary' size={'large'} className="send-game">Отправить</Button>
            </div>
        </section>
    )
}