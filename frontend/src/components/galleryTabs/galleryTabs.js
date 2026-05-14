import './galleryTabs.css';

const TABS = [
    { id: 'arts', label: 'Arts' },
    { id: 'genres', label: 'Genres' },
    { id: 'artists', label: 'Artists' },
];

export default function GalleryTabs({ active, onChange }) {
    return (
        <nav className="gallery-tabs">
            {TABS.map(tab => (
                <button
                    key={tab.id}
                    className={`gallery-tab${active === tab.id ? ' gallery-tab--active' : ''}`}
                    onClick={() => onChange(tab.id)}
                >
                    {tab.label}
                </button>
            ))}
        </nav>
    );
}
