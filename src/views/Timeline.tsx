import { Timeline } from "antd";
import {FC} from "react";
import { Chrono } from 'react-chrono'
import styled from 'styled-components'
import '../App.css';


const TimelineContainerPage = styled.div`
    display: flex;
    justify-content: center;
    justify-content: center;
    color: #cac8c8;
`;


const TimeLine: FC = () => {
    const items = [
        {
            title: "01.09.2009",
            cardTitle: "Ткач и Шорен идут в школу",
            cardSubtitle: "Нижний Новгород"

        },
        {
            title: "01.09.2009",
            cardTitle: "Ткач и Шорен идут в школу",

        },
        {
            title: "01.09.2009",
            cardTitle: "Ткач и Шорен идут в школу",

        },
        {
            title: "01.09.2009",
            cardTitle: "Ткач и Шорен идут в школу",

        },
        {
            title: "01.09.2009",
            cardTitle: "Ткач и Шорен идут в школу",

        },
        {
            title: "01.09.2009",
            cardTitle: "Ткач и Шорен идут в школу",

        },
        {
            title: "01.09.2009",
            cardTitle: "Ткач и Шорен идут в школу",

        },
        {
            title: "01.09.2009",
            cardTitle: "Ткач и Шорен идут в школу",

        },
        {
            title: "01.09.2009",
            cardTitle: "Ткач и Шорен идут в школу",

        },
        {
            title: "01.09.2009",
            cardTitle: "Ткач и Шорен идут в школу",

        },
    ]

    return (
            <TimelineContainerPage>
                <div style={{ width: "900px", height: "90vh" }}>
                    <Chrono
                        items={items}
                        mode="VERTICAL_ALTERNATING"
                        theme={{primary:"#4290f6", secondary: "#cac8c8" }}
                    />
                </div>
            </TimelineContainerPage>

    );
}
export default TimeLine;
