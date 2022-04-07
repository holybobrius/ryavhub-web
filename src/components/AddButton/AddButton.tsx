import * as Styled from './AddButton.style'
import { FC } from 'react';
import store from '../../store/index'

interface Props {
    handleClick: () => void
}

const AddButton: FC<Props> = (props) => {
    const reduxStore = store.getState();
    return(
        (reduxStore.googleUser !== null) ?
        <Styled.NewButton onClick={props.handleClick}/>
        : null
    )
}

export default AddButton