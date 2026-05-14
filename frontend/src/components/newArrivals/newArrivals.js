import { Link } from 'react-router-dom';
import MiniArtCard from '../miniArtCard/miniArtCard';
import './newArrivals.css';

export default function NewArrivals({ arts }) {
    return (
        <section className="home-section">
            <header className="section-header">
                <hgroup>
                    <p className="section-label">Recently Added</p>
                    <h2 className="section-title">New Arrivals</h2>
                </hgroup>
                <Link to="/gallery" className="see-all">See All &rarr;</Link>
            </header>
            <ul className="arrivals-grid">
                {arts.map(art => (
                    <li key={art.id}>
                        <MiniArtCard {...art} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
