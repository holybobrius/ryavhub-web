import styled from 'styled-components';
import { FC } from 'react';


const NewButton = styled.button`
    width: 80px; height: 80px;
    position: absolute;
    top: 90vh;
    right: 5vw;
    border-radius: 100%;
    font-size: 5rem;
    &:before, &:after {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background: black;
    }
    &:before {
        width: 5px;
        margin: 10px auto;
    }
    &:after {
        margin: auto 10px;
        height: 5px;
    }
`;

interface Props {
    handleClick: () => void
}

const AddButton: FC<Props> = (props) => {
    return(
        <NewButton onClick={props.handleClick}/>
    )
}

export default AddButton