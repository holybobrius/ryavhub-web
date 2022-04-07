import { FC, useState, useEffect, useMemo } from 'react';
import * as Styled from './NewTimelineItemModal.style'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import store from '../../store/index'

interface Props {
    visible: boolean;
    changeVisibility: () => void;
    fetchTimeline: () => Promise<void>;
}

type FormValues = {
    main: string,
    participants: number[],
    date: string,
    location: string
}


const NewTimelineItemModal: FC<Props> = (props) => {
    const reduxStore = store.getState();
    const [users, setUsers] = useState<any[]>([]);
    useEffect(() => {
            (async () => {
                const r = await axios.get<any[]>('https://api.ryav.tk/v1/users');
                setUsers(r.data);
            })();
    }, []);
    const usersArr = users.map(user => (
        <option value={user.id}>{user.name}</option>
    ))
    const { register, handleSubmit } = useForm<FormValues>();
    return(
        props.visible ?
            <Styled.Modal id="modal">
                <Styled.ModalContent>
                    <Styled.Close onClick={props.changeVisibility}>&times;</Styled.Close>
                    <Styled.Form onSubmit={handleSubmit(data => {
                            axios.post('https://api.ryav.tk/v1/timeline?token='+reduxStore.googleUser?.tokenId, {
                                title: data.main,
                                participants: data.participants.map(Number),
                                location: data.location,
                                date: data.date
                            })
                            .then(() => {
                                props.fetchTimeline().then(() => props.changeVisibility())
                            })
                        })}
                    >
                        <Styled.Label htmlFor="main">Событие</Styled.Label>
                        <Styled.TextArea {...register("main", { required: true })}></Styled.TextArea>
                        <Styled.Label htmlFor="location">Место</Styled.Label>
                        <Styled.Input {...register('location')}></Styled.Input>
                        <Styled.Label htmlFor="date">Дата</Styled.Label>
                        <Styled.Date {...register("date", { required: true })} type="date"></Styled.Date>
                        <Styled.Label htmlFor="author">Участники</Styled.Label>
                        <Styled.Select {...register("participants", { required: true })} multiple>
                            {usersArr}
                        </Styled.Select>
                        <Styled.P>Выбрать нескольких - Ctrl</Styled.P>
                        <Styled.Submit type="submit"></Styled.Submit>
                    </Styled.Form>
                </Styled.ModalContent>
            </Styled.Modal> : null
    )
}

export default NewTimelineItemModal;
