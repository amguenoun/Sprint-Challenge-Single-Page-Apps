import React, { useEffect, useState } from "react";
import axios from 'axios';

import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
    // TODO: Add useState to track data from useEffect
    const [epList, setEpList] = useState([]);
    useEffect(() => {
        // TODO: Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        axios.get(`https://rickandmortyapi.com/api/episode/`)
            .then(resp => setEpList(resp.data.results))
            .catch(error => console.log("Axios Episodes Error: ", error))
    }, []);

    return (
        <section className="episode-list grid-view">
            {epList.map(ep => {
                return <EpisodeCard key={ep.id} name={ep.name}
                    episode={ep.episode} airdate={ep.air_date}
                    characters={ep.characters.length} />
            })}
        </section>
    );
}
