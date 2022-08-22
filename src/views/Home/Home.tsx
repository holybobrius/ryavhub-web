import { FC, useState, useEffect } from "react";
import axios from "axios";
import { RootState } from "../../store";
import LockedHome from "../LockedHome/LockedHome";
import { useSelector } from "react-redux";
import "./Home.css";

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
  const [randomQuote, setRandomQuote] = useState<string>("Место для истории");
  useEffect(() => {
    (async () => {
      const r = await axios.get<QuotesApiResponseEntity[]>(
        "https://api.ryav.tk/v1/quotes"
      );
      setQuotes(r.data);
    })(); //FIXME IIFE
  }, []);

  const handleClick = () => {
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)].quote);
  };

  return (
    <section className="section-home">
      <div className="img-box">
        <img
          src={require("../../assets/images/hero-pic.png")}
          alt="Sad face Emoji"
        />
      </div>
      <div className="text-box">
        <div className="text-box-inner">
          <h1 className="heading">РявХаб</h1>
          <p className="info-text">{randomQuote}</p>
          <button className="hero-btn" onClick={handleClick}>
            Сгенерировать цитату
          </button>
        </div>
      </div>
    </section>

    // <Styled.HomeContainer style={{ backgroundImage: `url(${backgroundImg})` }}>
    //   <Styled.ImgHalf>
    //     <Styled.MemeCard src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"></Styled.MemeCard>
    //   </Styled.ImgHalf>
    //   <Styled.Half>
    //     <Styled.InfoWrapper>
    //       <Styled.InfoTitle>РявХаб</Styled.InfoTitle>
    //       <Styled.InfoText>{randomQuote}</Styled.InfoText>
    //       <Styled.GenerateButton onClick={handleClick}>
    //         Сгенерировать цитату
    //       </Styled.GenerateButton>
    //     </Styled.InfoWrapper>
    //   </Styled.Half>
    // </Styled.HomeContainer>
  );
};
export default Home;
