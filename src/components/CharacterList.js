import React, { useEffect, useState } from "react";
import Axios from "axios";
import Loader from "react-loader-spinner";

import CharacterCard from "./CharacterCard";
import PageMenu from "./Pagination";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charList, setCharList] = useState();
  const [page, setPage] = useState(1);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(resp => setCharList(resp.data.results))
      .catch(error => console.log("Axios Character Error:", error))
  }, [page]);

  const handlePageChange = (number) => {
    setPage(number);
  }

  return ((!charList) ? <Loader className="loader" type="Oval" color="red" height={80} width={80} /> :
    <>
      <section className="character-list grid-view">
        {charList.map(character => {
          return <CharacterCard image={character.image} key={character.id}
            species={character.species} name={character.name} status={character.status}
            origin={character.origin.name} location={character.location.name}
            episodes={character.episode.length} />
        })}
      </section>
      <div>
        <PageMenu pages={25} handlePageChange={handlePageChange} />
      </div>
    </>
  );
}
