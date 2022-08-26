import { FC, useState, useEffect } from "react";
import Quote from "../../components/Quote/Quote";
import NewQuoteModal from "../../components/NewQuoteModal/NewQuoteModal";
import { quotesRequest } from "../../requests/quotes";
import { Quotes } from "../../types/types";
import "./Quotes.css";
import BottomNav from "../../components/BottomNav/BottomNav";

type QuotesUser = {
  id: number;
  email: string;
  name: string;
};

type QuotesApiResponseEntity = {
  id: number;
  quote: string;
  quote_by: QuotesUser;
  created_by: QuotesUser;
  date: string;
};

const QuotesPage: FC = () => {
  const [quotes, setQuotes] = useState<Quotes.Quote[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const changeVisibility = () => {
    setIsVisible(!isVisible);
  };

  const fetchQuotes = () => {
    quotesRequest().then(({ payload }) => setQuotes(payload.reverse()));
  };

  useEffect(() => {
    fetchQuotes(); //FIXME через промисы
  }, []);

  return (
    <section className="quotes-page" id="quotesContainer">
      <BottomNav changeVisibility={changeVisibility} />
      <div className="quotes-container">
        {quotes.map((quote) => (
          <Quote
            key={quote.id}
            quote={quote.quote}
            date={quote.date}
            author={quote.quote_by.name}
          />
        ))}
      </div>
      <div className="img-box">
        <img
          src={require("../../assets/images/Композиция 1_тест мне интересно.png")}
          alt=""
        />
      </div>
      {/*<AddButton handleClick={changeVisibility}/>*/}
      <NewQuoteModal
        visible={isVisible}
        changeVisibility={changeVisibility}
        fetchQuotes={fetchQuotes}
      />
    </section>
  );
};
export default QuotesPage;
