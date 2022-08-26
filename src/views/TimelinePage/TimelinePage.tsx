import { FC, useState, useEffect } from "react";
import "../../App.css";
import "./TimelinePage.css";
import BottomNav from "../../components/BottomNav/BottomNav";
import NewTimelineItemModal from "../../components/NewTimelineItemModal/NewTimelineItemModal";
import Timeline from "../../components/Timeline/Timeline";
import { timelineRequest } from "../../requests/timeline";
import { Timeline as TimelineType } from "../../types/types";

const TimelinePage: FC = () => {
  const [timelineItems, setTimelineItems] = useState<TimelineType.Timeline[]>(
    []
  );
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const changeVisibility = () => {
    setIsVisible(!isVisible);
  };

  const fetchTimeline = () => {
    timelineRequest().then(({ payload }) =>
      setTimelineItems(payload.reverse())
    );
  };
  useEffect(() => {
    fetchTimeline();
  }, []);

  return (
    <section className="section-timeline">
      <Timeline
        items={timelineItems.length === 0 ? undefined : timelineItems}
      />
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
