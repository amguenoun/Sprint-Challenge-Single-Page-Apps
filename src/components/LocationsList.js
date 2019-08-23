import React, { useEffect, useState } from "react";
import axios from "axios"

import LocationCard from "./LocationCard";

export default function LocationsList() {
    const [locList, setLocList] = useState([]);
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/location/')
            .then(resp => setLocList(resp.data.results))
            .catch(error => console.log("Axios Location Error: ", error))
    }, [])

    return (
        <section className="location-list grid-view">
            {locList.map(location => {
                return <LocationCard key={location.id} name={location.name}
                    type={location.type} dimension={location.dimension}
                    residents={location.residents.length} />
            })}
        </section>
    );
}
