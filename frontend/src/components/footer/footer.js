import { Link } from "react-router-dom";
import "./footer.css";

export function Footer() {
    return (
        <footer className="footer">
            <small className="footer-left">&copy; 2026 NegTeg. All rights reserved.</small>

            <nav className="footer-right">
                <Link to="/terms">Terms</Link>
                <Link to="/privacy">Privacy</Link>
                <Link to="/newsletter">Newsletter</Link>
            </nav>
        </footer>
    )
}
