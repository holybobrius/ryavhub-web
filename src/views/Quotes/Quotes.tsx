import { FC, useState, useEffect } from "react";
import Quote from "../../components/Quote/Quote";
import axios from "axios";
import NewQuoteModal from "../../components/NewQuoteModal/NewQuoteModal";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import LockedHome from "../LockedHome/LockedHome";
import "./Quotes.css";
import BottomNav from "../../components/BottomNav/BottomNav";

//FIXME type
interface QuotesUser {
  id: number;
  email: string;
  name: string;
}

//FIXME type
interface QuotesApiResponseEntity {
  id: number;
  quote: string;
  quote_by: QuotesUser;
  created_by: QuotesUser;
  date: string;
}

const Quotes: FC = () => {
  const [quotes, setQuotes] = useState<QuotesApiResponseEntity[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const changeVisibility = () => {
    setIsVisible(!isVisible);
  };
  const fetchQuotes = async () => {
    const r = await axios.get<QuotesApiResponseEntity[]>(
      "https://api.ryav.tk/v1/quotes"
    );
    setQuotes(r.data.reverse());
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

  //   <Styled.QuotesPage id="quotesContainer">
  //       <QuotesNavPanel changeVisibility={changeVisibility} />
  //       <Styled.QuotesContainer>
  //         {quotes.map((quote) => (
  //           <Quote
  //             key={quote.id}
  //             quote={quote.quote}
  //             date={quote.date}
  //             author={quote.quote_by.name}
  //           />
  //         ))}
  //       </Styled.QuotesContainer>

  //       {/*<AddButton handleClick={changeVisibility}/>*/}
  //       <NewQuoteModal
  //         visible={isVisible}
  //         changeVisibility={changeVisibility}
  //         fetchQuotes={fetchQuotes}
  //       />
  //     </Styled.QuotesPage>
};
export default Quotes;
