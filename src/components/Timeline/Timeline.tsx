import { FC } from "react";
import TimelineItem from "../TimelineItem/TimelineItem";
import "./Timeline.css";

//FIXME type Props = {..}
interface Props {
  items: any; //FIXME типы, когда доедут контракты сваггера
}

const Timeline: FC<Props> = (props) => {
  //FIXME разверни props в {items}
  if (!props.items) return null;
  return (
    <div className="timeline-container">
      {props.items.map(
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
