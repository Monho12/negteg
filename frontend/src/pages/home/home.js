import './home.css';
import { useEffect, useState } from 'react';
import NewArrivals from '../../components/newArrivals/newArrivals';
import ExhibitionSection from '../../components/exhibitionSection/exhibitionSection';
import ArtistsSection from '../../components/artistsSection/artistsSection';
import LandingSection from '../../components/landingSection/landingSection';

export default function Home() {
    const [arts, setArts] = useState([]);

    useEffect(() => {
        fetch("/art.json")
            .then(res => res.json())
            .then(data => setArts(data))
            .catch(err => console.log(err));
    }, []);

    const newArts = arts.slice(-3).reverse();

    const artists = arts.reduce((acc, art) => {
        if (!acc.find(a => a.name === art.artist)) {
            acc.push({
                name: art.artist,
                works: arts.filter(a => a.artist === art.artist),
                image: art.image,
                artistImage: art.artistImage
            });
        }
        return acc;
    }, []);

    return (
        <main className="home">
            <LandingSection arts={arts} />
            <NewArrivals arts={newArts} />
            <ExhibitionSection art={arts[2]} />
            <ArtistsSection artists={artists} arts={arts.image} />
        </main>
    );
}
