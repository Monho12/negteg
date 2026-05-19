import './header.css';
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="main-header">
            <Link to="/" className="logo">Negteg</Link>

            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                </ul>
            </nav>

            <nav className="auth-links">
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
            </nav>
        </header>
    )
}
