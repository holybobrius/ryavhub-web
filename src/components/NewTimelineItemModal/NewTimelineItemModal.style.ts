import styled from 'styled-components'

export const Modal = styled.div`
    display: flex;
    align-items: center; justify-content: center;
    position: absolute;
    left: 0; top: 0;
    width: 100%; height: 100%;
    z-index: 999;
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.7);
    font-family: 'Basis Grotesque Pro';
`;

export const ModalContent = styled.div`
    background-color: #191B1F;
    padding: 20px;
    border-radius: 15px;
    width: 30%;
    color: #aaa;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    justify-items: center;
    
`;

export const TextArea = styled.textarea`
    background-color: #2e3136;
    border-style: none;
    border-radius: 10px;
    font-size: 1rem;
    width: 80%;
    padding: 7px;
    font-family: 'Basis Grotesque Pro';
    color: white;
`;

export const Select = styled.select`
    background-color: #2e3136;
    border-style: none;
    border-radius: 10px;
    font-size: 1rem;
    width: 30%;
    height: 20vh;
    cursor: pointer;
    text-align-last: center;
    font-family: 'Basis Grotesque Pro';
    color: white;
`;

export const Date = styled.input`
    background-color: #2e3136;
    border-style: none;
    border-radius: 10px;
    font-size: 1rem;
    width: 30%;
    padding: 3px;
    cursor: pointer;
    text-align: center;
    font-family: 'Basis Grotesque Pro';
    color: white;
`;

export const Submit = styled.input`
    background-color: #2e3136;
    border-style: none;
    border-radius: 15px;
    font-size: 16px;
    margin-top: 10px;
    height: 4vh;
    width: 8vw;
    cursor: pointer;
    transition: 200ms ease;
    font-family: 'Basis Grotesque Pro';
    color: #aaa;
    &:hover {
        color: white;
    }
`;

export const P = styled.p`
    font-size: 14px;
    margin: 0;
`;
export const Close = styled.span`
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

export const Label = styled.label`
    font-size: 1rem;
    font-weight: bold;
`;

export const Input = styled.input`
    background-color: #2e3136;
    border-style: none;
    border-radius: 10px;
    font-size: 1rem;
    width: 30%;
    text-align: center;
    padding: 3px;
    font-family: 'Basis Grotesque Pro';
    color: white;
`;
