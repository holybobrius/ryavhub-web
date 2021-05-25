import { FC, useState, useEffect } from 'react'
import Quote from '../components/Quote'
import styled from 'styled-components'
import axios from 'axios'
import NewQuoteModal from '../components/NewQuoteModal';
import AddButton from '../components/AddButton'

const QuotesPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const QuotesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5vh;
`;

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
    const changeVisibility = () => {
        setIsVisible(!isVisible);
    }
    const fetchQuotes = async () => {
        const r = await axios.get<QuotesApiResponseEntity[]>('https://api.ryav.tk/v1/quotes');
        setQuotes(r.data.reverse());
    }
    useEffect(() => { fetchQuotes() }, []);
    return (
        <QuotesPage>
            <QuotesContainer>
                {quotes.map(quote => (
                    <Quote
                        quote={quote.quote}
                        date={quote.date}
                        author={quote.quote_by.name}
                    />
                ))}
            </QuotesContainer>
            <AddButton handleClick={changeVisibility}/>
            <NewQuoteModal visible={isVisible} changeVisibility={changeVisibility} fetchQuotes={fetchQuotes}/>
        </QuotesPage>
    )
}
export default Quotes;
