import { Timeline } from 'antd';
import { Chrono } from 'react-chrono'
import styled from 'styled-components'

const TimelinePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Oswald', sans-serif;
`;

const TimelineContainer = styled.div`
    display: flex;
    align-self: center;
    justify-content: center;
`;

const Header = styled.h1`
    margin-top: 10px;
    font-size: 5rem;
    color: var(--primary);
    align-self: center;
`;

export default function TimelinePage() {
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
        <TimelinePageContainer>
            <Header>Таймлайн</Header>
            <TimelineContainer>
            <div style={{ width: "700px", height: "650px" }}>
                <Chrono 
                    items={items} 
                    mode="VERTICAL_ALTERNATING" 
                    theme={{primary:"var(--primary)", secondary:"#fdfa48"}} />
                </div>
            </TimelineContainer>
        </TimelinePageContainer>
    );

    { /* <Timeline>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
    </Timeline> */}
}