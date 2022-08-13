import { FC } from "react";
import Tag from "../Tag/Tag";
import "./TimelineItem.css";

interface Props {
  date: string;
  place: string;
  title: string;
  participants: any;
}

const TimelineItem: FC<Props> = (props) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <p className="event-info">
          {props.date} | {props.place}
        </p>
        <p className="event-title">
          {props.title}
          <span className="line"></span>
          <span className="circle"></span>
        </p>
        <div className="tags-box">
          {props.participants.map((n: { name: string }) => (
            <Tag key={props.participants.indexOf(n)} text={n.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;