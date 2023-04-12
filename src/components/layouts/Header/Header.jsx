import { Link } from 'react-router-dom'
import Container from '../Container/Container'
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Container>
                <Link to='/' className="logo">
                    <h1>Rylyrics</h1>
                    <i className="fa-solid fa-music"></i>
                </Link>

                <ul>
                    <Link to='/favorites'><li>Favoritas</li></Link>
                </ul>

                <div className="menu-mobile">
                    <i className="fa-solid fa-bars"></i>
                </div>
            </Container>
        </nav>
    )
}

export default Header