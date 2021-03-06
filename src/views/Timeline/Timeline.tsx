import { FC, useState, useEffect } from "react";
import { Chrono } from 'react-chrono'
import * as Styled from './Timeline.style'
import '../../App.css';
import axios from 'axios';
import { TimelineItemModel } from "react-chrono/dist/models/TimelineItemModel";
import AddButton from '../../components/AddButton/AddButton'
import NewTimelineItemModal from '../../components/NewTimelineItemModal/NewTimelineItemModal'
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import LockedHome from "../LockedHome/LockedHome";

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

const TimeLine: FC = () => {
    const [itemsState, setItemsState] = useState<TimelineItemModel[]>();
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const reduxStore = useSelector<RootState>(state => state.googleUser)
    const changeVisibility = () => {
        setIsVisible(!isVisible);
    }
    const fetchTimeline = async () => {
        const r = await axios.get<AxiosResponseObj[]>('https://api.ryav.tk/v1/timeline');
            let itemsArr: TimelineItemModel[] = r.data.reverse().map(i => {
                let participants = i.participants.map(p => p.name).join(', ')
                return {
                    title: i.date,
                    cardTitle: i.title,
                    cardSubtitle: i.location,
                    cardDetailedText: participants
                }
            })
            setItemsState(itemsArr)
    }
    useEffect(() => {
        fetchTimeline();
    }, [])
    if(reduxStore === null) {
        return(
            <LockedHome />
        )
    }
    return (
            <Styled.TimelineContainerPage>
                <div style={{ width: "900px", height: "90vh" }}>
                    <Chrono
                        items={itemsState}
                        mode="VERTICAL_ALTERNATING"
                        theme={{primary:"#4290f6", secondary: "#cac8c8" }}
                        allowDynamicUpdate={true}
                    />
                </div>
                <AddButton handleClick={changeVisibility}/>
                <NewTimelineItemModal visible={isVisible} changeVisibility={changeVisibility} fetchTimeline={fetchTimeline}/>
            </Styled.TimelineContainerPage>

    );
}
export default TimeLine;
