import React, { useEffect, useState } from "react";
import axios from "axios"

import LocationCard from "./LocationCard";
import PageMenu from './Pagination';

export default function LocationsList() {
    const [locList, setLocList] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/?page=${page}`)
            .then(resp => setLocList(resp.data.results))
            .catch(error => console.log("Axios Location Error: ", error))
    }, [page])

    const handlePageChange = (number) => {
        setPage(number);
    }

    return (
        <>
            <section className="location-list grid-view">
                {locList.map(location => {
                    return <LocationCard key={location.id} name={location.name}
                        type={location.type} dimension={location.dimension}
                        residents={location.residents.length} />
                })}
            </section>
            <div>
                <PageMenu pages={4} handlePageChange={handlePageChange} />
            </div>
        </>
    );
}
