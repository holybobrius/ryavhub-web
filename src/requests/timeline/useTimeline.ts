import {
  useGetTimelineItemsQuery,
  useSendTimelineItemMutation,
} from "./timelineApi";

export const useTimeline = () => {
  const { data: timelineItems, refetch: refetchTimelineItems } =
    useGetTimelineItemsQuery();

  const [sendTimelineItem] = useSendTimelineItemMutation();

  return {
    timelineItems: timelineItems?.payload ?? [],
    sendTimelineItem,
    refetchTimelineItems,
  };
};
