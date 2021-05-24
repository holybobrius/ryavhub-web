import { FC, useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { useForm } from 'react-hook-form';
import store from '../store/index'

const Modal = styled.div`
    display: block; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.7);
`;

const ModalContent = styled.div`
    background-color: #191B1F;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border-radius: 15px;
    width: 30%; 
    color: #aaa;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    justify-items: center;
`;

const TextArea = styled.textarea`
    background-color: #2e3136;
    border-style: none;
    border-radius: 10px;
    font-size: 1rem;
    width: 80%;
    padding: 7px;
`;

const Select = styled.select`
    background-color: #2e3136;
    border-style: none;
    border-radius: 10px;
    font-size: 1rem;
    width: 30%;
    height: 20vh;
    cursor: pointer;
    text-align-last: center;
`;

const Date = styled.input`
    background-color: #2e3136;
    border-style: none;
    border-radius: 10px;
    font-size: 1rem;
    width: 30%;
    padding: 3px;
    cursor: pointer;
    text-align: center;
`;

const Submit = styled.input`
    background-color: #2e3136;
    border-style: none;
    border-radius: 15px;
    margin-top: 10px;
    height: 4vh;
    width: 8vw;
    cursor: pointer;
    transition: 200ms ease;
    &:hover {
        color: white;
    }
`;

const P = styled.p`
    font-size: 14px;
    margin: 0;
`;
const Close = styled.span`
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    transition: 200ms ease;
    &:hover, :focus {
        color: white;
        text-decoration: none;
        cursor: pointer;
    }
`;

const Label = styled.label`
    font-size: 1rem;
    font-weight: bold;
`;

const Input = styled.input`
    background-color: #2e3136;
    border-style: none;
    border-radius: 10px;
    font-size: 1rem;
    width: 30%;
    text-align: center;
    padding: 3px;
`;

interface Props {
    visible: boolean;
    changeVisibility: () => void;
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
            <Modal id="modal">
                <ModalContent>
                    <Close onClick={props.changeVisibility}>&times;</Close>
                    <Form onSubmit={handleSubmit(data => {
                            axios.post('https://api.ryav.tk/v1/timeline?token='+reduxStore.googleUser?.tokenId, {
                                title: data.main,
                                participants: data.participants.map(Number),
                                location: data.location,
                                date: data.date
                            })
                            props.changeVisibility();
                        })}
                    >
                        <Label htmlFor="main">Событие</Label>
                        <TextArea {...register("main", { required: true })}></TextArea>
                        <Label htmlFor="location">Место</Label>
                        <Input {...register('location')}></Input>
                        <Label htmlFor="date">Дата</Label>
                        <Date {...register("date", { required: true })} type="date"></Date>
                        <Label htmlFor="author">Участники</Label>
                        <Select {...register("participants", { required: true })} multiple>
                            {usersArr}
                        </Select>
                        <P>Выбрать нескольких - Ctrl</P>
                        <Submit type="submit"></Submit>
                    </Form>
                </ModalContent>
            </Modal> : null
    )
}

export default NewTimelineItemModal;