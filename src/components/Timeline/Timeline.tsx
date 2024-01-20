import { FC } from "react";
import { Timeline as TimelineType } from "../../types/types";
import TimelineItem from "../TimelineItem/TimelineItem";
import "./Timeline.css";

type Props = {
  items?: TimelineType.Timeline[];
};

const Timeline: FC<Props> = ({ items }) => {
  if (!items) return null;
  return (
    <div className="timeline-container">
      {items.map((i: TimelineType.Timeline) => (
        <TimelineItem
          date={i.date}
          place={i.location}
          title={i.title}
          participants={i.participants}
          key={i.title}
        />
      ))}
    </div>
  );
};

export default Timeline;
