import { FC } from "react";
import TimelineItem from "../TimelineItem/TimelineItem";
import "./Timeline.css";

interface Props {
  items: any;
}

const Timeline: FC<Props> = (props) => {
  if (!props.items) return <></>;
  return (
    <div className="timeline-container">
      {props.items.map(
        (i: {
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
