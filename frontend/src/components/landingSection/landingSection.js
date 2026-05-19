import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './landingSection.css';

export default function LandingSection({ arts }) {
    const [index, setIndex] = useState(0);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        if (!arts || arts.length <= 1) return;
        const timer = setInterval(() => {
            setFading(true);
            setTimeout(() => {
                setIndex(i => (i + 1) % arts.length);
                setFading(false);
            }, 600);
        }, 5000);
        return () => clearInterval(timer);
    }, [arts]);

    if (!arts || arts.length === 0) return null;
    const art = arts[index];

    return (
        <section className="hero">
            <Link to={`/art/${art.id}`}>
                <figure className={`hero-image-wrap${fading ? ' hero-fade' : ''}`}>
                    <img src={art.image} alt={art.title} className="hero-image" />
                    <div className="hero-overlay" />
                </figure>
                <div className={`hero-content${fading ? ' hero-fade' : ''}`}>
                    <p className="hero-label">Featured Work</p>
                    <h1 className="hero-title">{art.title}</h1>
                    <p className="hero-artist">{art.artist}, {art.year}</p>
                    <span className="hero-btn">View Work</span>
                </div>
            </Link>
            {arts.length > 1 && (
                <div className="hero-dots">
                    {arts.map((_, i) => (
                        <span key={i} className={`hero-dot${i === index ? ' hero-dot-active' : ''}`} />
                    ))}
                </div>
            )}
        </section>
    );
}
