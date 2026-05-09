import { Link } from "react-router-dom";
import "./footer.css";

export function Footer() {
    return (

        <footer className="footer">
            <div className="footer-left">
                <p>&copy; 2026 NegTeg. All rights reserved.</p>
            </div>

            <div className="footer-right">
                <Link to="/terms">Terms</Link>
                <Link to="/privacy">Privacy</Link>
                <Link to="/newsletter">Newsletter</Link>
            </div>
        </footer>
    )
}
