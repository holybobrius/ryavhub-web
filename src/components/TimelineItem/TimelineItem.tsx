import { FC } from "react";
import Tag from "../Tag/Tag";
import "./TimelineItem.css";
import dayjs from "dayjs";

type Props = {
  date: string;
  place: string;
  title: string;
  participants: any;
};

const TimelineItem: FC<Props> = ({ date, place, title, participants }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <p className="event-info">
        {dayjs(date).locale('ru').format('D MMMM YYYY')} | {place}
      </p>
      <p className="event-title">
        {title}
        <span className="line"></span>
        <span className="circle"></span>
      </p>
      <div className="tags-box">
        {participants.map((n: { name: string }) => (
          <Tag key={participants.indexOf(n)} user={n} />
        ))}
      </div>
    </div>
  </div>
);

export default TimelineItem;
