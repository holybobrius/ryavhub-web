import {FC, useState, useEffect } from "react";
import styled from 'styled-components'
import axios from 'axios'
// Styles
const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    
`;

const Half = styled.div`
    height: 100%; width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MemeCard = styled.img`
    width: 350px;
    height: 450px;
    /* meme possibility */
`;

const Blue = styled.div`
    height: 50%; 
    background-color: blue;
`;

const Yellow = styled.div`
    height: 50%; 
    background-color: yellow;
`;

const BioCard = styled.div`
    color: #fff;
    font-family: 'Basis Grotesque Pro';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const BioCardTitle = styled.div`
    font-size: 8rem;
    font-weight: bold;
`;

const BioCardText = styled.div`
    text-align: center;
    font-size: 1.5rem;
`;

const GenerateButton = styled.button`
    background-color: transparent;
    font-size: 1rem;
    outline: none;
    border-style: none;
    border: 1px solid #aaa;
    color: #aaa;
    border-radius: 15px;
    padding: 7px;
    cursor: pointer;
    transition: 200ms ease;
    &:hover {
        background-color: #aaa;
        color: #191B1F;
    }
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

const Home: FC = () => {
    const [quotes, setQuotes] = useState<QuotesApiResponseEntity[]>([]);
    const [randomQuote, setRandomQuote] = useState<string>('Место для истории');
    useEffect(() => {
        (async () => {
            const r = await axios.get<QuotesApiResponseEntity[]>('https://api.ryav.tk/v1/quotes');
            setQuotes(r.data);
        })();
}, []);
    const handleClick = () => {
        setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)].quote)
        console.log(randomQuote);
    }
    return (
        <HomeContainer>
            <Half>
                <MemeCard src="https://i.imgur.com/aXyJDID.png">
                </MemeCard>
            </Half>
            <Half>
                <BioCard>
                    <BioCardTitle>
                        РявХаб
                    </BioCardTitle>
                    <BioCardText>
                        {<p>
                            {randomQuote}
                        </p>}
                        <GenerateButton onClick={handleClick}>Сгенерировать цитату</GenerateButton>
                    </BioCardText>
                </BioCard>
            </Half>
        </HomeContainer>
    );
}
export default Home
