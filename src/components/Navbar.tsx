import { Link } from 'react-router-dom';
import { Button } from 'antd';
import '../styles/Navbar.css';
import logo from '../assets/img/logotext.svg'

export default function Navbar() {
    //<Link className="navbar-buttons--button" ></Link>
    return (
        <nav>
            <Link to="/"><div className="logo" style={{ backgroundImage: `url(${logo})` }}/></Link>
            <div className="navbar-buttons">
                <Link to="/quotes">
                    <Button type="link" size="large">Цитаты)</Button>
                </Link>
                <Link to="/timeline">
                    <Button type="link" size="large">Таймлайнич)</Button>    
                </Link>
                <Link to="/gamesaves">
                    <Button type="link" size="large">Сейвы)</Button>
                </Link>
            </div>
            <Button type="primary" className="login">Login</Button>
        </nav>
    )
}