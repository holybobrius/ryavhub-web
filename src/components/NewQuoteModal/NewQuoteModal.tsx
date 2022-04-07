import { FC, useState, useEffect } from 'react';
import * as Styled from './NewQuoteModal.style'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import store from '../../store/index';

interface Props {
    visible: boolean;
    changeVisibility: () => void;
    fetchQuotes: () => Promise<void>;
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

    const { register, handleSubmit } = useForm<FormValues>();
    return(
        props.visible ?
            <Styled.Modal id="modal">
                <Styled.ModalContent>
                    <Styled.Close onClick={props.changeVisibility}>&times;</Styled.Close>
                    <Styled.Form onSubmit={handleSubmit(data => {
                            //@ts-ignore
                            axios.post('https://api.ryav.tk/v1/quotes?token=' + reduxStore.googleUser?.tokenId, {
                                quote: data.quote,
                                quote_by: Number(data.author),
                                date: data.date
                            })
                            .then(() => {
                                props.fetchQuotes().then(() => props.changeVisibility());
                            })
                        })}
                    >
                        <Styled.Label htmlFor="quote">Цитата</Styled.Label>
                        <Styled.TextArea {...register("quote", { required: true })}/>
                        <Styled.Label htmlFor="author">Автор</Styled.Label>
                        <Styled.Select {...register("author", { required: true })}>
                            {users.map(user => (
                                <Styled.Option value={user.id}>{user.name}</Styled.Option>
                            ))}
                        </Styled.Select>
                        <Styled.Label htmlFor="date">Дата</Styled.Label>
                        <Styled.Date {...register("date", { required: true })} type="date"/>
                        <Styled.Submit type="submit"/>
                    </Styled.Form>
                </Styled.ModalContent>
            </Styled.Modal> : null
    )
}

export default NewQuoteModal;
