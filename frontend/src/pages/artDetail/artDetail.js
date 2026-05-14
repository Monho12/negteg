import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./artDetail.css";
import ArtCard from "../../components/artCard/artCard";

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
        <main className="main-containerDetail">
            <ArtCard
                title={art.title}
                artist={art.artist}
                description={art.description}
                image={art.image}
                medium={art.medium}
                dimensions={art.dimensions}
                location={art.location}
                id={art.id}
            />
        </main>
    );
}