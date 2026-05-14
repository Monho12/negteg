import { useEffect, useState } from "react";
import MiniArtCard from "../../components/miniArtCard/miniArtCard";
import GallerySearch from "../../components/gallerySearch/gallerySearch";
import GalleryTabs from "../../components/galleryTabs/galleryTabs";
import "./gallery.css";

export default function Gallery() {
    const [arts, setArts] = useState([]);
    const [activeTab, setActiveTab] = useState('arts');
    const [search, setSearch] = useState('');
    const [activeGenre, setActiveGenre] = useState('all');

    useEffect(() => {
        fetch("/art.json")
            .then(res => res.json())
            .then(data => setArts(data))
            .catch(err => console.log("Error loading gallery:", err));
    }, []);

    const genres = ['all', ...new Set(arts.map(a => a.genre).filter(Boolean))];

    const artists = arts.reduce((acc, art) => {
        if (!acc.find(a => a.name === art.artist)) {
            acc.push({
                name: art.artist,
                works: arts.filter(a => a.artist === art.artist),
                artistImage: art.artistImage,
            });
        }
        return acc;
    }, []);

    const filteredArts = arts.filter(art => {
        const q = search.toLowerCase();
        const matchSearch = !search ||
            art.title.toLowerCase().includes(q) ||
            art.artist.toLowerCase().includes(q);
        const matchGenre = activeTab !== 'genres' || activeGenre === 'all' || art.genre === activeGenre;
        return matchSearch && matchGenre;
    });

    const filteredArtists = artists.filter(artist =>
        !search || artist.name.toLowerCase().includes(search.toLowerCase())
    );

    function handleTabChange(tab) {
        setActiveTab(tab);
        setActiveGenre('all');
    }

    return (
        <main className="gallery-page">
            <div className="gallery-header">
                <hgroup>
                    <p className="gallery-label">Explore</p>
                    <h1 className="gallery-title">The Collection</h1>
                </hgroup>
                <GallerySearch value={search} onChange={setSearch} />
            </div>

            <GalleryTabs active={activeTab} onChange={handleTabChange} />

            {activeTab === 'genres' && (
                <div className="genre-pills">
                    {genres.map(genre => (
                        <button
                            key={genre}
                            className={`genre-pill${activeGenre === genre ? ' genre-pill--active' : ''}`}
                            onClick={() => setActiveGenre(genre)}
                        >
                            {genre === 'all' ? 'All' : genre}
                        </button>
                    ))}
                </div>
            )}

            {activeTab === 'artists' ? (
                <ul className="gallery-artists-grid">
                    {filteredArtists.map(artist => (
                        <li key={artist.name} className="gallery-artist-card">
                            <figure className="gallery-artist-img-wrap">
                                <img src={artist.artistImage} alt={artist.name} className="gallery-artist-img" />
                            </figure>
                            <p className="gallery-artist-count">
                                {artist.works.length} {artist.works.length === 1 ? 'work' : 'works'}
                            </p>
                            <h3 className="gallery-artist-name">{artist.name}</h3>
                        </li>
                    ))}
                </ul>
            ) : (
                <>
                    {filteredArts.length === 0 ? (
                        <p className="gallery-empty">No works found.</p>
                    ) : (
                        <ul className="gallery-grid">
                            {filteredArts.map(art => (
                                <li key={art.id}>
                                    <MiniArtCard {...art} />
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </main>
    );
}
