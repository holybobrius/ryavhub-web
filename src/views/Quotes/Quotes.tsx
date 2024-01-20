import { FC, useState } from "react";
import Quote from "../../components/Quote/Quote";
import NewQuoteModal from "../../components/NewQuoteModal/NewQuoteModal";
import "./Quotes.css";
import BottomNav from "../../components/BottomNav/BottomNav";
import { ReactComponent as Wheel } from "../../assets/images/wheel2.svg";
import { useQuotes } from "../../requests/quotes/useQuotes";

const QuotesPage: FC = () => {
  const { quotes, refetchQuotes } = useQuotes();
  const [isVisible, setIsVisible] = useState(false);
  const changeVisibility = () => {
    setIsVisible(!isVisible);
  };

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
        fetchQuotes={refetchQuotes}
      />
    </section>
  );
};
export default QuotesPage;
