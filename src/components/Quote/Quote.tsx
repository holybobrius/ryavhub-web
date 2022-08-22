import { FC } from "react";
import Tag from "../Tag/Tag";
import "./Quote.css";

interface Props {
  quote: string;
  author: string;
  date: string;
}

const Quote: FC<Props> = ({ quote, author, date }) => (
  <div className="quote-container">
    <p className="quote-main">{quote}</p>
    <p className="quote-info">
      <Tag user={{ id: 0, name: author }} /> {date}
    </p>
  </div>
);

export default Quote;
