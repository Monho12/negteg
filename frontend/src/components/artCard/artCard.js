import "./artCard.css";

export default function ArtCard({ title, artist, description, image, id }) {
    return (
        <article className="art-card" id={id}>
            <img src={image} alt={title} className="img"/>

            <div className="art-info">
                <h5>Current Exhibition</h5>
                <h1 className="art-title">{title}</h1>
                <h4 className="art-artist">{artist}</h4>
                <h4 className="art-description">
                    <i>{description}</i>
                </h4>

                <section className="art-buttons">
                    <div>💾 Save</div>
                    <div>❤️ Like</div>
                </section>
            </div>
        </article>
    );
}