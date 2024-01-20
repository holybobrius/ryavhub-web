import { FC, useState } from "react";
import "../../App.css";
import "./TimelinePage.css";
import BottomNav from "../../components/BottomNav/BottomNav";
import NewTimelineItemModal from "../../components/NewTimelineItemModal/NewTimelineItemModal";
import Timeline from "../../components/Timeline/Timeline";
import { useTimeline } from "../../requests/timeline/useTimeline";

const TimelinePage: FC = () => {
  const { timelineItems, refetchTimelineItems } = useTimeline();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const changeVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section className="section-timeline">
      <Timeline
        items={timelineItems.length === 0 ? undefined : timelineItems}
      />
      <BottomNav changeVisibility={changeVisibility} />
      <NewTimelineItemModal
        visible={isVisible}
        changeVisibility={changeVisibility}
        fetchTimeline={refetchTimelineItems}
      />
    </section>
  );
};
export default TimelinePage;
