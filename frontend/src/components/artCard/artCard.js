import "./artCard.css";

export default function ArtCard({ title, artist, description, image, id, dimensions, location, medium }) {
    return (
        <article className="art-card" id={id}>
            <img src={image} alt={title} className="img" />

            <div className="art-info">
                <h5>Current Exhibition</h5>
                <h1 className="art-title">{title}</h1>
                <h4 className="art-artist">{artist}</h4>
                <p className="art-description">{description}</p>

                <dl className="art-details">
                    <div className="art-detail">
                        <dt className="detail-label">Medium</dt>
                        <dd className="detail-value">{medium}</dd>
                    </div>
                    <div className="art-detail">
                        <dt className="detail-label">Dimensions</dt>
                        <dd className="detail-value">{dimensions}</dd>
                    </div>
                    <div className="art-detail">
                        <dt className="detail-label">Location</dt>
                        <dd className="detail-value">{location}</dd>
                    </div>
                </dl>

                <footer className="art-buttons">
                    <button>Save</button>
                    <button>Like</button>
                </footer>
            </div>
        </article>
    );
}
