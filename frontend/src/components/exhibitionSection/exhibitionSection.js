import { Link } from 'react-router-dom';
import './exhibitionSection.css';

export default function ExhibitionSection({ art }) {
    return (
        <section className="exhibition-section">
            <div className="exhibition-content">
                <p className="section-label">On View Now</p>
                <h2 className="exhibition-title">Light &amp; Impression</h2>
                <p className="exhibition-dates">March 1 &mdash; June 30, 2026</p>
                <p className="exhibition-desc">
                    A sweeping survey of Impressionist and Post-Impressionist painting,
                    tracing the radical shift from academic tradition to the bold new
                    language of light, color, and sensation that transformed Western art forever.
                </p>
                <Link to="/gallery" className="exhibition-btn">Explore Exhibition</Link>
            </div>
            {art && (
                <figure className="exhibition-image-wrap">
                    <img src={art.image} alt="Exhibition" className="exhibition-image" />
                </figure>
            )}
        </section>
    );
}
