import { FC, useState, useEffect } from "react";
import "../../App.css";
import axios from "axios";
import "./TimelinePage.css";
import AddButton from "../../components/AddButton/AddButton";
import NewTimelineItemModal from "../../components/NewTimelineItemModal/NewTimelineItemModal";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Timeline from "../../components/Timeline/Timeline";

interface Participant {
  id: number;
  name: string;
  email: string;
}
interface CreatedBy {
  id: number;
  name: string;
  email: string;
}
interface AxiosResponseObj {
  id: number;
  title: string;
  location: string;
  date: string;
  participants: Participant[];
  created_by: CreatedBy;
}

const TimelinePage: FC = () => {
  const [timelineItems, setTimelineItems] = useState<any>([]);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const reduxStore = useSelector<RootState>((state) => state.googleUser);

  const changeVisibility = () => {
    setIsVisible(!isVisible);
  };

  const fetchTimeline = async () => {
    const r = await axios.get<AxiosResponseObj[]>(
      "https://api.ryav.tk/v1/timeline"
    );
    setTimelineItems(r.data.reverse());
  };
  useEffect(() => {
    fetchTimeline();
  }, []);

  return (
    <section className="section-timeline">
      <Timeline items={timelineItems.length === 0 ? "" : timelineItems} />
      <AddButton handleClick={changeVisibility} />
      <NewTimelineItemModal
        visible={isVisible}
        changeVisibility={changeVisibility}
        fetchTimeline={fetchTimeline}
      />
    </section>
  );
};
export default TimelinePage;
