import { FC, useState, useEffect } from 'react'
import Quote from '../../components/Quote/Quote'
import * as Styled from './Quotes.style'
import axios from 'axios'
import NewQuoteModal from '../../components/NewQuoteModal/NewQuoteModal';
import AddButton from '../../components/AddButton/AddButton'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import LockedHome from '../LockedHome/LockedHome';
import backgroundImg from '../../assets/images/background.png'

interface QuotesUser {
    id: number;
    email: string;
    name: string;
 }

 interface QuotesApiResponseEntity {
    id: number;
    quote: string;
    quote_by: QuotesUser;
    created_by: QuotesUser;
    date: string;
 }

const Quotes: FC = () => {
    const [quotes, setQuotes] = useState<QuotesApiResponseEntity[]>([]);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const reduxStore = useSelector<RootState>(state => state.googleUser)
    const changeVisibility = () => {
        setIsVisible(!isVisible);
    }
    const fetchQuotes = async () => {
        const r = await axios.get<QuotesApiResponseEntity[]>('https://api.ryav.tk/v1/quotes');
        setQuotes(r.data.reverse());
    }
    useEffect(() => { fetchQuotes() }, []);

    if(reduxStore === null) {
        return(
            <LockedHome />
        )
    }

    return (
        <Styled.QuotesPage style={{backgroundImage: `url(${backgroundImg})`}}>
            <Styled.QuotesContainer>
                {quotes.map(quote => (
                    <Quote
                        key={quote.id}
                        quote={quote.quote}
                        date={quote.date}
                        author={quote.quote_by.name}
                    />
                ))}
            </Styled.QuotesContainer>
            <AddButton handleClick={changeVisibility}/>
            <NewQuoteModal visible={isVisible} changeVisibility={changeVisibility} fetchQuotes={fetchQuotes}/>
        </Styled.QuotesPage>
    )
}
export default Quotes;
