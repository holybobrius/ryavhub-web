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
const Quotes: FC = () => {
    const [quotes, setQuotes] = useState<QuotesApiResponseEntity[]>([]);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const modal = document.querySelector('#modal');
    const addQuote = document.querySelector('#add-quote');
    const changeVisibility = () => {
        setIsVisible(!isVisible);
    }
    console.log(modal);
    useEffect(() => {
            (async () => {
                const r = await axios.get<QuotesApiResponseEntity[]>('https://api.ryav.tk/v1/quotes');
                setQuotes(r.data);
            })();
    }, []);
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
            <AddButton id="add-quote" onClick={changeVisibility}/>
            <NewQuoteModal visible={isVisible} changeVisibility={changeVisibility}/>
        </QuotesPage>
    )
}
export default Quotes;
