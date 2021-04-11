import { Button, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;

export default function SaveCard(props: any) {
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