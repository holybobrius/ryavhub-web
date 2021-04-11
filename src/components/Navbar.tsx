import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/img/logotext.svg'

export default function Navbar() {
    //<Link className="navbar-buttons--button" ></Link>
    return (
        <header>
            <Link to="/"><div className="logo" style={{ backgroundImage: `url(${logo})` }}/></Link>
            <div className="navbar-buttons">
                <Link to="/quotes">
                    <button>Цитаты)</button>
                </Link>
                <Link to="/timeline">
                    <button>Таймлайнич)</button>    
                </Link>
                <Link to="/gamesaves">
                    <button>Сейвы)</button>
                </Link>
            </div>
            <button className="login">Login</button>
        </header>
    )
}