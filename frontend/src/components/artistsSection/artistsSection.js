import './artistsSection.css';

export default function ArtistsSection({ artists ,arts}) {
    return (
        <section className="home-section">
            <header className="section-header">
                <hgroup>
                    <p className="section-label">In the Collection</p>
                    <h2 className="section-title">Featured Artists</h2>
                </hgroup>
            </header>
            <ul className="artists-grid">
                {artists.map(artist => (
                    <li key={artist.name} className="artist-card">
                        <figure className="artist-img-wrap">
                            <img src={artist.artistImage ? artist.artistImage : arts.image} alt={artist.name} className="artist-img" />
                        </figure>
                        <p className="artist-works-count">
                            {artist.works.length} {artist.works.length === 1 ? 'work' : 'works'}
                        </p>
                        <h3 className="artist-name">{artist.name}</h3>
                    </li>
                ))}
            </ul>
        </section>
    );
}
