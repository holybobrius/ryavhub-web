import '../styles/GameSaves.css';
import SaveCard from "../components/SaveCard"

export default function GameSaves() {
    return (
        <div className="gameSaves">
            <h1>Сейвы</h1>
            <div className="save-cards">
                <SaveCard 
                    title="SevTech" 
                    description="2020" 
                    imageAlt="SevTech" 
                    image="https://i.imgur.com/7sNvSfH.png" 
                    size="1.1GB">
                </SaveCard>
                <SaveCard 
                    title="Яма 8" 
                    description="2020" 
                    imageAlt="Яма 8" 
                    image="https://i.imgur.com/KeEcV7R.png" 
                    size="2.9GB" 
                    link="https://mega.nz/file/f1UiBL7C#_2ocFW80t45HM32aw4uWlUIBtMeVmwVBhflm2V-cY1c">
                </SaveCard>
            </div>
        </div>
    );
}