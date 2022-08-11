import { FC } from "react";
import "./Quote.css";

interface Props {
  quote: string;
  author: string;
  date: string;
}

const Quote: FC<Props> = (props) => {
  return (
    <div className="quote-container">
      <p className="quote-main">{props.quote}</p>
      <p className="quote-info">
        {props.author} | {props.date}
      </p>
    </div>
  );
};

export default Quote;
