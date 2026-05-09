import './header.css';
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="main-header">
            <p className="logo">Artgal</p>

            <ul className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/gallery">Gallery</Link>
            </ul>

            <div className="auth-links">
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
            </div>
        </header>
    )
}