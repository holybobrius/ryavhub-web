import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'

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
        height: 15vh;
        font-size: 1rem;
        width: 80%;
    `;

    const Select = styled.select`
        background-color: #2e3136;
        border-style: none;
        border-radius: 10px;
        font-size: 1rem;
        width: 20%;
    `;

    const Date = styled.input`
        background-color: #2e3136;
        border-style: none;
        border-radius: 10px;
        font-size: 1rem;
        width: 25%;
        padding: 3px;
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
            transform: scale(1.03);
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

const NewQuoteModal: FC = () => {
    const [users, setUsers] = useState<any[]>([]);
    useEffect(() => {
            (async () => {
                const r = await axios.get<any[]>('https://api.ryav.tk/v1/users');
                setUsers(r.data);
            })();
    }, []);
    return(
        <Modal>
                <ModalContent>
                    <Close>&times;</Close>
                    <Form>
                        <Label htmlFor="quote">Цитата</Label>
                        <TextArea name="quote"></TextArea>
                        <Label htmlFor="author">Автор</Label>
                        <Select name="author">
                            {users.map(user => (
                                <option>{user.name}</option>
                            ))}
                        </Select>
                        <Label htmlFor="date">Дата</Label>
                        <Date name="date" type="date"></Date>
                        <Submit type="submit"></Submit>
                    </Form>
                </ModalContent>
            </Modal>
    )
}

export default NewQuoteModal;