import { FC } from "react";
import Tag from "../Tag/Tag";
import "./TimelineItem.css";

// FIXME type Props = {}
interface Props {
  date: string;
  place: string;
  title: string;
  participants: any;
}

const TimelineItem: FC<Props> = (
  props //FIXME разверни в {...}
) => (
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
          <Tag key={props.participants.indexOf(n)} user={n} />
        ))}
      </div>
    </div>
  </div>
);

export default TimelineItem;
