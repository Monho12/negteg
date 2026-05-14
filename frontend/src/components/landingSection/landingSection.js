import { Link } from 'react-router-dom';
import './landingSection.css';

export default function LandingSection({ art }) {
    if (!art) return null;
    return (
        <section className="hero">
            <Link to={`/art/${art.id}`}>
                <figure className="hero-image-wrap">
                    <img src={art.image} alt={art.title} className="hero-image" />
                    <div className="hero-overlay" />
                </figure>
                <div className="hero-content">
                    <p className="hero-label">Featured Work</p>
                    <h1 className="hero-title">{art.title}</h1>
                    <p className="hero-artist">{art.artist}, {art.year}</p>
                    <Link to={`/art/${art.id}`} className="hero-btn">View Work</Link>
                </div>
            </Link>
        </section>
    );
}
