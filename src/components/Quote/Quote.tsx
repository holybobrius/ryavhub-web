import { FC } from "react";
import Tag from "../Tag/Tag";
import "./Quote.css";
import dayjs from "dayjs";

type Props = {
  quote: string;
  author: string;
  date: string;
};

const Quote: FC<Props> = ({ quote, author, date }) => (
  <div className="quote-container">
    <p className="quote-main">{quote}</p>
    <div className="quote-info">
      <Tag user={{ id: 0, name: author }} /> {dayjs(date).locale('ru').format('D MMMM YYYY')}
    </div>
  </div>
);

export default Quote;
