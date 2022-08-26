import { FC, useState, useEffect } from "react";
import "../../App.css";
import "./TimelinePage.css";
import BottomNav from "../../components/BottomNav/BottomNav";
import NewTimelineItemModal from "../../components/NewTimelineItemModal/NewTimelineItemModal";
import Timeline from "../../components/Timeline/Timeline";
import { timelineRequest } from "../../requests/timeline";
import { Timeline as TimelineType } from "../../types/types";

type Participant = {
  id: number;
  name: string;
  email: string;
};

type CreatedBy = {
  id: number;
  name: string;
  email: string;
};

type AxiosResponseObj = {
  id: number;
  title: string;
  location: string;
  date: string;
  participants: Participant[];
  created_by: CreatedBy;
};

const TimelinePage: FC = () => {
  const [timelineItems, setTimelineItems] = useState<TimelineType.Timeline[]>(
    []
  );
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const changeVisibility = () => {
    setIsVisible(!isVisible);
  };

  const fetchTimeline = () => {
    timelineRequest().then(({ payload }) => setTimelineItems(payload));
  };
  useEffect(() => {
    fetchTimeline();
  }, []);

  return (
    <section className="section-timeline">
      {/* FIXME в Timeline.tsx items это [], а тут строка, как вариант сделать items?: [] и отдавать undefined */}
      <Timeline items={timelineItems.length === 0 ? "" : timelineItems} />
      <BottomNav changeVisibility={changeVisibility} />
      <NewTimelineItemModal
        visible={isVisible}
        changeVisibility={changeVisibility}
        fetchTimeline={fetchTimeline}
      />
    </section>
  );
};
export default TimelinePage;
