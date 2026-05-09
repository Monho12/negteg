import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./artDetail.css";

export default function ArtDetail() {
    const { id } = useParams();
    const [art, setArt] = useState(null);

    useEffect(() => {
        fetch("/art.json")
            .then((res) => res.json())
            .then((data) => {
                const found = data.find((item) => item.id === parseInt(id));
                setArt(found);
            });
    }, [id]);

    if (!art) {
        return (
            <main className="main-container">
                <p>Loading artwork...</p>
            </main>
        );
    }

    return (
        <main className="main-container">
            <article className="art-detail">
                <img src={art.image} alt={art.title} />

                <div className="art-info">
                    <h1>{art.title}</h1>
                    <h3>{art.artist}</h3>
                    <p><b>Year:</b> {art.year}</p>
                    <p>{art.description}</p>

                    <div className="art-buttons">
                        <button>Save</button>
                        <button>Like</button>
                    </div>
                </div>
            </article>
        </main>
    );
}