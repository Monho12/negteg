import { useEffect, useState, useMemo } from "react";
import MiniArtCard from "../../components/miniArtCard/miniArtCard";
import GallerySearch from "../../components/gallerySearch/gallerySearch";
import GalleryTabs from "../../components/galleryTabs/galleryTabs";
import "./gallery.css";

export default function Gallery() {
    const [arts, setArts] = useState([]);
    const [activeTab, setActiveTab] = useState('arts');
    const [search, setSearch] = useState('');
    const [activeGenre, setActiveGenre] = useState('all');
    const [sort, setSort] = useState('default');

    useEffect(() => {
        fetch("/art.json")
            .then(res => res.json())
            .then(data => setArts(data))
            .catch(err => console.log("Error loading gallery:", err));
    }, []);

    const genres = useMemo(
        () => ['all', ...new Set(arts.map(a => a.genre).filter(Boolean))],
        [arts]
    );

    const artists = useMemo(() =>
        arts.reduce((acc, art) => {
            if (!acc.find(a => a.name === art.artist)) {
                acc.push({
                    name: art.artist,
                    works: arts.filter(a => a.artist === art.artist),
                    artistImage: art.artistImage,
                });
            }
            return acc;
        }, []),
        [arts]
    );

    const filteredArts = useMemo(() => {
        const q = search.toLowerCase();
        let result = arts.filter(art => {
            const matchSearch = !search ||
                art.title.toLowerCase().includes(q) ||
                art.artist.toLowerCase().includes(q);
            const matchGenre = activeTab !== 'genres' || activeGenre === 'all' || art.genre === activeGenre;
            return matchSearch && matchGenre;
        });
        if (sort === 'az') return [...result].sort((a, b) => a.title.localeCompare(b.title));
        if (sort === 'za') return [...result].sort((a, b) => b.title.localeCompare(a.title));
        if (sort === 'newest') return [...result].sort((a, b) => b.year - a.year);
        if (sort === 'oldest') return [...result].sort((a, b) => a.year - b.year);
        return result;
    }, [arts, search, activeGenre, activeTab, sort]);

    const filteredArtists = useMemo(() =>
        artists.filter(artist =>
            !search || artist.name.toLowerCase().includes(search.toLowerCase())
        ),
        [artists, search]
    );

    function handleTabChange(tab) {
        setActiveTab(tab);
        setActiveGenre('all');
    }

    const isArtists = activeTab === 'artists';
    const count = isArtists ? filteredArtists.length : filteredArts.length;

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

            <div className="gallery-toolbar">
                <span className="gallery-count">{count} {count === 1 ? 'result' : 'results'}</span>
                {!isArtists && (
                    <select
                        className="gallery-sort"
                        value={sort}
                        onChange={e => setSort(e.target.value)}
                    >
                        <option value="default">Default</option>
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                        <option value="az">A → Z</option>
                        <option value="za">Z → A</option>
                    </select>
                )}
            </div>

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

            {isArtists ? (
                filteredArtists.length === 0 ? (
                    <p className="gallery-empty">No artists found.</p>
                ) : (
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
                )
            ) : (
                filteredArts.length === 0 ? (
                    <p className="gallery-empty">No works found.</p>
                ) : (
                    <ul className="gallery-grid">
                        {filteredArts.map(art => (
                            <li key={art.id}>
                                <MiniArtCard {...art} />
                            </li>
                        ))}
                    </ul>
                )
            )}
        </main>
    );
}
