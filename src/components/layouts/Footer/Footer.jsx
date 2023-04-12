import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <Link to='https://ryancostaportfolio.netlify.app/' target='_blank'>
                <p>&copy; 2023 - Ryan Costa Benjamim</p>
            </Link>
        </footer>
    )
}

export default Footer