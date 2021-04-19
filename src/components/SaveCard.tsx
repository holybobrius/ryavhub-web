import { Button, Card } from 'antd';
import {FC} from "react";
const { Meta } = Card;

interface Props {
    title: string,
    description: string,
    size: string,
    link: string,
    image: string,
    imageAlt: string
}
const SaveCard: FC<Props> = (props) => {
    return(
        <div className="save-card">
            <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt={props.imageAlt}
                        src={props.image}
                    />
                }
                actions={[
                    <a href={props.link}>
                        <Button type="primary" shape="round">Скачать ({props.size})</Button>
                    </a>
                ]}
            >
                <Meta
                    title={props.title}
                    description={props.description}
                />
            </Card>
        </div>
    )
}
export default SaveCard
