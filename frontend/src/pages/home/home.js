import './home.css'
import MiniArtCard from '../../components/miniArtCard/miniArtCard';
import { useEffect, useState } from 'react';

export default function Home() {
    const [arts, setArts] = useState([]);

    useEffect(() => {
        fetch("/art.json")
            .then(res => res.json())
            .then(data => setArts(data))
            .catch(err => console.log(err));
    }, []);
    return (
        <main className="main-container">
            <h1>The Collection</h1>
            <p>
                Explore our collection of artworks, connect with artists, and share your
                own creations.
            </p>

            <section className="arts-grid">
                {arts.map((art) => (
                    <MiniArtCard key={art.id} {...art} />
                ))}
            </section>



        </main>
    )
}