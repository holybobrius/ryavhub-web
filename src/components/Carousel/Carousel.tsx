import { Image } from 'antd';
import { FC, useState } from 'react';
import './Carousel.css'

interface Props {
    data: string[]
}

export const Carousel: FC<Props> = ({ data }) => {
    const [imageIndex, setImageIndex] = useState(0);

    return (
        <div className='carousel-container'>
            <div className="images-container">{data.map(n => <Image src={n} preview={false} alt='Image for game save' />)}</div>
            <button className="arrowButton arrowLeft"></button>
            <button className="arrowButton arrowRight"></button>
        </div>
    )
}