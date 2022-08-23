import { FC } from "react";
import TimelineItem from "../TimelineItem/TimelineItem";
import "./Timeline.css";

type Props = {
  items: any; //FIXME типы, когда доедут контракты сваггера
};

const Timeline: FC<Props> = ({ items }) => {
  if (!items) return null;
  return (
    <div className="timeline-container">
      {items.map(
        (i: {
          //FIXME types
          date: string;
          location: string;
          title: string;
          participants: string[];
        }) => (
          <TimelineItem
            date={i.date}
            place={i.location}
            title={i.title}
            participants={i.participants}
            key={i.title}
          />
        )
      )}
    </div>
  );
};

export default Timeline;
