import {FC, useState, useEffect } from "react";
import * as Styled from './Home.style'
import axios from 'axios'
import { RootState } from "../../store";
import LockedHome from "../LockedHome/LockedHome";
import { useSelector } from "react-redux";
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

const Home: FC = () => {
    const reduxStore = useSelector<RootState>(state => state.googleUser)
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
    }
    
    /*
    if(reduxStore === null) {
        return(
            <LockedHome />
        )
    }
    */

    return (
        <Styled.HomeContainer style={{backgroundImage: `url(${backgroundImg})`}}>
            <Styled.Half>
                <Styled.MemeCard src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg">
                </Styled.MemeCard>
            </Styled.Half>
            <Styled.Half>
                <Styled.InfoWrapper>
                    <Styled.InfoTitle>
                        РявХаб
                    </Styled.InfoTitle>
                    <Styled.InfoText>
                        <Styled.RandomQuote>
                            {randomQuote}
                        </Styled.RandomQuote>
                        <Styled.GenerateButton onClick={handleClick}>Сгенерировать цитату</Styled.GenerateButton>
                    </Styled.InfoText>
                </Styled.InfoWrapper>
            </Styled.Half>
        </Styled.HomeContainer>
    );
}
export default Home
