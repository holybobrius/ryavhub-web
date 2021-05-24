import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { useForm } from 'react-hook-form';
import store from '../store/index';

const Modal = styled.div`
    display: flex; 
    align-items: center; justify-content: center;
    position: absolute;
    left: 0; top: 0;
    width: 100%; height: 100%;
    z-index: 999;
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.7);
`;

const ModalContent = styled.div`
    background-color: #191B1F;
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
    height: 15vh;
    font-size: 1rem;
    width: 80%;
    padding: 7px;
`;

const Select = styled.select`
    background-color: #2e3136;
    border-style: none;
    border-radius: 10px;
    font-size: 1rem;
    height: 4vh;
    width: 20%;
    cursor: pointer;
    text-align-last: center;
`;

const Date = styled.input`
    background-color: #2e3136;
    border-style: none;
    border-radius: 10px;
    font-size: 1rem;
    width: 8vw;
    height: 4vh;
    padding: 3px;
    text-align: center;
    cursor: pointer;
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

const Close = styled.span`
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    &:hover, :focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
    }
`;

const Label = styled.label`
    font-size: 1rem;
    font-weight: bold;
`;

const Option = styled.option`
    text-align: center;
`;

interface Props {
    visible: boolean;
    changeVisibility: () => void;
}

type FormValues = {
    quote: string,
    author: string,
    date: string
}

const NewQuoteModal: FC<Props> = (props) => {
    const [users, setUsers] = useState<any[]>([]);
    useEffect(() => {
            (async () => {
                const r = await axios.get<any[]>('https://api.ryav.tk/v1/users');
                setUsers(r.data);
            })();
    }, []);
    const reduxStore = store.getState();
    console.log(reduxStore);

    const { register, handleSubmit } = useForm<FormValues>();
    return(
        props.visible ?
            <Modal id="modal">
                <ModalContent>
                    <Close onClick={props.changeVisibility}>&times;</Close>
                    <Form onSubmit={handleSubmit(data => {
                            console.log(reduxStore.googleUser?.tokenId);
                            //@ts-ignore
                            axios.post('https://api.ryav.tk/v1/quotes?token=' + reduxStore.googleUser?.tokenId, {
                                quote: data.quote,
                                quote_by: Number(data.author),
                                date: data.date
                            })
                            props.changeVisibility();
                        })}
                    >
                        <Label htmlFor="quote">Цитата</Label>
                        <TextArea {...register("quote", { required: true })}></TextArea>
                        <Label htmlFor="author">Автор</Label>
                        <Select {...register("author", { required: true })}>
                            {users.map(user => (
                                <Option value={user.id}>{user.name}</Option>
                            ))}
                        </Select>
                        <Label htmlFor="date">Дата</Label>
                        <Date {...register("date", { required: true })} type="date"></Date>
                        <Submit type="submit"></Submit>
                    </Form>
                </ModalContent>
            </Modal> : null
    )
}

export default NewQuoteModal;
