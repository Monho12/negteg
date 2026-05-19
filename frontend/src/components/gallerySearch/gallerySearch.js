import './gallerySearch.css';

export default function GallerySearch({ value, onChange }) {
    return (
        <div className="gallery-search">
            <input
                type="text"
                className="gallery-search-input"
                placeholder="Search the collection"
                value={value}
                onChange={e => onChange(e.target.value)}
            />
            {value && (
                <button className="gallery-search-clear" onClick={() => onChange('')}>✕</button>
            )}
        </div>
    );
}
