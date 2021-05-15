import { FC, useState, useEffect } from 'react'
import Quote from '../components/Quote'
import styled from 'styled-components'
import axios from 'axios'
import NewQuoteModal from '../components/NewQuoteModal';

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

 const AddButton = styled.button`
    position: absolute;
    top: 90vh;
    right: 5vw;
    font-size: 5rem;
    border-radius: 100px;
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
 `;
const Quotes: FC = () => {
    const [quotes, setQuotes] = useState<QuotesApiResponseEntity[]>([]);
    useEffect(() => {
            (async () => {
                const r = await axios.get<QuotesApiResponseEntity[]>('https://api.ryav.tk/v1/quotes');
                setQuotes(r.data);
            })();
    }, []);
    console.log(quotes);
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
            <AddButton>+</AddButton>
        <NewQuoteModal />
        </QuotesPage>
    )
}
export default Quotes;
