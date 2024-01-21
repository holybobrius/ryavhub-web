import { FC, useState } from "react";
import "./Home.css";
import { useQuotes } from "../../requests/quotes/useQuotes";

const Home: FC = () => {
  const { quotes } = useQuotes();
  const [randomQuote, setRandomQuote] = useState<string>("Место для истории");

  const handleClick = () => {
    setRandomQuote(quotes ? quotes[Math.floor(Math.random() * quotes.length)].quote : 'Место для истории');
  };

  return (
    <section className="section-home">
      <div className="img-box">
        <img
          src={require("../../assets/images/hero-pic2.png")}
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
  );
};
export default Home;
