import '../styles/Home.css';

export default function Home() {
    return (
        <div className="home">
            <div className="half">
                <div className="meme-card">
                    <div className="blue"></div>
                    <div className="yellow"></div>
                </div>
            </div>
            <div className="half">
                <div className="bio-card">
                    <div className="bio-card--title">
                        РявХаб
                    </div>
                    <div className="bio-card--text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla iaculis justo a mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                        </p>
                        <p>
                            Duis lacinia accumsan ullamcorper. Vivamus a sapien fringilla sapien convallis vestibulum sed non sapien. Praesent auctor, est nec dignissim rhoncus, mauris ex scelerisque est, eu vestibulum nulla tellus quis dolor.
                        </p>
                        <p>
                            Vestibulum a interdum urna. Cras luctus ligula tincidunt nulla pellentesque auctor. Quisque vehicula venenatis tortor vel efficitur.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}