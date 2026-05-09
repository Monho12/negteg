import { useEffect, useState } from "react";
import MiniArtCard from "../../components/miniArtCard/miniArtCard";
import "./gallery.css";

export default function Gallery() {
    const [arts, setArts] = useState([]);

    useEffect(() => {
        fetch("/art.json")
            .then((res) => res.json())
            .then((data) => setArts(data))
            .catch((err) => console.log("Error loading gallery:", err));
    }, []);

    return (
        <main className="container">
            <h3>Related Explorations</h3>
            <nav className="gallery-grid">
                {arts.map((art) => (
                    <MiniArtCard key={art.id} {...art} />
                ))}
            </nav>
        </main>

    );
}