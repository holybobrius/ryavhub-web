import { FC } from 'react'
import '../styles/GameSaves.css';
import SaveCard from "../components/SaveCard"
import styled from 'styled-components'
// Styles

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 270px));
    justify-content: space-around;
    column-gap: 10px;
    row-gap: 20px;
`

const SavesContainer = styled.div`
    font-family: 'Oswald', sans-serif;
    text-align: center;
`

const Heading = styled.h1`
    margin-top: 10px;
    font-size: 5rem;
    color: var(--primary);
`

const GameSaves: FC = () => {
    return (
        <SavesContainer>
            <Heading>Сейвы</Heading>
            <CardsContainer>
                <SaveCard
                    title="SevTech"
                    description="2020"
                    imageAlt="SevTech"
                    image="https://i.imgur.com/7sNvSfH.png"
                    size="1.1GB"
                    link="https://mega.nz/file/7o9gEBxD#T-xSiZ_dZnuR5rSGt2xFgNNnpQfvYYjXL5grHnTp100">
                </SaveCard>
                <SaveCard
                    title="Яма 8"
                    description="2020"
                    imageAlt="Яма 8"
                    image="https://i.imgur.com/KeEcV7R.png"
                    size="2.9GB"
                    link="https://mega.nz/file/f1UiBL7C#_2ocFW80t45HM32aw4uWlUIBtMeVmwVBhflm2V-cY1c">
                </SaveCard>
                <SaveCard
                    title="Яма 7"
                    description="2019"
                    imageAlt="Яма 7"
                    image="https://i.imgur.com/nGeQqEN.png"
                    size="3.1GB"
                    link="https://mega.nz/file/689UHLwa#9mPDItjBKArU3eHmoYZq2WIugdlf7kOLQpAtAtcjI4A">
                </SaveCard>
                <SaveCard
                    title="Ачивочный"
                    description="2019"
                    imageAlt="Ачивочный"
                    image="https://i.imgur.com/BQVbRaC.png"
                    size="762.2MB"
                    link="https://mega.nz/file/zxtGmBgJ#QH3T_mv4WAcvyohbC7tuZ0DozfAuB04VUIa_5zl7Lks">
                </SaveCard>
                <SaveCard
                    title="Яма 6"
                    description="2018"
                    imageAlt="Яма 6"
                    image="https://i.imgur.com/KQgN7Uh.png"
                    size="347MB"
                    link="https://mega.nz/file/7xsSGLQI#oyO7Oy5FdJxh1hvvbHnWqeXOJiV-TnBJBP9tC2m1m88">
                </SaveCard>
                <SaveCard
                    title="Яма 5"
                    description="2017"
                    imageAlt="Яма 5"
                    image="https://i.imgur.com/Hh41RCQ.png"
                    size="98.3MB"
                    link="https://mega.nz/file/vltj3AYC#8e32Hp7QcwmYDsWf6_hoUfCvJTehJTEqEUdv9NsFIDc">
                </SaveCard>
                <SaveCard
                    title="Яма"
                    description="2015"
                    imageAlt="Яма"
                    image="https://i.imgur.com/BoTg0He.png"
                    size="62.2MB"
                    link="https://mega.nz/file/vltj3AYC#8e32Hp7QcwmYDsWf6_hoUfCvJTehJTEqEUdv9NsFIDc">
                </SaveCard>
            </CardsContainer>
        </SavesContainer>
    );
}
export default GameSaves

