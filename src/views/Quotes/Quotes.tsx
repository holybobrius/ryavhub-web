import { FC, useState, useEffect } from "react";
import Quote from "../../components/Quote/Quote";
import NewQuoteModal from "../../components/NewQuoteModal/NewQuoteModal";
import { quotesRequest } from "../../requests/quotes";
import { Quotes } from "../../types/types";
import "./Quotes.css";
import BottomNav from "../../components/BottomNav/BottomNav";
import Wheel from "../../assets/images/wheel2.svg?react";

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
    fetchQuotes();
  }, []);

  return (
    <section className="quotes-page" id="quotesContainer">
      <BottomNav changeVisibility={changeVisibility} />
      <Wheel className="quotes-wheel" />
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
